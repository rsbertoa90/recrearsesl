<template>
  <div class="fcc text-center">
        <ul>
            <li v-for="qa in faq" :key="qa.question">
                <div class="d-flex flex-column">
                    <div>
                        <span class="question subt"><b><h3>{{ qa.question }}</h3></b></span>
                    </div>
                    <span class="answer">
                        {{ qa.answer }}
                    </span>
                </div>
            </li>
        </ul>
  </div>
</template>

<script setup>
    const faq = [
        {question:'¿ Cuales son los requisitos ?' , answer:'Ninguno!, cualquier persona puede participar del taller.'},
        {question:'¿ Quien da el taller ?' , answer:'Somos Rodrigo y Gisella, lo hacemos de forma independiente y no representamos a ninguna institución.'},
        {question:'¿ Cuanto cuesta ?' , answer:' $10.000 por persona.'},
        {question:'¿ Cómo reservo mi lugar ?' , answer:'Por Whatsapp, escribinos al 11-2408-5256 y coordinamos'},
        {question:'¿ Cuanto dura el taller ?' , answer:'Aproximadamente una hora y media mas el tiempo que lleve responder preguntas.'},
        {question:'¿ Que temas se dan ?' , answer:'Que son los sueños lúcidos, que beneficios trae el trabajo con los sueños, como tener sueños lucidos intencionalmente.'},
    ]
</script>

<style scoped>
.subt{ 
  color: #E21260;
  font-weight: bold;
}

.answer{
    font-size: 30px;
}
.question{
    font-size: 40px;
}
@media(max-width:600px){
    .answer{
        font-size: 18px;
    }
    .question{
       font-size: 25px;
    }
}
</style>