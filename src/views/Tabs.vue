<template>
    <ion-page>
        <ion-tabs :class="backgroundClass">
            <ion-router-outlet></ion-router-outlet>
            <div class="relative -bottom-8 flex justify-center bg-gray-200">
                <div class="z-50 bg-gray-200 p-1 rounded-full">
                    <ion-button color="danger" shape="round" size="large" href="/tabs/boton">
                        <ion-icon slot="icon-only" :icon="alert" size="large"/>
                    </ion-button>
                </div>
            </div>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon :icon="home" />
                    <ion-label class="text-gray-500">Inicio</ion-label>
                    <!-- <ion-ripple-effect></ion-ripple-effect> -->
                </ion-tab-button>

                <ion-tab-button tab="localizacion" href="/tabs/localizacion">
                    <ion-icon :icon="location" />
                    <ion-label class="text-gray-500">Ubicación</ion-label>
                </ion-tab-button>

                <ion-tab-button tab=""></ion-tab-button>

                <ion-tab-button tab="perfil" href="/tabs/perfil">
                    <ion-icon :icon="person" />
                    <ion-label class="text-gray-500">Perfil</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="ajustes" href="/tabs/ajustes">
                    <ion-icon :icon="settings" />
                    <ion-label class="text-gray-500">Ajustes</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script setup>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonButton, IonRippleEffect } from '@ionic/vue';
import { home, location, alert, person, settings } from 'ionicons/icons';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const backgroundClass = computed(() => {
    if(route.path === '/tabs/boton' || route.path === '/tabs/home'){
        return 'bg-oficial-900';
    }else{
        return 'bg-gray-200';
    }
})
</script>