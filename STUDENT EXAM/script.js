// ============================================
// STUDENT CODING EXAMINATION SYSTEM
// ============================================

// Helper function for creating questions.
// Correct answers are numbered 0, 1, 2, 3.
// A = 0, B = 1, C = 2, D = 3.

function q(question, options, correctAnswer) {
    return {
        question: question,
        options: options,
        answer: options[correctAnswer]
    };
}


// ============================================
// JSS 1 AND JSS 2 QUESTIONS
// SCRATCH - APPLE CATCHING GAME
// ============================================

const scratchQuestions = [

    q(
        "What is the name of the programming software used to create this game?",
        [
            "Microsoft Word",
            "Scratch",
            "Microsoft Excel",
            "Photoshop"
        ],
        1
    ),

    q(
        "How many sprites are used in the Apple Catching Game?",
        ["1", "3", "2", "4"],
        2
    ),

    q(
        "Which of these sprites is used to catch the falling apple?",
        ["Cat", "Bowl", "Ball", "Basket"],
        1
    ),

    q(
        "What happens when the green flag is clicked?",
        [
            "The game stops",
            "The sprites disappear",
            "The game starts",
            "The computer shuts down"
        ],
        2
    ),

    q(
        'Which block category contains the "change y by" block?',
        ["Motion", "Looks", "Sound", "Events"],
        0
    ),

    q(
        'What is the function of the "forever" block?',
        [
            "To stop the game",
            "To repeat instructions continuously",
            "To delete a sprite",
            "To change the background"
        ],
        1
    ),

    q(
        "Which block is used to detect when the apple touches the bowl?",
        [
            "Move 10 steps",
            "Say Hello",
            "Touching Bowl?",
            "Wait 1 second"
        ],
        2
    ),

    q(
        "What is the purpose of the SCORE variable?",
        [
            "To change the apple's colour",
            "To count the apples caught",
            "To move the bowl",
            "To stop the game"
        ],
        1
    ),

    q(
        'Which block category contains the "when green flag clicked" block?',
        ["Motion", "Control", "Events", "Operators"],
        2
    ),

    q(
        'What does the "set SCORE to 0" block do?',
        [
            "Adds 10 points",
            "Stops the score",
            "Resets the score to zero",
            "Deletes the variable"
        ],
        2
    ),

    // SECTION B

    q(
        "What happens when the left arrow key is pressed?",
        [
            "The bowl moves right",
            "The bowl moves left",
            "The apple disappears",
            "The score increases"
        ],
        1
    ),

    q(
        "Which block moves the bowl to the right?",
        [
            "Change x by -10",
            "Change y by 10",
            "Change x by 10",
            "Change y by -10"
        ],
        2
    ),

    q(
        'What does "change y by -3" do to the apple?',
        [
            "Moves it upward",
            "Moves it downward",
            "Moves it right",
            "Changes its size"
        ],
        1
    ),

    q(
        "Which coordinate controls the left and right movement of a sprite?",
        [
            "Y-coordinate",
            "X-coordinate",
            "Z-coordinate",
            "T-coordinate"
        ],
        1
    ),

    q(
        "Which coordinate controls the upward and downward movement of a sprite?",
        [
            "X-coordinate",
            "Z-coordinate",
            "Y-coordinate",
            "W-coordinate"
        ],
        2
    ),

    q(
        "What happens when the apple touches the bowl?",
        [
            "The score decreases",
            "The game stops",
            "The score increases by 1",
            "The bowl disappears"
        ],
        2
    ),

    q(
        'What does the "go to random position" block do?',
        [
            "Moves the sprite to a different random location",
            "Deletes the sprite",
            "Changes the sprite's colour",
            "Stops the game"
        ],
        0
    ),

    q(
        "Why is the apple's y-position set to 180 after it touches the bowl?",
        [
            "To move the apple to the bottom",
            "To return the apple to the top",
            "To move the bowl",
            "To increase the score"
        ],
        1
    ),

    q(
        "Which programming block is used to make a decision in the game?",
        [
            "Forever",
            "Change x by 10",
            "If...then",
            "Go to random position"
        ],
        2
    ),

    q(
        "What is the main objective of the Apple Catching Game?",
        [
            "To avoid the falling apples",
            "To catch falling apples using the bowl",
            "To change the background",
            "To move the apple with the keyboard"
        ],
        1
    ),

    // SECTION C

    q(
        "If the SCORE is 5 and the player catches another apple, what will the new score be?",
        ["4", "5", "6", "10"],
        2
    ),

    q(
        'What will happen if "change y by -3" is replaced with "change y by -10"?',
        [
            "The apple will fall faster",
            "The apple will stop moving",
            "The apple will move left",
            "The apple will disappear"
        ],
        0
    ),

    q(
        'What will happen if "change x by 10" is replaced with "change x by 20" for the bowl?',
        [
            "The bowl will move more slowly",
            "The bowl will move farther right per key press",
            "The bowl will move upward",
            "The bowl will stop moving"
        ],
        1
    ),

    q(
        'What will happen if the "forever" block is removed from the apple\'s falling script?',
        [
            "The apple will fall continuously",
            "The apple will move downward only once",
            "The score will increase automatically",
            "The bowl will disappear"
        ],
        1
    ),

    q(
        "Which of these blocks is responsible for increasing the player's score?",
        [
            "Set SCORE to 0",
            "Change SCORE by 1",
            "Change x by 10",
            "Set y to 180"
        ],
        1
    )

];


