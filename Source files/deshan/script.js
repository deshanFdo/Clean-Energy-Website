// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

// Scroll to the top of the document when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Scroll to the top of the document smoothly
function topFunction() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function showSummary() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const firstTimeInput = document.querySelector('input[name="first-time"]:checked');
    const firstTime = firstTimeInput ? firstTimeInput.value : "";

    const informative = document.querySelector('input[name="informative"]:checked').value;

    const improvements = document.getElementById("improvements").value;

    const satisfactionInput = document.querySelector('input[name="satisfaction"]:checked');
	const satisfaction = satisfactionInput ? satisfactionInput.value : "";

    const recommendInput = document.querySelector('input[name="recommend"]:checked');
    const recommend = recommendInput ? recommendInput.value : "";

    const receiveUpdatesInput = document.getElementById("receive-updates");
    const receiveUpdates = receiveUpdatesInput.value.trim() ;

    const additionalQuestionsInput = document.getElementById("additional-questions");
    const additionalQuestions = additionalQuestionsInput.value.trim();

    document.getElementById("summaryName").textContent = name;
    document.getElementById("summaryEmail").textContent = email;
    document.getElementById("summaryFirstTime").textContent = firstTime;
    document.getElementById("summaryInformative").textContent = informative;
    document.getElementById("summaryImprovements").textContent = improvements;
    document.getElementById("summarySatisfaction").textContent = satisfaction;
    document.getElementById("summaryRecommend").textContent = recommend;
    document.getElementById("summaryReceiveUpdates").textContent = receiveUpdates;
    document.getElementById("summaryAdditionalQuestions").textContent = additionalQuestions;

    document.getElementById("feedback-form").style.display = "none";
    document.getElementById("summary").style.display = "block";
}

function editForm() {
    document.getElementById("feedback-form").style.display = "block";
    document.getElementById("summary").style.display = "none";
}

document.getElementById("initial-submit-btn").addEventListener("click", showSummary);

document.getElementById("submit-btn").addEventListener("click", function() {
    alert("Feedback submitted successfully! Thank you for your Feedback :)");
});

document.getElementById("edit-btn").addEventListener("click", editForm);

/*Content page*/
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}