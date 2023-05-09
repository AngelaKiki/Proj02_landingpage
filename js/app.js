/*==================== Create Menu Automatically====================*/ 
const navBar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const mainHero = document.querySelector('.main-hero');
const sections0 = document.querySelectorAll('section');
const toTopButton = document.getElementById('scroll-to-top');

const buildNav = () => {
    sections0.forEach((ele) => {
        const navItemTarget = ele.getAttribute('id');
        const navItemText = ele.getAttribute('data-nav');
        const navItem = document.createElement('li');
        navItem.className = 'nav__item';
        navItem.innerHTML = `<a class="nav-link" aria-controls="${navItemTarget}" href="#">${navItemText}</a>`;
        navList.appendChild(navItem);
    });
};
buildNav();


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 60) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 150;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu [aria-controls=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu [aria-controls=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== Click to the section ====================*/

const menuLinks = document.querySelectorAll('.nav__list a');
// const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认跳转行为
    const targetId = this.getAttribute('aria-controls'); // 获取对应的 section 的 ID
    const targetSection = document.getElementById(targetId); // 根据 ID 获取对应的 section 元素
    const targetTop = targetSection.offsetTop-100; // 获取目标 section 元素的顶部距离

    window.scrollTo({
      top: targetTop, // 滚动到目标 section 元素的位置
      behavior: 'smooth' // 平滑滚动
    });

  });
  link.addEventListener('click', linkAction);
});

