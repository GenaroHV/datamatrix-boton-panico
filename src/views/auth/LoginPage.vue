<template>
    <ion-page>
        <ion-content>
            <div class="p-4 h-2/6">
                <div class="flex justify-center items-center py-14">
                    <img src="@/assets/img/globalseguridad.svg" alt="Logo" class="w-40">
                </div>
            </div>
            <div class="p-8 bg-white rounded-tl-5xl rounded-tr-5xl h-4/6">
                <h1 class="text-center text-3xl font-bold text-blue-950 py-10">Registro de usuario</h1>
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <ion-label class="text-gray-700 text-xs font-bold">Correo</ion-label>
                        <ion-input 
                            v-model="form.email"
                            type="email"
                            inputmode="email"
                            placeholder="Ingresar correo"
                            helper-text="Ingresa un correo válido"
                            error-text="Debes de ingresar un correo válido" 
                            @ionInput="validateEmail"
                            @ionBlur="markTouched"
                        />
                    </div>
                    <div>
                        <ion-label type="email" class="text-gray-700 text-xs font-bold">Contraseña</ion-label>
                        <ion-input 
                            v-model="form.password" 
                            type="password"
                            inputmode="text"
                            placeholder="Ingresar contraseña"
                            helper-text="Ingresa una contraseña"
                            error-text="Debes de ingresar minimo 8 caracteres" 
                            @ionInput="validatePassword"
                            @ionBlur="markTouched"
                        />
                    </div>
                    <div class="text-center">
                        <ion-label class="text-blue-900 text-xs font-semibold">¿Has olvidado tu contraseña?</ion-label>
                    </div>
                    <ion-button @click="login(form)" color="danger" :disabled="disabledLogin || status_auth" >
                        {{ status_auth ? '' : 'Iniciar sesión' }}
                        <ion-spinner v-if="status_auth" name="crescent" />
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue';
import { IonContent, IonPage, IonInput, IonLabel, IonButton, IonSpinner } from '@ionic/vue';
import useFirebaseAuth from '@/composables/useFirebaseAuth';
import authValidate from '@/composables/validates/authValidate';
const { login, loginAutomatic, status_auth } = useFirebaseAuth();
const { validateEmail, validatePassword, markTouched } = authValidate();
const form = reactive({
    email: "",
    password: ""
})

const disabledLogin = computed(() => {
    return !form.email || !form.password
})

onMounted(() => {
    loginAutomatic();
})
</script>
<style scoped>
ion-content {
    --keyboard-offset: 0px !important;
}
</style>