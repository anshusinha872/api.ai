
const firebaseConfig = {
    apiKey: "AIzaSyBPw-jnOu3E3ltS7EFspghgVOJH9Ox_HAU",
    authDomain: "examsaathi-9d293.firebaseapp.com",
    projectId: "examsaathi-9d293",
    storageBucket: "examsaathi-9d293.appspot.com",
    messagingSenderId: "230794409225",
    appId: "1:230794409225:web:f35b6ea95f08097fc6cfd8",
    measurementId: "G-RXQW2FJJEP"
};

document.addEventListener('DOMContentLoaded', () => {
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore(app);
    const sendButton = document.getElementById('sendbtn');
    sendButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        const fullName = document.querySelector('input[name="fullName"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        if(fullName === '' || email === '') {
            return window.alert('Please fill all the fields');
        }
        // Save values to Firestore
        db.collection("contacts").add({
            fullName: fullName,
            email: email,
            message: message
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            document.querySelector('input[name="fullName"]').value = '';
            document.querySelector('input[name="email"]').value = '';
            document.querySelector('textarea[name="message"]').value = '';
            // Show Alert
            window.alert('Thank you for your interest. We will get back to you soon.');
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    });
});