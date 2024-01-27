// create a smooth scrolling when a user clicks on an anchor tag

// select all anchor tags
const anchors = document.querySelectorAll('a[href^="#"]');
console.log(anchors);
// loop through all anchor tags
for (let anchor of anchors) {
  // add an event listener to each anchor tag
  anchor.addEventListener('click', function (e) {
    // prevent default behavior
    e.preventDefault();
    // get the href attribute of the anchor tag
    const href = anchor.getAttribute('href');
    console.log(href);
    // select the element with the id that matches the href attribute
    const target = document.querySelector(href);
    // scroll to the element
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
}

// Path: js/main.js
