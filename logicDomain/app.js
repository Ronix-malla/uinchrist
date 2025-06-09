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

// for toogle right to left
const observer_3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("toogle-left-show");
    } else {
      entry.target.classList.remove("show-2");
    } //optional if u want animation when u return to the same point then use this.
  });
});

const toogleButton_1 = document.querySelectorAll(".toogle-right");
toogleButton_1.forEach((el) => observer_3.observe(el));

//for toogle left to right
const observer_4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("toogle-right-show");
    } else {
      entry.target.classList.remove("show-2");
    } //optional if u want animation when u return to the same point then use this.
  });
});
const toogleButton_2 = document.querySelectorAll(".toogle-left");
toogleButton_2.forEach((el) => observer_4.observe(el));

// top button
function toggleNav() {
  document.querySelector(".nav").classList.toggle("show");
}

const topButton = document.querySelector(".top-button-link");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});

// content switiching inner section

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  function resetAnimation(element, className) {
    element.classList.remove(className);

    void element.offsetWidth;

    element.classList.add(className);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      const activeContent = document.getElementById(targetId);
      activeContent.classList.add("active");

      activeContent.querySelectorAll(".toogle-left").forEach((el) => {
        resetAnimation(el, "toogle-left-show");
      });

      activeContent.querySelectorAll(".toogle-right").forEach((el) => {
        resetAnimation(el, "toogle-right-show");
      });
    });
  });
});
