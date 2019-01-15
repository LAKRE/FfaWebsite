<template>
  <div>
    <div class="header">
    </div>
    <div class="main">
      <div class = "ffa-home">
        <div class="ffa_label-ff">FreeFight</div>
        <div class="ffa_label-a">Academy</div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="true" class="text">
        <p>lorem ipsod sdza,id,z dzakdzand kzndkdza
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          lorem ipsod sdza,id,z dzakdzandkzndkdza
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          lorem ipsod sdza,id,z dzakdzandkzndkdza
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq
          dsdsdsqdsqd sdqsdsq dsq dsq dsq dsq d sq</p> 
      </div> 
    </transition>
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
  
  @font-face{
    font-family: "Shogun";
    src: url("../../public/font/livin-hell_shoguns-clan/Shoguns Clan.ttf");
  }
  .header {
    height: 4.5em;
    width: 100%;
    background-color: black;
  }

  .main{
    width:100%;
    height:42em;
    background-image: url("../../public/img/FfaNicourtCebanFilipponi.jpg");
    background-position: center;
    background-size: cover;
    font-family: "Shogun";
    color:yellow;
    margin-bottom:0;
    
    
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
    margin-top:0;
    color: yellow;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
