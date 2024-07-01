import { toastController } from '@ionic/vue';
const useToast = () => {
    const showToast = async (color, message) => {
        const toast = await toastController.create({
            message: message,
            duration: 3000,
            color: color,
            position: 'bottom'
        });
        await toast.present();
    }
    return {
        showToast
    }
}

export default useToast