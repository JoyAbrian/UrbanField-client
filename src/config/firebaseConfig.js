import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA5pbLeIoJGv0DqJ9m0zKnc4qjy_JnT9cI",
    authDomain: "urbanfieldimage.firebaseapp.com",
    projectId: "urbanfieldimage",
    storageBucket: "urbanfieldimage.appspot.com",
    messagingSenderId: "193471455721",
    appId: "1:193471455721:web:46fed13b2c9faf2785eb78"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };