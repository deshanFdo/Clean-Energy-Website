// Array of prompts for the user
var prompts = [
    // Step 1: Personal Details
    { category: 'Step 1: Personal Details | Question 1/4', question: 'What is your name?', outputLabel: 'Name', answered: false },
    { category: 'Step 1: Personal Details | Question 2/4', question: 'What is your age?', outputLabel: 'Age', answered: false },
    { category: 'Step 1: Personal Details | Question 3/4', question: 'Where do you currently reside?', outputLabel: 'City', answered: false },
    { category: 'Step 1: Personal Details | Question 4/4', question: 'What is your email address?', outputLabel: 'Email', answered: false },
    
    // Step 2: Occupational and Academic Background
    { category: 'Step 2: Occupational and Academic Background | Question 1/4', question: 'What is your current occupation? ', outputLabel: 'Occupation', answered: false },
    { category: 'Step 2: Occupational and Academic Background | Question 2/4', question: 'What sector do you work in?', outputLabel: 'Work Sector', answered: false },
    { category: 'Step 2: Occupational and Academic Background | Question 3/4', question: 'What is your highest academic qualification?', outputLabel: 'Highest Qualification', answered: false },
    { category: 'Step 2: Occupational and Academic Background | Question 4/4', question: 'Are you currently involved in any energy-related study or work?', outputLabel: 'Energy-Related Involvement', answered: false },
    
    // Step 3: Energy Preferences and Habits
    { category: 'Step 3: Energy Preferences and Habits | Question 1/4', question: 'Do you currently use any renewable energy at home?', outputLabel: 'Renewable Energy at Home', answered: false },
    { category: 'Step 3: Energy Preferences and Habits | Question 2/4', question: 'Have you replaced any home appliances with energy-efficient models?', outputLabel: 'Energy-Efficient Appliances', answered: false },
    { category: 'Step 3: Energy Preferences and Habits | Question 3/4', question: 'Do you utilize public transportation regularly?', outputLabel: 'Public Transportation Usage', answered: false },
    { category: 'Step 3: Energy Preferences and Habits | Question 4/4', question: 'Have you participated in any clean energy workshops or events?', outputLabel: 'Clean Energy Events Participation', answered: false },
    
    // Step 4: Engagement with Clean Energy
    { category: 'Step 4: Engagement with Clean Energy | Question 1/3', question: 'Are you interested in information about solar or wind energy installations?', outputLabel: 'Interest in Energy Installations', answered: false },
    { category: 'Step 4: Engagement with Clean Energy | Question 2/3', question: 'Would you consider joining a community group for sustainable living?', outputLabel: 'Community Group Interest', answered: false },
    { category: 'Step 4: Engagement with Clean Energy | Question 3/3', question: 'Do you practice any energy-saving habits daily?', outputLabel: 'Energy-Saving Habits', answered: false },
    
    // Step 5: Involvement and Future Actions
    { category: 'Step 5: Involvement and Future Actions | Question 1/3', question: 'Are you interested in learning how to reduce your household\'s energy consumption?', outputLabel: 'Interest in Reducing Consumption', answered: false },
    { category: 'Step 5: Involvement and Future Actions | Question 2/3', question: 'Have you ever contacted a representative or organization regarding clean energy policies?', outputLabel: 'Contacted about Energy Policies', answered: false },
    { category: 'Step 5: Involvement and Future Actions | Question 3/3', question: 'In the next year, do you plan to make any changes to your home to make it more energy-efficient?', outputLabel: 'Plans for Home Efficiency', answered: false },
];

// Array to keep track of skipped prompts
var skippedPrompts = [];

// Current prompt index
var currentPrompt = 0;

// Function to display the next prompt
function displayNextPrompt() {
    var categoryDiv = document.getElementById('category-div');
    var promptDiv = document.getElementById('profile-prompts');
    var buttonContainer = document.getElementById('next-skip-button-container');
    
    if (currentPrompt < prompts.length) {
        var prompt = prompts[currentPrompt];

        // Skip over prompts that have been answered
        while (prompts[currentPrompt].answered && currentPrompt < prompts.length) {
            currentPrompt++;
        }
        if (currentPrompt < prompts.length) {
            var prompt = prompts[currentPrompt];
        // Update the text content of the category div
        categoryDiv.textContent = prompt.category;
        
        promptDiv.innerHTML = '<p>' + prompt.question + '</p><input id="promptResponse" type="text">';
        
        // Clear the button container and append the Next and Skip buttons to it
        buttonContainer.innerHTML = '';

        // Create and append the Next button
        var nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.className = 'next-button'; 
        nextButton.onclick = handlePromptResponse;
        buttonContainer.appendChild(nextButton);

        // Create and append the Skip button
        var skipButton = document.createElement('button');
        skipButton.textContent = 'Skip';
        skipButton.className = 'skip-button';
        skipButton.onclick = handleSkip;
        buttonContainer.appendChild(skipButton);
        
        // Set focus to the input field for better user experience
        var promptResponse = document.getElementById('promptResponse');
        promptResponse.focus();
        }
    } else {
        promptDiv.innerHTML = '<p>Profile complete!</p>';
        // Clear the buttons when completed
        buttonContainer.innerHTML = '';
    }
}