// ============================================
// JSS 3 QUESTIONS
// WEB DEVELOPMENT AND HTML
// ============================================

const jss3Questions = [

    q(
        "What is web development?",
        [
            "The process of repairing computers",
            "The process of creating and maintaining websites",
            "The process of typing documents",
            "The process of installing computer games"
        ],
        1
    ),

    q(
        "What is a website?",
        [
            "A collection of related web pages",
            "A computer keyboard",
            "A type of computer virus",
            "A computer operating system"
        ],
        0
    ),

    q(
        "Which of the following is an example of a web browser?",
        [
            "Microsoft Word",
            "Microsoft Excel",
            "Google Chrome",
            "Calculator"
        ],
        2
    ),

    q(
        "Who is a web developer?",
        [
            "Someone who repairs televisions",
            "Someone who creates and maintains websites",
            "Someone who sells computer accessories",
            "Someone who prints documents"
        ],
        1
    ),

    q(
        "Which of the following is commonly used to create the structure of a webpage?",
        [
            "HTML",
            "Microsoft Excel",
            "Paint",
            "Calculator"
        ],
        0
    ),

    q(
        "Which of the following is an example of a website?",
        [
            "Keyboard",
            "Mouse",
            "www.google.com",
            "Monitor"
        ],
        2
    ),

    // SECTION B

    q(
        "What is the full meaning of HTML?",
        [
            "High Text Machine Language",
            "Hyper Text Markup Language",
            "Hyper Tool Markup Language",
            "Home Text Machine Language"
        ],
        1
    ),

    q(
        "What is HTML mainly used for?",
        [
            "Creating the structure and content of webpages",
            "Editing videos",
            "Repairing computers",
            "Drawing pictures"
        ],
        0
    ),

    q(
        "Which of the following is the correct HTML opening tag?",
        [
            "<html>",
            "(html)",
            "[html]",
            "{html}"
        ],
        0
    ),

    q(
        "Which of the following is the correct closing HTML tag?",
        [
            "<html>",
            "<close html>",
            "</html>",
            "<html/>"
        ],
        2
    ),

    q(
        "What is the purpose of the <body> tag in HTML?",
        [
            "To change the computer password",
            "To contain the visible content of a webpage",
            "To shut down the browser",
            "To create a folder"
        ],
        1
    ),

    q(
        "Which HTML tag contains information such as the webpage title?",
        [
            "<body>",
            "<p>",
            "<head>",
            "<br>"
        ],
        2
    ),

    q(
        "Which of the following shows the correct basic structure of an HTML document?",
        [
            "<body><html></body></html>",
            "<html><head></head><body></body></html>",
            "<head><html></html></head>",
            "<p><html></html></p>"
        ],
        1
    ),

    // SECTION C

    q(
        "What is the purpose of creating a folder for a website project?",
        [
            "To organise and store website files",
            "To increase the computer's speed",
            "To delete the browser",
            "To change the computer screen"
        ],
        0
    ),

    q(
        "Which of the following is a suitable name for a website project folder?",
        [
            "My Website",
            "<html>",
            "</body>",
            "<p>"
        ],
        0
    ),

    q(
        "Which file extension is commonly used when saving an HTML webpage?",
        [
            ".mp3",
            ".jpg",
            ".html",
            ".exe"
        ],
        2
    ),

    q(
        "Which of the following is a correctly named HTML file?",
        [
            "index.mp3",
            "index.html",
            "index.jpg",
            "index.exe"
        ],
        1
    ),

    q(
        "What is the purpose of saving an HTML file with the .html extension?",
        [
            "To identify it as an HTML document",
            "To turn it into a video",
            "To make it a music file",
            "To delete its contents"
        ],
        0
    ),

    q(
        'A student creates a folder named "My School Website". Which file can be saved inside it?',
        [
            "<body>",
            "</html>",
            "home.html",
            "<head>"
        ],
        2
    ),

    // SECTION D

    q(
        "Which HTML tag is used to create the title displayed on a browser tab?",
        [
            "<p>",
            "<title>",
            "<body>",
            "<html>"
        ],
        1
    ),

    q(
        "Where should the <title> tag be placed in an HTML document?",
        [
            "Inside the <body> tag",
            "Inside the <p> tag",
            "Inside the <head> tag",
            "Outside the HTML document"
        ],
        2
    ),

    q(
        "Which of the following correctly creates a webpage title?",
        [
            "<title>My School</title>",
            "<title>My School<title>",
            "</title>My School<title>",
            "<p>My School</title>"
        ],
        0
    ),

    q(
        "Study this code: <head><title>My First Website</title></head>. What will appear in the browser tab?",
        [
            "Head",
            "HTML",
            "My First Website",
            "My First Paragraph"
        ],
        2
    ),

    q(
        'What happens if a student changes the title from "My Website" to "My School Website"?',
        [
            "The webpage will be deleted",
            "The browser tab title will change",
            "The computer will restart",
            "The webpage will become a video"
        ],
        1
    )

];


