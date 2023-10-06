<template>
<div class="content" :class="type">
    <div class="imgHolder">
        <ImageParalax
        :url="require('@/assets/img/cars/' +  this.$route.params.name + '/imgTextBlock/' + this.index + '.jpg')">
        </ImageParalax>
    </div>
    <div class="textContent" v-if="!json.subTitle">
        <h5>{{ json.title }}</h5>
        <p> {{ json.text }}</p>
    </div>
    <div class="textContent sub" v-if="json.subTitle">
        <p>{{ json.subTitle[0] }}</p>
        <p> {{ json.text[0] }}</p>

        <p>{{ json.subTitle[1] }}</p>
        <p> {{ json.text[1] }}</p>
    </div>
</div>
</template>

<script>

import ImageParalax from '../ImageParalax.vue';

export default{
    data(){
        return{
            json: require("@/assets/json/" + this.$route.params.name + "/imgTextBlock/" + this.index + ".json")
        }
    },
    props:["index", "type"],
    components: {ImageParalax}

}
</script>

<style scoped>
.content{
    width: 100%;
    display: flex;
    gap: 2rem;
    padding-right: 3rem;
}
.imgTextBlockReverse{
    flex-direction: row-reverse;
    margin-top: 2rem;
}
.imgHolder{
    width: 100%;
    height: auto;

}
.textContent{
    color: white;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 50%;
}
.textContent.sub{
    gap: 1rem;
    justify-content: center;
    padding-left: 2rem;
}
.textContent.sub p:nth-child(2n - 1){
    font-weight: 900
}
h5{
    color: #fff41a;
    font-size: 4rem;
}
@media screen and (max-width:1110px) {
    .textContent{
        font-size: 1.3rem;
        gap: 2rem;
    }
    h5{
        font-size: 3.5rem;
    }
}
@media screen and (max-width:900px){
    .textContent{
        font-size: 1.1rem;
        gap: 2rem;
    }
    h5{
        font-size: 3rem;
    }
}
@media screen and (max-width:800px){
    .content {
        flex-direction: column-reverse;
        padding: 0 3rem;
    }
    .textContent{
        width: 100%;
    }
    .imgHolder{
        width: 80%;
    }
    .imgTextBlockReverse.content{ 
        flex-direction: column;
    }
    .imgTextBlockReverse .imgHolder{
        width: 100%;
    }
    .textContent.sub{
        padding: 0;
    }
}
</style>