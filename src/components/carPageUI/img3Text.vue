<template>

<div class="content">
<div class="Holder">
    <div class="imgHolder">
        <ImageParalax
        :url="require('@/assets/img/cars/' +  this.$route.params.name + '/img3Text/' + this.index + '/1.jpg')">
        ></ImageParalax>
    </div>
    <div class="imgHolder">
        <ImageParalax
        :url="require('@/assets/img/cars/' +  this.$route.params.name + '/img3Text/' + this.index + '/2.jpg')">
        ></ImageParalax>
    </div>
</div>
<div class="Holder">

    <div class="imgHolder">
        <ImageParalax
        :url="require('@/assets/img/cars/' +  this.$route.params.name + '/img3Text/' + this.index + '/3.jpg')">
        ></ImageParalax>
    </div>
    <div class="textContent">
        <p>{{ json.text[0]}}</p>
        <p> {{ json.text[1] }}</p>
    </div>
</div>
</div>

</template>

<script>

import ImageParalax from '../ImageParalax.vue';


export default{
    data(){
        return{
            json: require("@/assets/json/" + this.$route.params.name + "/img3Text/" + this.index + ".json")

        }
    },
    props:["index"],
    components: {ImageParalax}

}


</script>

<style scoped>
.content{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1rem;
}
.Holder{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
}
.Holder:last-child{
    flex-direction: row-reverse;
}
.imgHolder{
    width: 50%;
}

.textContent{
    color: white;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 50%;
    padding: 2rem;
}
/* @media screen and (max-width:1110px) {
    .textContent{
        font-size: 1.3rem;
        gap: 2rem;
    }
} */
@media screen and (max-width:900px){
    .textContent{
        font-size: 1.1rem;
    } 
}
@media screen and (max-width:800px){
    .Holder, .Holder:last-child{
        flex-direction: column;
    }
    .imgHolder, .textContent{
        width: 80%;
        padding: 0 3rem;
    }
    .Holder>div:first-child{
        margin-left: auto;
    }
    .Holder>.textContent{
        width: 100% !important;
        font-size: 1.5rem;
    }
}
</style>