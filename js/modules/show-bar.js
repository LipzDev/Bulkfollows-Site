export default function initShowBar(){
   let header = document.querySelector('.header');

   function showMenu(){
      if(window.scrollY > 10){
         header.classList.add('show-bar');
      } else {
         header.classList.remove('show-bar');
      }
   }

   window.addEventListener('scroll', showMenu);
}