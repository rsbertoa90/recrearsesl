<template>
    <div>
        <client-only>
            
        </client-only>
        <div style="padding-bottom: 100px;">
            <Head/>  
            <HomeBody/>
            <HomeSocial/>
            <HomeFaq class="mt-4"/>
        </div> 
        <HomeMomwebfooter/>
    </div>
</template>

<script setup>

    import HomeBody from './HomeBody.vue';
    import HomeSocial from './HomeSocial.vue';
    import Head from './HomeHead.vue'
</script>

<style>

</style>