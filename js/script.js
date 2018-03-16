const iconsMenu = document.getElementById('menu-icon');
const iconOpenClose = document.getElementById('js-menu-icon-open-close');
//const menulist = document.querySelectorAll('nav ul');
const menuList1 = document.getElementById('js-menu1');
const menuList2 = document.getElementById('js-menu2');

iconOpenClose.addEventListener('click', function(){

    if (this.classList.contains('line-menu-icon-move') == false) {
        //menulist[0].classList.remove('fadeOutUp');
        //menulist[1].classList.remove('fadeOutUp');
        menuList1.classList.remove('fadeOutUp');
        menuList2.classList.remove('fadeOutUp');
        this.classList.toggle('line-menu-icon-move');
        //menuList[0].classList.toggle('fadeInDown');
        //menuList[1].classList.toggle('fadeInDown');
        menuList1.classList.toggle('fadeInDown');
        menuList2.classList.toggle('fadeInDown');
    }
    else {
        /* menuList[0].classList.remove('fadeInDown');
        menuList[1].classList.remove('fadeInDown');
        menuList[0].classList.toggle('fadeOutUp');
        menuList[1].classList.toggle('fadeOutUp'); */
        menuList1.classList.remove('fadeInDown');
        menuList2.classList.remove('fadeInDown');
        menuList1.classList.toggle('fadeOutUp');
        menuList2.classList.toggle('fadeOutUp');
        this.classList.remove('line-menu-icon-move');
    }
});
