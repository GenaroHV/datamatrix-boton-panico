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
                        <ion-label class="text-gray-700 text-xs font-bold">Email</ion-label>
                        <ion-input placeholder="name@ejemplo.com" class="bg-gray-100 rounded-lg shadow-md"></ion-input>
                    </div>
                    <div>
                        <ion-label type="email" class="text-gray-700 text-xs font-bold">Contraseña</ion-label>
                        <ion-input type="password" placeholder="8 caracteres minimo" class="bg-gray-100 rounded-lg shadow-md"></ion-input>
                    </div>
                    <div class="text-center">
                        <ion-label class="text-blue-900 text-xs font-semibold">¿Has olvidado tu contraseña?</ion-label>
                    </div>
                    <ion-button color="danger" class="w-full">Iniciar</ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonContent, IonPage, IonInput, IonLabel, IonButton } from '@ionic/vue';
</script>
<style scoped>
ion-content {
    --keyboard-offset: 0px !important;
}
</style>