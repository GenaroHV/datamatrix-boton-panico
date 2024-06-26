<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="p-8 h-full">
                <h1 class="text-xl font-medium text-white">Permisos</h1>
                <hr>
                <div class="py-4 space-y-4">
                    <ion-label class="text-white text-xs">Permiso para Mensajes de Texto (SMS)</ion-label>
                    <ul class="list-disc pl-10 text-xs pb-4">
                        <li class="text-white text-justify">Este permiso permite que la app envie y reciba mensajes de texto. Se utiliza para enviar alertas de emergencia y comunicarse con tutores o servicios de emergencia directamente desde la aplicación.</li>
                    </ul>
                    <ion-label class="text-white text-xs">Permiso de Bluetooth</ion-label>
                    <ul class="list-disc pl-10 text-xs pb-4">
                        <li class="text-white text-justify">Este permiso permite que la app se conecte a dispositivos Bluetooth cercanos. Es necesario para accesorios de seguridad que funcionan con la app, como dispositivos de alerta portátiles o sistemas de seguridad en el hogar.</li>
                    </ul>
                    <ion-label class="text-white text-xs">Permiso de GPS</ion-label>
                    <ul class="list-disc pl-10 text-xs pb-4">
                        <li class="text-white text-justify">Este permiso permite que la app acceda a la ubicación de tu dispositivo. Se utiliza para enviar tu ubicación exacta a tutores o servicios de emergencia cuando se activa el botón de pánico.</li>
                    </ul>
                    <ion-label class="text-white text-xs">Permiso de Notificaciones</ion-label>
                    <ul class="list-disc pl-10 text-xs pb-4">
                        <li class="text-white text-justify">Este permiso permite que la app envie notificaciones push a tu dispositivo. Se utiliza para alertarte sobre actualizaciones de seguridad, cambios en la configuración de la app y comunicaciones urgentes de tutores.</li>
                    </ul>
                </div>
                <ion-button color="light" class="w-full">Aceptar</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonContent, IonPage, IonLabel, IonButton } from '@ionic/vue';
</script>
<style scoped>
ion-content {
    --background: none;
    @apply bg-oficial-900;
}
</style>