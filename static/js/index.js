// Registro en firebase
const registerForm = document.querySelector("#register-form");
var db = firebase.firestore();
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailReg = document.querySelector("#register-email").value;
  const passwordReg = document.querySelector("#register-password").value;
  console.log(emailReg, passwordReg);
  registerForm.reset();
  auth.createUserWithEmailAndPassword(emailReg, passwordReg)
    .then((userCredential) => {
            var user = userCredential.user;
            db.collection("curricula").add({
              clases:[{
                horario:{
                  Domingo:'',
                  Lunes:'',
                  Martes:'',
                  Miercoles:'',
                  Jueves:'',
                  Viernes:'',
                  Sabado:''
                },
                materia:'',
                profesor:'',
                plataforma:{
                  nombre:'',
                  enlace:'',
                  codigo:'',
                  clave:'',
                  nota:''
                }
              },{}],
              usuario: user.uid,
          })
          .then(() => {
              db.collection('usuarios').doc(user.uid).set({
                  phone:'', 
                  email : user.email
              });
              var idUser = user.uid;
              console.log(idUser);
              alert("Registro Exitoso");
          })
          .catch((error) => {
              console.error("Error adding document: ", error);
          });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

// Login en firebase

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailLog = document.querySelector("#login-email").value;
  const passwordLog = document.querySelector("#login-password").value;
  console.log(emailLog, passwordLog);
  loginForm.reset();
  auth.signInWithEmailAndPassword(emailLog, passwordLog)
    .then((userCredential) => {
        var user = userCredential.user;
        window.location="/user";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if( errorCode=='auth/user-not-found'){
        const datosIncorectos  = document.querySelector('.login-alert');
        datosIncorectos.style.display="block";
        
      }
      console.log(errorCode, errorMessage);
    });
});


// Passwords visible 


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});