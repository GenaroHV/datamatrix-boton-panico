import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAM6a7ffCt44YQuY73lqZMqLfFs0fGVFNw",
        authDomain: "global-seguridad.firebaseapp.com",
        projectId: "global-seguridad",
        storageBucket: "global-seguridad.appspot.com",
        messagingSenderId: "534951350079",
        appId: "1:534951350079:web:ad6bff102ac81b4fc64d8a",
        measurementId: "G-YGVYL7R5N4"
    }
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    return {
        auth,
        db
    }
}

export default useFirebase