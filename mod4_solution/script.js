// Array of names
let names = [
    "James", "John", "Jane", "Jack", "Jill", "Joe", 
    "Maria", "Mark", "Michael", "Michelle", "Matthew", 
    "Megan", "Martin", "Monica", "Max", "Molly", "Mason",
    "Melissa", "Miles", "Mia", "Mitchell", "Morgan", "Mabel"
];

// Function to decide greeting based on first letter
function decideGreeting(name) {
    let firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        return "Goodbye " + name;
    } else {
        return "Hello " + name;
    }
}

// Function to print greetings to console and to the web page
function printGreetings() {
    let ul = document.getElementById("greetingsList");
    ul.innerHTML = ''; // Clear previous list items

    names.forEach(function(name) {
        let greeting = decideGreeting(name);
        let li = document.createElement('li');
        li.textContent = greeting;

        // Add appropriate class based on greeting type
        if (greeting.startsWith('Goodbye')) {
            li.classList.add('goodbye');
        } else {
            li.classList.add('hello');
        }

        ul.appendChild(li);

        // Print to console
        console.log(greeting);
    });
}

// Call the function to print greetings when the page loads
document.addEventListener('DOMContentLoaded', printGreetings);
