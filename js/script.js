const iconsMenu = document.getElementById('menu-icon');
const iconOpenClose = document.getElementById('js-menu-icon-open-close');
const menuList1 = document.getElementById('js-menu1');
const menuList2 = document.getElementById('js-menu2');

iconOpenClose.addEventListener('click', function(){

    if (this.classList.contains('line-menu-icon-move') == false) {
        this.classList.toggle('line-menu-icon-move');
        menuList1.style.display = 'flex';
        menuList1.classList.toggle('fadeInDown');
        menuList2.style.display = 'flex';
        menuList2.classList.toggle('fadeInDown');
    }
    else {
        this.classList.remove('line-menu-icon-move');
        menuList1.classList.remove('fadeInDown');
        menuList2.classList.remove('fadeInDown');
      
        menuList1.style.display = 'none';
        menuList2.style.display = 'none';
    }
});

window.addEventListener('resize', function(){ 
    if (window.matchMedia("(min-width: 992px)").matches) {
        iconsMenu.style.display = 'none';
        menuList1.style.display = 'flex';
        menuList2.style.display = 'flex';
    }
    else {
        iconsMenu.style.display = 'block';
    }
});
