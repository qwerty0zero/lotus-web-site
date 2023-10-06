<template>

<div>
        <ul>
        <li v-for="(el, index) in arr">
        <Question
        :title="index"
        :text="el"
        :section="clicked"

        ></Question>
        </li>
    </ul>
</div>

</template>

<script>

import Question from '@/components/Question.vue';

export default{
    data(){
        return{
            arr: {}
        }
    },
    props: ["title", "text", "clicked"],
    components:{Question},

    methods:{
        fillArr(){
            this.arr = {}
            this.title.forEach((element, index) => {
            this.arr[element] = this.text[index]
        });
        }
    },
    updated(){
        this.fillArr()
    }, 
    mounted(){
        this.fillArr()
    }
}

</script>

<style scoped>

</style>