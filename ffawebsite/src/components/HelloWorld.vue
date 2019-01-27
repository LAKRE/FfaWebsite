<template>
  <div v-on:scroll="scrolled(evt)">
    <div class="header">
    </div>
    <div class="main">
      <div class = "ffa-home">
        <transition appear name="fade1">
          <div class="ffa_label-ff">FreeFight</div>
        </transition>
        <transition appear name="fade2">
          <div class="ffa_label-a">Academy</div>
        </transition>
      </div>
    </div>
    <div class="line">
    </div>
    <transition name="slide-fade">
        <p v-show="show" class="text">Créé en 1997 par Mathieu Nicourt et un noyau de passionnés de sports de combat, la Free Fight Academy compte aujourd'hui plus de 150 licenciés.
Elle propose plusieurs activités à ses adhérents (Mixed Martial Arts, Pancrace, Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien).
La Free Fight Academy est gérée par une équipe de professeurs diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir, hommes et femmes recherchant une méthode d'entretien physique ou de self-défense. </p>  
    </transition>
    <agile>
    <div class="slide slide--1"><h3>slide 1</h3></div>
    <div class="slide slide--2"><h3>slide 2</h3></div>
    <div class="slide slide--3"><h3>slide 3</h3></div>
    <div class="slide slide--4"><h3>slide 4</h3></div>
    <div class="slide slide--5"><h3>slide 5</h3></div>
    <div class="slide slide--6"><h3>slide 6</h3></div>
    </agile>
    <div class="footer">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import VueAgile from 'vue-agile'


@Component({
  
})


export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  
   show: boolean = false;

   created(){
     window.addEventListener('scroll', this.scrolled);
   }

  
   scrolled(evt:any): void{
      // this.show = true;
      console.log('evt',evt.pageY);
      if (evt.pageY >= 400){
        this.show = true;
      window.removeEventListener('scroll', this.scrolled);
      }
      

   }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  @font-face{
    font-family: "Shogun";
    src: url("../../public/font/livin-hell_shoguns-clan/Shoguns Clan.ttf");
  }
  .header {
    height: 4.5em;
    width: 100%;
    background-color: black;
  }

  .line {
    height: 1.5em;
    width: 100%;
    // margin-bottom:;
  }


  .main{
    width:100%;
    height:42em;
    background-image: url("../../public/img/FfaNicourtCebanFilipponi.jpg");
    background-position: center;
    background-size: cover;
    font-family: "Shogun";
    color:yellow;
    
    .ffa-home{
       position:relative;
        top:0.6em;
       font-size: 9em;
      .ffa_label{

        &-ff{
          position:relative;
          left:-2.5em;
          
        }

        &-a{
          position:relative;
          left:-1.8em;
        }
      }
    }
  }

  .text{
    position:relative;
    padding-left: 8em;
    padding-right: 8em;
    // margin-top:;
    font-size:1.3em;
    color: yellow;
  }

  .fade1-enter {
  opacity: 0;
  }
  .fade1-enter-active, .fade-leave-active {
  transition: opacity 5s;
  }

  .fade2-enter {
  opacity: 0;
  }
  .fade2-enter-active, .fade-leave-active {
  transition: opacity 5s;
  }

  .slide-fade-enter-active {
  transition: all .8s ease;
  
 }
 .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
 }
 .slide {
    color: #fff;
    height: 300px;
    position: relative;

    &--1 {
        background-color: #f1c40f;
    }

     &--2 {
        background-color:red;
    }

    h3 {
        font-size: 32px;
        font-weight: 300;
        left: 50%;
        margin: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

  
  
</style>