// Function to handle skipping a prompt
function handleSkip() {
    // Record the skipped prompt if it hasn't been skipped before
    if (!skippedPrompts.includes(currentPrompt)) {
        skippedPrompts.push(currentPrompt);
    }
    // Move to the next prompt
    currentPrompt++;
    displayNextPrompt();
    updateProgressBar();
    updateSkippedList(); // Update the list of skipped prompts
}

// Function to handle the user's response to a prompt
function handlePromptResponse() {
    var promptResponse = document.getElementById('promptResponse');
    var response = promptResponse.value.trim(); // Trim to remove any accidental whitespace
    if (response) {
        var prompt = prompts[currentPrompt];
        prompt.answered = true; // Set answered to true
        var profileContentDiv = document.getElementById('profile-content') || createProfileContentDiv();
        
        // Create a new div for the response if necessary
        var responseDiv = document.createElement('div');
        responseDiv.className = 'response';
        responseDiv.innerHTML = '<p><strong>' + prompt.outputLabel + ':</strong> ' + response + '</p>';
        
        // Append the new response div and scroll to the bottom of the profile content div
        profileContentDiv.appendChild(responseDiv);
        profileContentDiv.scrollTop = profileContentDiv.scrollHeight;
        
        // Remove the prompt from the skipped prompts array if it's there
        skippedPrompts = skippedPrompts.filter(index => index !== currentPrompt);
        updateSkippedList();
        
        currentPrompt++;
        displayNextPrompt();
        updateProgressBar();
    } else {
        alert('Please enter a response.'); // Prompt the user if the input field was left empty
    }
}

// Function to create or update the skipped prompts list
function updateSkippedList() {
    var skippedList = document.getElementById('skipped-list') || createSkippedList();
    skippedList.innerHTML = ''; // Clear the list

    skippedPrompts.forEach(function(promptIndex) {
        var listItem = document.createElement('li');
        listItem.textContent = prompts[promptIndex].outputLabel;
        listItem.onclick = function() {
            // Set the current prompt to the one selected and display it
            currentPrompt = promptIndex;
            displayNextPrompt();
        };
        skippedList.appendChild(listItem);
    });

    // Adjust skipped list placement if profile-content exists and has responses
    var profileContentDiv = document.getElementById('profile-content');
    if (profileContentDiv && profileContentDiv.childNodes.length > 0) {
        // If profile-content has responses, ensure skipped list is below it
        profileContentDiv.parentNode.insertBefore(skippedList, profileContentDiv.nextSibling);
    } else {
        // If no responses yet, skipped list can stay or be appended to main-container
        var mainContainer = document.getElementById('main-container');
        if (!mainContainer.contains(skippedList)) {
            mainContainer.appendChild(skippedList);
        }
    }
}

function createSkippedList() {
    var skippedList = document.createElement('ul');
    skippedList.id = 'skipped-list';
    skippedList.style.maxHeight = '200px';
    skippedList.style.overflowY = 'auto';
    var mainContainer = document.getElementById('main-container');
    mainContainer.appendChild(skippedList);
    return skippedList;
}

// Function to create the profile content div
function createProfileContentDiv() {
    var profileContentDiv = document.createElement('div');
    profileContentDiv.id = 'profile-content';
    profileContentDiv.style.border = '1px solid #000';
    profileContentDiv.style.padding = '10px';
    profileContentDiv.style.marginBottom = '10px';
    profileContentDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    profileContentDiv.style.borderRadius = '10px';
    var userProfileDiv = document.getElementById('user-profile');
    userProfileDiv.appendChild(profileContentDiv);
    return profileContentDiv;
}

function updateProgressBar() {
    var progressBar = document.getElementById('progress-bar');
    var progress = (currentPrompt / prompts.length) * 100; // Calculate progress percentage
    progressBar.style.width = progress + '%'; // Set the width of the progress bar
    
    var progressText = document.getElementById('progress-text');
    progressText.textContent = Math.round(progress) + '%'; // Update the percentage text
    
    if (progress === 100) {
        var profileCompleted = document.getElementById('profile-completed');
        profileCompleted.textContent = 'Profile Completed'; // Update the profile completion text
    }
}

function createProfileContentDiv() {
    var mainContainer = document.getElementById('main-container'); // Get the main container
    var profileContentDiv = document.createElement('div');
    profileContentDiv.id = 'profile-content';
    // Set the CSS directly in the styles.css file rather than inline styles
    mainContainer.appendChild(profileContentDiv); // Append it to the main container
    return profileContentDiv;
}

// Display the first prompt
displayNextPrompt();
