var db = firebase.firestore();
auth.onAuthStateChanged(function(user) {
    if (user) {
        const userMail = user.email;
        const uid = user.uid;
        document.getElementById('userMail').innerHTML = userMail;
        
    } else {
        window.location="/";
    }
});

const btnSchedule = document.getElementById("btnSchedule");
const btnAdminClasses = document.getElementById("btnAdminClasses");
const Schedule = document.getElementById("Schedule");
const AdminClasses = document.getElementById("AdminClasses");

btnSchedule.addEventListener("click", e => {
    e.preventDefault();
    AdminClasses.style.display="none";
    Schedule.style.display="block";
});
btnAdminClasses.addEventListener("click", e => {
    e.preventDefault();
    Schedule.style.display="none";
    AdminClasses.style.display="block";
});




btnLogOut = document.querySelector('#btnSignOut');


btnLogOut.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location="/";
      }).catch((error) => {
        var errorCode = error.code;
        console.log(errorCode, errorMessage);
      });
});

