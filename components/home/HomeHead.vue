<template>
  <div class="w-100">
    <v-parallax class="w-100" :height="parallaxHeight" :src="parallaxImage">
        <v-row class="h-100" align-content="center" justify="center">
            <v-col cols="4" v-if="mq == 'lg'">
                
            </v-col>
            
            <v-col cols="12" lg="6">
              <div class="fcc text-center mt-4 ">
                <h1 class="mt-4"> TALLER DE SUEÑOS <br> LUCIDOS </h1>    
                <h2 class="mt-4"> Qué son, beneficios y cómo tenerlos </h2>
                <div class="d-flex justify-center w-100 mt-4">
                  <div>
                    <v-img :width="logoWidth" src="/public/img/logo.png" />
                  </div>
                </div>

              </div>
            </v-col>
           <!--  <v-col cols="12" class="mt-4">
                <span style="font-size: 30px; font-weight: bold;">CAFETERIA FAMILIA GREEN</span>
            </v-col> -->
        </v-row>
     
    </v-parallax>
  </div>
</template>

<script setup>
  import {useMq} from '@/composables/useMq'
  const mq = useMq();
  let  parallaxHeight = mq == 'lg' ? 700 : 340 ;
  let parallaxImage = mq == 'lg' ? "/img/fondorec1.jpg" : "/img/fondom.jpeg";
  let logoWidth = mq == 'lg' ? 500 : 250;
</script>

<style scoped>
h1{
  -webkit-text-stroke: 6px black;
  color:white;
  font-size: 80px;
}
h2{
  color:#D94A4A;
  font-size: 30px;
}
@media(max-width:600px){
  h1{
    font-size:40px;
    -webkit-text-stroke: 2px black;
  }
  h2{
    font-size:20px;
  }
}
</style>