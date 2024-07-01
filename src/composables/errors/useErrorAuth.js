import { ref } from "vue";
const useErrorAuth = () => {
    const errorMessage = ref('');
    const switchError = (error) => {
        switch (error) {
            case 'auth/user-not-found':
                errorMessage.value = 'El usuario no existe';
                break;
            case 'auth/wrong-password':
                errorMessage.value = 'La contraseña es incorrecta';
                break;
            case 'auth/too-many-requests':
                errorMessage.value = 'Demasiados intentos fallidos';
                break;
            case 'auth/invalid-email':
                errorMessage.value = 'El correo electrónico es inválido';
                break;
            case 'auth/email-already-in-use':
                errorMessage.value = 'El correo electrónico ya existe';
                break;
            case 'auth/missing-email':
                errorMessage.value = 'Falta el correo electrónico';
                break;
            case 'auth/missing-password':
                errorMessage.value = 'Falta la contraseña';
                break;
            case 'auth/invalid-credential':
                errorMessage.value = 'Credenciales inválidas';
                break;
            default:
                errorMessage.value = 'Error desconocido';
        }
        return errorMessage.value;
    }
    return{
        switchError
    }
}
export default useErrorAuth