import Vue from 'vue'

declare module 'vue/types/vue' {
  // Les propriétés globales peuvent être déclarées
  // sur l'interface `VueConstructor`
  interface VueConstructor {
    VueAgile: any
  }
}