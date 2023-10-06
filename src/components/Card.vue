<template>
    <div class="card">
<ImageParalax
:url="url"
>
</ImageParalax>

<div class="text">
    <h3>{{ arr.title }}</h3>
    <p>{{ arr.text }}</p>
    <button>{{ arr.buttonText }}</button>
</div>        
    </div>


</template>

<script>

import ImageParalax from './ImageParalax.vue';
export default{
    data(){
        return{
            url: require('@/assets/img/cards/'+this.index+'.jpg')
        }
    },
    props:["arr", "index"],
    components:{ImageParalax}
}
</script>

<style scoped>

.card{
    display: flex;
    flex-direction: column;
    width: 50%;
    overflow: hidden;
}

.text{
    margin: 2rem 0 0 2rem;
}
h3{
    font-size: 1.8rem;
}
p{
    font-size: 1.2rem;
    padding: 1.5rem 0;
}
button{
    padding: 1rem 1.5rem;
    background-color: white;
}
</style>