// ============================================
// SS 1 QUESTIONS
// HTML REGISTRATION FORMS
// ============================================

const ss1Questions = [

    q(
        "What is the main purpose of an HTML registration form?",
        [
            "To play music",
            "To collect information from users",
            "To change the computer background",
            "To display videos"
        ],
        1
    ),

    q(
        "Which HTML tag is used to create an input field?",
        [
            "<input>",
            "<form>",
            "<text>",
            "<field>"
        ],
        0
    ),

    q(
        "Which HTML input type allows users to enter their names?",
        [
            'type="number"',
            'type="password"',
            'type="text"',
            'type="date"'
        ],
        2
    ),

    q(
        "Which input type is most suitable for collecting a student's age?",
        [
            'type="text"',
            'type="number"',
            'type="email"',
            'type="password"'
        ],
        1
    ),

    q(
        "Which input type should be used to collect a student's email address?",
        [
            'type="email"',
            'type="text"',
            'type="number"',
            'type="date"'
        ],
        0
    ),

    q(
        "Which HTML input type hides the characters entered by a user?",
        [
            'type="text"',
            'type="email"',
            'type="password"',
            'type="hidden-text"'
        ],
        2
    ),

    q(
        "Which input type allows users to select their date of birth?",
        [
            'type="birthday"',
            'type="date"',
            'type="calendar"',
            'type="time"'
        ],
        1
    ),

    q(
        "Which is the correct HTML code for creating a text input?",
        [
            '<input="text">',
            "<text input>",
            '<input type="text">',
            '<input text="type">'
        ],
        2
    ),

    q(
        "What is the function of the placeholder attribute?",
        [
            "To delete the input field",
            "To display a hint inside the input field",
            "To change the webpage background",
            "To submit the form"
        ],
        1
    ),

    q(
        'Which correctly creates an input field with the hint "Enter your name"?',
        [
            '<input type="text" placeholder="Enter your name">',
            '<input placeholder="text" type="Enter your name">',
            '<input name="Enter your name">',
            '<text placeholder="Enter your name">'
        ],
        0
    ),

    // SECTION B

    q(
        "Which HTML input type allows users to select only one option from a group when inputs share the same name?",
        [
            "Checkbox",
            "Radio",
            "Text",
            "Number"
        ],
        1
    ),

    q(
        "Which input type allows users to select multiple options independently?",
        [
            "Radio",
            "Password",
            "Checkbox",
            "Email"
        ],
        2
    ),

    q(
        "Which HTML input type is suitable for selecting a student's gender?",
        [
            'type="radio"',
            'type="email"',
            'type="date"',
            'type="password"'
        ],
        0
    ),

    q(
        "Which of the following correctly creates a radio button?",
        [
            '<input type="button-radio">',
            "<radio input>",
            '<input type="radio">',
            '<input radio="true">'
        ],
        2
    ),

    q(
        "Which input type can be used to select hobbies such as Football, Reading and Dancing?",
        [
            "Password",
            "Checkbox",
            "Date",
            "Email"
        ],
        1
    ),

    q(
        'What is the purpose of type="submit" in an HTML form?',
        [
            "To clear the webpage",
            "To create a button that submits the form",
            "To hide the password",
            "To change the text colour"
        ],
        1
    ),

    q(
        "Which of the following correctly creates a submit button?",
        [
            '<input type="submit">',
            '<input type="send-form">',
            "<submit input>",
            '<input submit="button">'
        ],
        0
    ),

    q(
        "Which input type resets form fields to their initial values?",
        [
            'type="clear"',
            'type="delete"',
            'type="reset"',
            'type="remove"'
        ],
        2
    ),

    q(
        "What is the function of the required attribute?",
        [
            "To make the input field compulsory before normal form submission",
            "To change the colour of the input",
            "To hide the input field",
            "To increase the input size"
        ],
        0
    ),

    q(
        "Which of the following correctly makes a name input compulsory?",
        [
            '<input type="text" compulsory>',
            '<input type="text" required>',
            '<input type="text" important>',
            '<input type="text" must-fill>'
        ],
        1
    ),

    // SECTION C

    q(
        'What will appear inside this empty input? <input type="text" placeholder="Surname">',
        [
            "Text",
            "Surname",
            "Password",
            "Submit"
        ],
        1
    ),

    q(
        'What information is <input type="number"> designed to collect?',
        [
            "Email address",
            "Password",
            "Numerical values",
            "Pictures"
        ],
        2
    ),

    q(
        "Which HTML code is most suitable for collecting a student's password?",
        [
            '<input type="text">',
            '<input type="password">',
            '<input type="number">',
            '<input type="email">'
        ],
        1
    ),

    q(
        'Why do two gender radio buttons use the same name="gender" attribute?',
        [
            "To make both buttons disappear",
            "To group them so that only one can be selected"
        ],
        1
    )

];


