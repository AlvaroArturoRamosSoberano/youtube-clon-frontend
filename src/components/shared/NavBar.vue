<template>
    <section class="navbar h-14 w-auto dark:text-white sticky top-0">
        <div class="grid grid-cols-6 justify-between">
            <!-- <section class="col-span-1">
                <div class="h-14 w-64 ps-6 gap-3 flex items-center font-jakarta text-xl">
                    <button>
                        <ion-icon @click="showSideBar" class="text-3xl align-middle" name="menu-outline"></ion-icon>
                    </button>
                    <a href="">
                        <ion-icon class="text-3xl align-middle text-red-600" name="logo-youtube"></ion-icon>
                        YouTube
                    </a>
                </div>
            </section> -->

            <section class="col-start-1 col-end-6">
                <div class="h-14 flex justify-center items-center font-jakarta">
                    <input
                        class="w-3/5 h-10 rounded-3xl rounded-r-none text-black bg-transparent border border-masala-950 p-3"
                        type="text" placeholder="Buscar">
                    <button
                        class="h-10 w-16 flex justify-center items-center rounded-3xl rounded-l-none border border-l-0 border-masala-950 bg-masala-950">
                        <ion-icon class="text-xl" name="search-outline"></ion-icon>
                    </button>
                    <div class="ps-3">
                        <button class="h-10 w-10 flex justify-center items-center bg-masala-950 rounded-full">
                            <ion-icon class="text-2xl" name="mic"></ion-icon>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div class="h-14 flex justify-center items-center gap-4">
                    <button class="h-10 w-10">
                        <ion-icon class="text-2xl align-middle" name="add-outline"></ion-icon>
                    </button>
                    <button class="h-10 w-10">
                        <ion-icon class="text-2xl align-middle" name="notifications-outline"></ion-icon>
                    </button>
                    <button class="h-10 w-10">
                        <ion-icon class="text-2xl align-middle" name="person-circle-outline"></ion-icon>
                    </button>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"

const sideBar = ref(false)

const showSideBar = () => {
    sideBar.value = !sideBar.value
    console.log(sideBar.value)
    /* if (sideBar.value === false) {
    } else {
        
    } */
}
</script>