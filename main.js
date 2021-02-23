// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDZ0XkTJqCLYfbPB4QtcOCiBjwETYcD1oM",
    authDomain: "test-4-21835.firebaseapp.com",
    projectId: "test-4-21835",
    storageBucket: "test-4-21835.appspot.com",
    messagingSenderId: "799497282884",
    appId: "1:799497282884:web:da37b4d221df32c4ed6311"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections (de tabellen die de info hebben / opslaan)
let contactInfo = firebase.database().ref("infos") // => wordt gepushed naar de database als "infos".

// list for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    // console.log(1234);

    // Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log("LOGGING Variables", name, email, message); // om te testen invoer velden input geven.

    saveContactInfo(name, email, message); // deze functie geef je de waardes mee die je meegeeft aan het form.

    document.querySelector(".contact-form").reset();
}

// Save infos to Firebase

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        userName: name,
        userEmail: email,
        userMessage: message,
    });
}