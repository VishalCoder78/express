const bookbtn = document.getElementById("book_btn");

const bookNav = document.getElementById("book_opt");

bookbtn.addEventListener("mouseover", function() {
    bookNav.style.display = "flex";
});

bookNav.addEventListener("mouseout", function() {
    bookNav.style.display = "none";
});

const expbtn = document.getElementById("explore_btn");

const expnav = document.getElementById("exp_nav");

expbtn.addEventListener("mouseover", function() {
    expnav.style.display = "flex";
});

expnav.addEventListener("mouseout", function() {
    expnav.style.display = "none";
});