// ============================================
// SS 2 AND SS 3 QUESTIONS
// HTML AND CSS
// ============================================

const ss2Questions = [

    q(
        "What is the full meaning of HTML?",
        [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        0
    ),

    q(
        "What is the purpose of <!DOCTYPE html>?",
        [
            "To create a heading",
            "To declare the document as HTML5",
            "To change the background colour",
            "To create a hyperlink"
        ],
        1
    ),

    q(
        "Which HTML tag contains the visible content of the welcome page?",
        [
            "<head>",
            "<title>",
            "<body>",
            "<style>"
        ],
        2
    ),

    q(
        "What is the purpose of the <title> tag?",
        [
            "To create a paragraph",
            "To display the webpage title in the browser tab",
            "To change the font size",
            "To create a button"
        ],
        1
    ),

    q(
        'Which HTML tag is used to display "Welcome to Deskols Academy" as the main heading?',
        [
            "<p>",
            "<h3>",
            "<h1>",
            "<div>"
        ],
        2
    ),

    q(
        "Which HTML tag is used to create a paragraph?",
        [
            "<a>",
            "<p>",
            "<br>",
            "<h1>"
        ],
        1
    ),

    q(
        "What is the function of the <i> tag?",
        [
            "To make text bold",
            "To underline text",
            "To display text in italics",
            "To increase text size"
        ],
        2
    ),

    q(
        'Which HTML tag creates the "Continue to Register" link?',
        [
            "<button>",
            "<link>",
            "<a>",
            "<href>"
        ],
        2
    ),

    q(
        "What is the purpose of the href attribute?",
        [
            "To change the text colour",
            "To specify the destination of a hyperlink",
            "To increase the font size",
            "To align text at the centre"
        ],
        1
    ),

    q(
        'What happens when a user clicks "Continue to Register"?',
        [
            "The webpage closes",
            "The background changes",
            "The browser attempts to open parents.html",
            "The text disappears"
        ],
        2
    ),

    // SECTION B

    q(
        "What is the full meaning of CSS?",
        [
            "Computer Style System",
            "Cascading Style Sheets",
            "Creative Styling Software",
            "Computer Sheet Styling"
        ],
        1
    ),

    q(
        "Which HTML tag is used to write CSS rules inside a webpage?",
        [
            "<script>",
            "<css>",
            "<style>",
            "<design>"
        ],
        2
    ),

    q(
        "What is the function of display: flex;?",
        [
            "To change the background colour",
            "To enable Flexbox layout",
            "To increase the font size",
            "To create a hyperlink"
        ],
        1
    ),

    q(
        "What does justify-content: center; do when flex-direction is column?",
        [
            "Centres items vertically along the main axis",
            "Changes the text colour",
            "Moves items to the left",
            "Makes text bold"
        ],
        0
    ),

    q(
        "What is the function of align-items: center; in this project?",
        [
            "To increase the page height",
            "To align items horizontally at the centre",
            "To change the background colour",
            "To underline the heading"
        ],
        1
    ),

    q(
        "What does height: 100vh; mean?",
        [
            "The body occupies 100 pixels",
            "The body occupies 100% of its parent's width",
            "The body height equals the viewport height",
            "The body becomes invisible"
        ],
        2
    ),

    q(
        "What is the purpose of flex-direction: column;?",
        [
            "To arrange elements horizontally",
            "To arrange elements vertically",
            "To hide elements",
            "To change their colours"
        ],
        1
    ),

    q(
        "Which CSS property changes heading text to uppercase?",
        [
            "font-weight: bold;",
            "text-align: center;",
            "text-transform: uppercase;",
            "text-decoration: none;"
        ],
        2
    ),

    q(
        "What does font-size: 40px; do?",
        [
            "Makes the heading 40 pixels wide",
            "Sets the font size to 40 pixels",
            "Adds 40 pixels of padding",
            "Moves the heading 40 pixels down"
        ],
        1
    ),

    q(
        "What is the purpose of margin-bottom: 0;?",
        [
            "To remove the bottom margin",
            "To remove the heading completely",
            "To change the heading colour",
            "To increase the heading height"
        ],
        0
    ),

    // SECTION C

    q(
        'Which CSS property gives the "Continue to Register" link a red background?',
        [
            "color: red;",
            "background-color: red;",
            "font-color: red;",
            "border-color: red;"
        ],
        1
    ),

    q(
        "What does color: white; do to the hyperlink?",
        [
            "Makes the page background white",
            "Makes the hyperlink text white",
            "Removes the hyperlink",
            "Changes the heading colour"
        ],
        1
    ),

    q(
        "What does text-decoration: none; do to a hyperlink?",
        [
            "Removes the default underline",
            "Makes the hyperlink bold",
            "Changes the hyperlink to uppercase",
            "Increases the hyperlink size"
        ],
        0
    ),

    q(
        "What is the function of padding: 15px 30px;?",
        [
            "Adds 15px top and bottom padding, and 30px left and right padding",
            "Gives the link a colour"
        ],
        0
    )

];


// ============================================
// ASSIGN QUESTIONS TO EACH CLASS
// ============================================

const questions = {

    "JSS 1": scratchQuestions,

    "JSS 2": scratchQuestions,

    "JSS 3": jss3Questions,

    "SS 1": ss1Questions,

    "SS 2": ss2Questions,

    "SS 3": ss2Questions,

    // Also support SSS class names
    "SSS 1": ss1Questions,

    "SSS 2": ss2Questions,

    "SSS 3": ss2Questions

};


// ============================================
// STUDENT INFORMATION
// ============================================

let studentName = "";

let studentClass = "";

let selectedSubject = "Coding";

let examSubmitted = false;

let examStarted = false;


// ============================================
// TIMER SETTINGS
// ============================================

// 10 minutes = 600 seconds

const EXAM_DURATION = 600;

let timeLeft = EXAM_DURATION;

let timerInterval = null;

let examEndTime = null;


// ============================================
// START EXAMINATION
// ============================================

function startExam() {

    if (examStarted || examSubmitted) {
        return;
    }

    studentName = document
        .getElementById("studentName")
        .value.trim();

    studentClass = document
        .getElementById("studentClass")
        .value;

    selectedSubject = "Coding";


    // Validate registration

    if (studentName === "" || studentClass === "") {

        alert("Please enter your name and select your class.");

        return;
    }


    // Check whether questions exist

    if (!questions[studentClass]) {

        alert("No examination questions found for this class.");

        return;
    }


    // Display examination section

    document
        .getElementById("registration")
        .classList.add("hidden");


    document
        .getElementById("examSection")
        .classList.remove("hidden");


    document
        .getElementById("examTitle")
        .innerText = "CODING EXAMINATION";


    document
        .getElementById("studentInfo")
        .innerText = studentName + " | " + studentClass;


    // Display the correct class questions

    displayQuestions();


    // Mark examination as started

    examStarted = true;


    // Start 10-minute timer

    startTimer();

}


// ============================================
// DISPLAY QUESTIONS
// ============================================

function displayQuestions() {

    const examForm = document
        .getElementById("examForm");

    examForm.innerHTML = "";


    // Select questions based on class

    const classQuestions = questions[studentClass];


    classQuestions.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "question";


        // Question number and text

        const heading = document.createElement("h3");

        heading.textContent =
            (index + 1) + ". " + item.question;

        div.appendChild(heading);


        // Create options

        item.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");

            const input = document.createElement("input");

            input.type = "radio";

            input.name = "question" + index;

            input.value = optionIndex;

            input.style.width = "auto";


            label.appendChild(input);


            // Display A, B, C, D

            const letter = String.fromCharCode(65 + optionIndex);

            label.appendChild(
                document.createTextNode(
                    " " + letter + ". " + option
                )
            );


            div.appendChild(label);

        });


        examForm.appendChild(div);

    });

}


