import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQPrOMEOyqADocpWuguhL-Pg_1aba00W8",
    authDomain: "clone-disneyplus-edf3e.firebaseapp.com",
    projectId: "clone-disneyplus-edf3e",
    storageBucket: "clone-disneyplus-edf3e.appspot.com",
    messagingSenderId: "348015314316",
    appId: "1:348015314316:web:082c34eaf16fa6c93502a9",
    measurementId: "G-5FT38Q8MJD"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth, provider, storage};
  export default db;