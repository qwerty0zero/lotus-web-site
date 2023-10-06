<template>

<section class="faqSection">

    <h3>{{ faqTitle }}</h3>
    <h4>{{ arr.midTitle }}</h4>

        <Questions
        :title=" arr.title"
        :text="arr.text"
        :clicked="clicked"
        ></Questions>

<div class="close" @click="$emit('close')">
    >
</div>
</section>

</template>

<script>

import Questions from '@/components/Questions.vue';

export default{
    data(){
        return{
            titleArr: this.arr.title,
            textArr: this.arr.text
        }
    },
    props: ["arr", "faqTitle", "clicked"],
     components: {Questions},
     mounted(){
        // for (let i = 0; i < this.arr.length; i++) {
        //     console.log(this.arr[i].title)
            
        // }
     }

}
</script>

<style scoped>
.faqSection{
    background-color: white;
    position: absolute;
    top: 0;right: 0;
    height: 100vh;
    width: 70vw;
    padding: 4em;
    padding-top: 6em;
}
.close{
    position: absolute;
    top: 0;right: 0;width: 50px;height: 50px;background-color: black;
    transform: translateX(-35%);
    color:#fdef00;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
}

h3{
    font-size: 6.6em;
    font-weight: 400;
    margin-bottom: 2rem;
}
h4{
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 6rem;
}
</style>