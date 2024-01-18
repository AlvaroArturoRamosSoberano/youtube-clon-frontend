<template>
    <section>
        <div class="sidebar h-screen w-64 dark:text-white">
            <header>
                <section>
                    <div class="h-14 w-64 ps-6 gap-3 flex items-center font-jakarta text-xl">
                        <button @click="showSideBar">
                            <ion-icon class="text-3xl align-middle" name="menu-outline"></ion-icon>
                        </button>
                        <a href="">
                            <ion-icon class="text-3xl align-middle text-red-600" name="logo-youtube"></ion-icon>
                            YouTube
                        </a>
                    </div>
                </section>
            </header>

            <body>
                <Transition :enter-active-class="enterActiveClass">
                    <div v-if="sideBar" class="menu h-screen mx-4 text-sm overflow-y-auto">
                        <section class="home-items">
                            <div class="w-full flex flex-col font-jakarta justify-start border-b border-gray-600 py-2">
                                <ul>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle " name="home-outline"></ion-icon>
                                            Principal</a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="flash-outline"></ion-icon>
                                            Shorts</a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="albums-outline"></ion-icon>
                                            Suscripciones</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="personal-items">
                            <div class="w-full flex flex-col font-jakarta justify-start border-b border-gray-600 py-2">
                                <ul>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full p-3 text-lg" href="">
                                            Tú
                                            <ion-icon class="align-middle text-sm"
                                                name="chevron-forward-outline"></ion-icon>
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="person-outline"></ion-icon>
                                            Tu canal
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="videocam-outline"></ion-icon>
                                            Tus videos
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="time-outline"></ion-icon>
                                            Ver más tarde
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="list-outline"></ion-icon>
                                            Playlists
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="reader-outline"></ion-icon>
                                            Historial
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="channels-subscripted-items">
                            <div class="w-full flex flex-col font-jakarta justify-start border-b border-gray-600 py-2">
                                <h1 class="p-3 text-lg">Suscripciones</h1>
                                <ul>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="logo-apple"></ion-icon>
                                            Apple
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl text-blue-600 p-3 align-middle"
                                                name="logo-linkedin"></ion-icon>
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="logo-github"></ion-icon>
                                            GitHub
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl text-green-600 p-3 align-middle"
                                                name="logo-vue"></ion-icon>
                                            Vue
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="explore-items">
                            <div class="w-full flex flex-col font-jakarta justify-start border-b border-gray-600 py-2">
                                <h1 class="p-3 text-lg">Explorar</h1>
                                <ul>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="flame-outline"></ion-icon>
                                            Tendencias
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle"
                                                name="musical-note-outline"></ion-icon>
                                            Música
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <ion-icon class="text-xl p-3 align-middle" name="film-outline"></ion-icon>
                                        Películas
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle"
                                                name="radio-button-on-outline"></ion-icon>
                                            En vivo
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle"
                                                name="game-controller-outline"></ion-icon>
                                            Videojuegos
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="newspaper-outline"></ion-icon>
                                            Noticias
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle"
                                                name="american-football-outline"></ion-icon>
                                            Deportes</a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="bulb-outline"></ion-icon>
                                            Aprendizaje</a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="mic-circle-outline"></ion-icon>
                                            Podcasts
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="more-items">
                            <div class="w-full flex flex-col font-jakarta justify-start border-b border-gray-600 py-2">
                                <h1 class="p-3 text-lg">Mas de youtube</h1>
                                <ul>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full ps-12" href="">
                                            Youtube Premium
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full ps-12" href="">
                                            Youtube Studio
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full ps-12" href="">
                                            Youtube Music
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full ps-12" href="">
                                            Youtube Kids
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="settings-items">
                            <div class="w-full flex flex-col font-jakarta justify-start border-b border-gray-600 py-2">
                                <ul>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="settings-outline"></ion-icon>
                                            Configuración
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle" name="flag-outline"></ion-icon>
                                            Historial de denuncias
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle"
                                                name="help-circle-outline"></ion-icon>
                                            Ayuda
                                        </a>
                                    </li>
                                    <li class="h-10 flex items-center hover:bg-cod-900 rounded-xl">
                                        <a class="w-full" href="">
                                            <ion-icon class="text-xl p-3 align-middle"
                                                name="alert-circle-outline"></ion-icon>
                                            Enviar comentarios
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </Transition>
            </body>
        </div>

    </section>
</template>

<script setup>
import { ref } from "vue"
const sideBar = ref(false)
const enterActiveClass = ref()

const showSideBar = () => {
    sideBar.value = !sideBar.value
    if (sideBar.value === false) {
        enterActiveClass.value = 'animate__animated animate__slideInRight'
    }

    if (sideBar.value === true) {
        enterActiveClass.value = 'animate__animated animate__slideInLeft'
    }
    console.log(sideBar.value)
}
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
</style>