// ============================================
// TEN-MINUTE COUNTDOWN TIMER
// ============================================


    function startTimer() {

    clearInterval(timerInterval);

    examEndTime = Date.now() + 600000;

    const timer = document.getElementById("timer");

    function countdown() {

        if (examSubmitted) {
            clearInterval(timerInterval);
            return;
        }

        const remaining = Math.max(
            0,
            Math.ceil((examEndTime - Date.now()) / 1000)
        );

        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;

        timer.textContent =
            "Time Remaining: " +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");

        if (remaining <= 60) {
            timer.style.backgroundColor = "red";
            timer.style.color = "white";
        }

        if (remaining === 0) {
            clearInterval(timerInterval);
            submitExam("time");
        }
    }

    countdown();

    timerInterval = setInterval(countdown, 250);
}



// ============================================
// UPDATE TIMER DISPLAY
// ============================================

function updateTimerDisplay(secondsRemaining) {

    const minutes = Math.floor(secondsRemaining / 60);

    const seconds = secondsRemaining % 60;


    const formattedTime =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    const timer = document.getElementById("timer");

    if (!timer) {
        return;
    }


    timer.innerText =
        "Time Remaining: " + formattedTime;


    // Red warning when 1 minute remains

    if (secondsRemaining <= 60) {

        timer.style.backgroundColor = "#b30000";

        timer.style.color = "white";

    }

}


