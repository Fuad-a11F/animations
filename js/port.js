let burger_btn = document.querySelector('.burger');
let menu_item = document.querySelector('.nav__menu');

burger_btn.addEventListener('click', () => {
    menu_item.classList.toggle('active_menu');
    document.body.classList.toggle('hidden');
});


let spoyler = document.querySelectorAll('.article__column');


spoyler.forEach(item => {
   item.addEventListener('click', e => {
       close_window();
       e.target.closest('.article__column').classList.add('is_open');
   });
});

function close_window() {
    spoyler.forEach(item => {
        item.classList.remove('is_open')
    });
}


let animItems = document.querySelectorAll('.anim-item');

window.addEventListener('scroll', begin);

function begin() {
    for (let index = 0; index < animItems.length; index++) {
        let animItem = animItems[index],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem),
            animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active')
        } else {
            if (!animItem.classList.contains('anim-hide')) {
                animItem.classList.remove('_active')
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop
    }
}


begin();

