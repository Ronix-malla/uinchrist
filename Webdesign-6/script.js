// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-1");

    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-1");
hiddenElements.forEach((el) => observer.observe(el));

// animation2
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-2");

    }
  });
});

const hiddenElements2 = document.querySelectorAll(".hidden-2");
hiddenElements2.forEach((el) => observer2.observe(el));


// animation3 
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-3"); 

    }
  });
});

const hiddenElements3 = document.querySelectorAll(".left-show");
hiddenElements3.forEach((el) => observer3.observe(el));

//right animation
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-4"); 
    }
  });
});

const hiddenElements4 = document.querySelectorAll(".right-show");
hiddenElements4.forEach((el) => observer4.observe(el));