// ============================================
// SUBMIT EXAMINATION
// ============================================

async function submitExam(reason = "manual") {

    // Prevent multiple submissions

    if (!examStarted || examSubmitted) {
        return;
    }


    examSubmitted = true;

    examStarted = false;


    // Stop countdown

    clearInterval(timerInterval);


    // Get questions for the selected class

    const classQuestions = questions[studentClass];


    let score = 0;


    // Mark examination

    classQuestions.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );


        if (selected) {

            const selectedIndex = Number(selected.value);

            const correctIndex =
                item.options.indexOf(item.answer);


            if (selectedIndex === correctIndex) {

                score++;

            }

        }

    });


    // Calculate total and percentage

    const total = classQuestions.length;

    const percentage = Math.round(
        (score / total) * 100
    );


    // Prepare result for Google Sheets

    const studentResult = {

        name: studentName,

        studentClass: studentClass,

        subject: "Coding",

        score: score + "/" + total,

        percentage: percentage

    };


    // Hide examination section

    document
        .getElementById("examSection")
        .classList.add("hidden");


    // Display result section

    document
        .getElementById("resultSection")
        .classList.remove("hidden");


    // IMPORTANT:
    // Do not display student's score.

    let message = "";


    if (reason === "time") {

        message =
            "TIME UP! Your examination has been " +
            "automatically submitted.";

    } else if (reason === "tab") {

        message =
            "Your examination has been automatically " +
            "submitted because you left the examination page.";

    } else {

        message =
            "Examination Submitted Successfully!";

    }


    document
        .getElementById("resultText")
        .innerText =
            message +
            "\nYour result will be communicated by the school.";


    // Send result to Google Sheets

    await saveResult(studentResult);

}


