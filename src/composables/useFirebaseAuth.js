import useFirebase from './useFirebase';
import useErrorAuth from './errors/useErrorAuth';
import  useToast from './plugins/useToast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
// https://firebase.google.com/docs/auth/web/password-auth
const useFirebaseAuth = () => {
    const { switchError } = useErrorAuth();
    const { showToast } = useToast();
    const status_auth = ref(false);
    const { auth } = useFirebase();
    const login = async (user) => {
        try {
            status_auth.value = true;
            const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password);
            localStorage.setItem('user:gs', JSON.stringify(userCredentials.user));
            localStorage.setItem('user:gs:email', user.email);
            localStorage.setItem('user:gs:password', user.password);
            showToast('dark', 'Se ha iniciado sesión correctamente');
        } catch (error) {
            const message = switchError(error.code);
            localStorage.removeItem('user:gs');
            localStorage.removeItem('user:gs:email');
            localStorage.removeItem('user:gs:password');
            showToast('danger', message);
        } finally {
            status_auth.value = false;
        }
    }
    const loginAutomatic = async () => {
        try {
            const email = localStorage.getItem('user:gs:email');
            const password = localStorage.getItem('user:gs:password');
            if (!email || !password) return;
            await login({ email, password });
        } catch (error) {
            localStorage.removeItem('user:gs');
            localStorage.removeItem('user:gs:email');
            localStorage.removeItem('user:gs:password');
        }
    }
    return {
        login,
        loginAutomatic,
        status_auth
    }
}

export default useFirebaseAuth