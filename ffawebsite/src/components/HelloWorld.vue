<template>
  <div>
    <div class="header">
    </div>
    <div class="main">
    </div>  

    <div class="footer">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    height: 4.5em;
    width: 100%;
    background-color: black;
  }

  .main{
    width:100%;
    height:50em;
    background-image: url("../../public/img/FfaNicourtCebanFilipponi.jpg");
    background-position: center;
    background-size: cover;
  }
</style>
