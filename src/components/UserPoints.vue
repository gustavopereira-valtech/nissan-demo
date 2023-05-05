<template>
    <div class="flex w-full justify-between">
        <div class="flex p-2 back-gray rounded-full">
            <img
                class="mr-2 w-16 pointer-events-none"
                src="avatar.svg"
                alt="Avatar Icon"
            />
            <div class="w-24 md:w-64 pr-4 pt-1">
                <div class="items-right justify-between">
                    <p class="text-xs text-right mb-1">
                        1500/2000 <span class="hidden md:inline">points</span>
                    </p>
                </div>
                <div class="w-full h-2 bg-blue-200 rounded-full">
                    <div class="w-2/3 h-full text-center text-xs text-white back-orange rounded-full"></div>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="p-4">
                <strong class="relative inline-flex items-center rounded text-xs font-medium">
                    <span v-if="store.getFavsCount > 0" class="absolute -top-2 -right-2 h-5 w-5 rounded-full flex justify-center items-center items back-orange" ><span>{{ store.getFavsCount }}</span></span>
                    <span class="ml-1.5"> <img
                    class="mr-2 w-6 pointer-events-none"
                    :src="favsIcon"
                    alt="Favs Icon"
                /></span>
                </strong>
            </div>
            <img
                class="w-5"
                src="burger.svg"
                alt="Burger Icon"
            />
        </div>
    </div>
  </template>
  
  <script>
    import { useFavsStore } from '../store/favs';
  export default {
    name: "UserPoints",
    data() {
        return {
            store: useFavsStore(),
        }
    },
    computed: {
        favsIcon() {
            return this.store.getFavs > 0 ? 'favs-filled.svg' : 'favs.svg'
        },
    }
    };
  </script>
  
  <style>
    .back-orange {
        background-color: #FC9E15;
    }
    .back-gray {
        background: #3C4059;
    }
  </style>