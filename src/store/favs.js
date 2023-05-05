import { defineStore } from 'pinia'
import mock from './../mock/data'

export const useFavsStore = defineStore('storeFavs', {
  state: () => {
    return { favs: [],
    data: mock }
  },
  actions: {
    addFavs(id = 0) {
      this.favs.push(id)
    },
    removeFavs(id = 0) {
      this.favs.splice(this.favs.indexOf(id), 1);
    },
    emptyFavs(v) {
      this.favs = []
    },
  },
  getters: {
    getFavsCount: (state) => state.favs.length,
    getFav: (state) => { 
      return (id) => state.favs.includes(id)
    }
  },
})
