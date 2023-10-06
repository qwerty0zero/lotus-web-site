<template>
<div @load="getHeight" @click="click" :class="{active: clicked}" ref="div">
    <p class="title">{{ title }}</p>
    <p ref="text" v-show="clicked" class="text">{{ text }}</p>  
</div>
</template>

<script>

export default{
    data(){
        return{
            clicked:false, 
            divHeight: 0,
            divHeightLow: 0

        }
    }, 
    props: ["title", "text", "section"],
    methods:{
        click(){
            this.clicked =! this.clicked
        }
    }, 
    updated(){
        this.clicked = false
    }

}
</script>

<style scoped> 
div{
    font-size: 1.6rem;
    border-bottom: 3px solid black;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: 0.3s;
    overflow: hidden;
}

.title{
    max-width: 80%;
}
.text{
    font-size: 1.4rem;
    padding-top: 0.5rem;
    transition: 0.3s;
    opacity: 0;
    display: none;
}
div.active .text{
opacity: 1;
display: block;}

</style>