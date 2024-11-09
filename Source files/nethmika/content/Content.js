document.getElementById("typesButton1").addEventListener("click", function() {
    document.getElementById("section1").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("typesButton2").addEventListener("click", function() {
    document.getElementById("section2").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("typesButton3").addEventListener("click", function() {
    document.getElementById("section3").scrollIntoView({ behavior: 'smooth' });
});

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Scroll to the top of the document smoothly
function topFunction() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
