document.addEventListener('DOMContentLoaded', function () {

    document.getElementsByTagName('form')[0].onsubmit = function (evt) {
         evt.preventDefault(); // Preventing the form from submitting
        checkWord(); // Do your magic and check the entered word/sentence
        window.scrollTo(0, 150);
    }

    // Get the focus to the text input to enter a word right away.
    document.getElementById('terminalTextInput').focus();

    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();

    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

    // Clear text input
    var clearInput = function () {
        document.getElementById('terminalTextInput').value = "";
    }

    // Scroll to the bottom of the results div
    var scrollToBottomOfResults = function () {
        var terminalResultsDiv = document.getElementById('terminalReslutsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    // Scroll to the bottom of the results
    scrollToBottomOfResults();

    // Add text to the results div
    var addTextToResults = function (textToAdd) {
        document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
        scrollToBottomOfResults();
    }

    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function () {
        // Array of all the help keywords
        var helpKeyWords = [
            "- about - to get links about myself",
            "- mlstuff - to get info about my machine learning projects, data pre-processing, feature engineer and modelling",
            "- htbstuff + to get info about machines and challenges from HTB - but no big spoilers"
        ].join('<br>');
        addTextToResults(helpKeyWords);
    }

    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function (postTimeDay) {
        var timeAndDate = new Date();
        var timeHours = timeAndDate.getHours();
        var timeMinutes = timeAndDate.getMinutes();
        var dateDay = timeAndDate.getDate();
        console.log(dateDay);
        var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
        var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.

        if (timeHours < 10) { // if 1 number display 0 before it.
            timeHours = "0" + timeHours;
        }

        if (timeMinutes < 10) { // if 1 number display 0 before it.
            timeMinutes = "0" + timeMinutes;
        }

        var currentTime = timeHours + ":" + timeMinutes;
        var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

        if (postTimeDay == "time") {
            addTextToResults(currentTime);
        }
        if (postTimeDay == "date") {
            addTextToResults(currentDate);
        }
    }

    // Opening links in a new window
    var openLinkInNewWindow = function (linkToOpen) {
        window.open(linkToOpen, '_blank');
        clearInput();
    }

    // Having a specific text reply to specific strings
    var textReplies = function () {
        switch (textInputValueLowerCase) {
            // replies
            case "about":
                clearInput();
                addTextToResults("Hello friend, I'm Diogo");
                addTextToResults("You can find out more about my professional life in my <a target=_blank href='https://www.linkedin.com/in/diogomarinho/'> Linkedin </a>");
                break;

            case "mlstuff":
                clearInput();
                addTextToResults("Soon, I promise you ;)");
                break;

            case "htbtuff":
                clearInput();
                addTextToResults("Soon, I promise you ;)");
                break;

            case "hello":
            case "hi":
            case "hola":
                clearInput();
                addTextToResults("Hello, bro/sis ");
                break;

            case "time":
                clearInput();
                addTextToResults("yeah check the time... all right");
                getTimeAndDate("time");
                break;

            case "date":
                clearInput();
                addTextToResults("today is an awesome day");
                getTimeAndDate("date");
                break;

            case "help":
            case "?":
                clearInput();
                postHelpList();
                break;

            default:
                clearInput();
                addTextToResults("Don't know what you're saying bro/sis...");
                break;
        }
    }

    // Main function to check the entered text and assign it to the correct function
    var checkWord = function () {
        textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
        textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string

        if (textInputValue != "") { //checking if text was entered
            addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
            textReplies();
        }
    };

});