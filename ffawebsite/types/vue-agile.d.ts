import Vue from 'vue'

declare module 'vue-agile' {
  // Les propriétés globales peuvent être déclarées
  // sur l'interface `VueConstructor`
  interface Vue {
    VueAgile: any
  }
}