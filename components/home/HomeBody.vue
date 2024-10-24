<template>
 <v-container :width="containerWidth">
        <div class="d-flex flex-column pl-4 body-text" :class="{'text-center' : mq != 'lg'}" >
    
            <div class="mt-4" :class="{'text-center' : mq != 'lg'}">
                    <span class="subt">
                        CUANDO ?
                    </span>
                    <br v-if="mq=='mob'">
                    <span>
                        24 de Noviembre 18hs
                    </span>
            </div>
            <div class="mt-4" :class="{'text-center' : mq != 'lg'}">
                <span class="subt">
                    DONDE ?
                </span>
                <br v-if="mq=='mob'">
                <span>
                    Av. Marconi 1101, TANDIL en cafetería Familia Green 
                </span>
            </div>
            <div class=" mt-4 bordered subt">
                CUPOS LIMITADOS     <br v-if="mq=='mob'"> Reservá tu lugar por tan solo $2000
            </div>
        
            <v-row class="mt-4">
                <v-col cols="12" lg="9">

                    Escribinos por Whatsapp al 11 2408 5256 y coordinamos  
                </v-col>
                <v-col cols="12" lg="3">
                    <v-btn large class="ml-4" color="#E21260" link  :href="whatsappUrl" target="_blank" >ESCRIBIR POR WHATSAPP</v-btn>
                </v-col>
            </v-row>
            
            <div class="mt-4 pt-4 fcc text-center">
                <span>
                    Algunos de los temas que trataremos son:
                </span>
                <span>
                    ✅¿ Qué son los sueños lúcidos?
                </span>
                <span>
                    ✅¿ Que beneficios pueden tener los sueños lúcidos y el trabajo con los sueños ?
                </span>
                <span>
                    ✅¿Cómo se pueden tener sueños lucidos intencionalmente ?
                </span>
                <span class="mt-4">
                    ¿ Conoces a alguien que le pueda interesar? Avísale 😁
                </span>
            </div>
      
        </div>
 </v-container>
</template>

<script setup>
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=541124085256&text=Hola%20te%20escribo%20por%20el%20taller%20de%20sueños%20lucidos'
    const mq = useMq();
    let  containerWidth = mq == 'lg' ? 1100 : 360 ;
    let parallaxImage = mq == 'lg' ? "/img/fondorec1.jpg" : "/img/fondom.jpeg";
</script>

<style scoped>
.bordered{
    border:5px solid #E21260;
    text-align: center;
    padding:10px;
}
.subt{
  
    color: #E21260;
    font-weight: bold;
}
.body-text{
    font-size: 30px;
}

@media(max-width:600px){
    .body-text{
        font-size: 18px;
    }
}
</style>