// ============================================
// ANTI-CHEATING FEATURE
// ============================================

// Automatically submit when student
// switches tabs or minimizes browser.

document.addEventListener(
    "visibilitychange",
    function() {

        if (
            document.hidden &&
            examStarted &&
            !examSubmitted
        ) {

            submitExam("tab");

        }

    }
);


// ============================================
// GOOGLE SHEETS CONNECTION
// ============================================

// IMPORTANT:
// Replace the URL below with your existing
// working Google Apps Script Web App URL.

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwk2KA5CJkJ9Zs4PO9r_ucQY0k_ExvoSrJ9iMwrsaGgtR_4-dn0XVxwfW-twwGmbtLN/exec";


// ============================================
// SAVE RESULT TO GOOGLE SHEETS
// ============================================

async function saveResult(result) {

    const status = document
        .getElementById("saveStatus");


    status.innerText = "Submitting your result...";


    try {

        const response = await fetch(SCRIPT_URL, {

            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(result)

        });


        if (!response.ok) {

            throw new Error(
                "Server returned status " + response.status
            );

        }


        const data = await response.json();


        if (data.success) {

            status.innerText =
                "Your examination has been recorded successfully.";

        } else {

            status.innerText =
                "Result could not be saved. Please inform your teacher.";

            console.error("Saving error:", data.error);

        }


    } catch (error) {

        status.innerText =
            "Could not confirm submission. " +
            "Please inform your teacher.";

        console.error("Submission error:", error);

    }

}

