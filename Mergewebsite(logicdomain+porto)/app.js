// animation for bottomtop
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-1");
      // } else {
      //   entry.target.classList.remove("show-1");
      // } //optional if u want animation when u return to the same point then use this.
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-1");
hiddenElements.forEach((el) => observer.observe(el));

// animation for bottomtop-2
const observer_2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-2");
      // } else {
      //   entry.target.classList.remove("show-2");
      // } //optional if u want animation when u return to the same point then use this.
    }
  });
});

const hiddenElements_2 = document.querySelectorAll(".hidden-2");
hiddenElements_2.forEach((el) => observer_2.observe(el));


// top button 
function toggleNav() {
  document.querySelector('.nav').classList.toggle('show');
}

const topButton = document.querySelector('.top-button-link');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    topButton.classList.add('active');
  } else {
    topButton.classList.remove('active');
  }
});