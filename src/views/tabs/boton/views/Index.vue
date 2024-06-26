<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Global Seguridad</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">

      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 flex justify-center bg-red-500 p-4 rounded-lg">
          <span class="text-white text-sm">Pánico</span>
        </div>
        <div class="col-span-2 flex justify-center bg-green-700 p-4 rounded-lg">
          <span class="text-white text-sm">Emergencia</span>
        </div>
        <div class="col-span-1 flex justify-center bg-slate-700 p-4 rounded-lg">
          <span class="text-white text-sm">En camino</span>
        </div>
        <div class="col-span-1 flex justify-center bg-slate-700 p-4 rounded-lg">
          <span class="text-white text-sm">Todo bien</span>
        </div>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
<style scoped>
ion-content {
    --background: none;
    @apply bg-oficial-900;
}
</style>