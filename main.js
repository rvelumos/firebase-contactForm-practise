// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB33Y4HdQo_WTkTVcumGn-lTbOxNY3rvfE",
    authDomain: "contact-form-test-2-a256d.firebaseapp.com",
    projectId: "contact-form-test-2-a256d",
    storageBucket: "contact-form-test-2-a256d.appspot.com",
    messagingSenderId: "507127226860",
    appId: "1:507127226860:web:ee4be4492afecad40fa0c9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections (de tabellen die de info hebben / opslaan)
let contactinfo = firebase.database().ref("infoContacts") // => wordt gepushed naar de database als "infoContacts".

// list for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    // console.log(1234);

    // Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    // console.log("Variables", name, email, message); // om te testen invoer velden input geven.

    saveContactInfo(name, email, message); // deze functie geef je de waardes mee die je meegeeft aan het form.
}

// Save contactInfos to Firebase

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        userName: name,
        userEmail: email,
        userMessage: message,
    });
}