export default function initMenuMobile(){
   const menuHamburguer = document.querySelector('.icon');
   const menuActived = document.querySelector('.menu-mobile')

   function menuMobile(){
       menuHamburguer.classList.toggle('active')
       menuActived.classList.toggle('menu-actived')
   }

   menuHamburguer.addEventListener('click', menuMobile);

    //   CLOSE MENU
    
   let menuLi = document.querySelectorAll('.menu-mobile li');
   menuLi.forEach((item) => {
        item.addEventListener('click', menuMobile);
   });
}