 // ============================
 // Navbar transparent control
 // ============================
const main = document.querySelector('.main');
const navBar = document.querySelector('.nav');

const navBg = (entries) => {
    console.log(entries[0].isIntersecting);
    if (entries[0].isIntersecting == true) {
      navBar.classList.remove('nav-dark');
    }
    else {
      navBar.classList.add('nav-dark');
    }
}
const options = {
  threshold: 0
}

const observer = new IntersectionObserver(navBg, options);
observer.observe(main);
