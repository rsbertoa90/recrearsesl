<template>
  <div class="pl-4 fcc mt-4" >
    <div class="text-center d-flex align-items-center justify-center" :class="{'fcc' : mq != 'lg'}">
        <span  style="color:#E21260;font-size: 30px; font-weight: bold;">Para más contenido seguinos en Redes Sociales</span>
        <br v-if="mq=='mob'">
        <div>
            <v-btn  size="x-large" class="ml-4" icon-size="large" density="compact" icon="mdi-facebook" :href="fburl" target="_blank" color="info" />
            <v-btn  size="x-large" class="ml-4" color="pink" icon="mdi-instagram"  density="compact" :href="instaurl" target="_blank" />
            <v-btn  size="x-large" class="ml-4" color="green" density="compact" icon="mdi-whatsapp" :href="whatsappUrl" target="_blank" />
        </div>
    </div>
  </div>
</template>

<script setup>
const whatsappUrl = 'https://api.whatsapp.com/send?phone=541124085256&text=Hola%20te%20escribo%20por%20el%20taller%20de%20sueños%20lucidos'
const fburl = 'https://www.facebook.com/ReCrearseSuenosLucidos'
const instaurl = 'https://www.instagram.com/recrearsesuenoslucidos/'
const mq = useMq();
</script>

<style>

</style>