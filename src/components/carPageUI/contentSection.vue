<template>

<div class="component" v-for="element in components">

    <img3Text v-if="element.type==='img3Tetx'"
    :index="element.index"
    ></img3Text>
    <ImgTextBlock v-if="element.type==='imgTextBlock' || element.type==='imgTextBlockReverse'"
    :index="element.index"
    :type="element.type"
    ></ImgTextBlock>
    <sliderSection v-if="element.type==='carSlider'"
    :index="element.index"
    :type="element.type"

    ></sliderSection>
</div>

</template>

<script>

import img3Text from  "@/components/carPageUI/img3Text.vue"
import ImgTextBlock from  "@/components/carPageUI/ImgTextBlock.vue"
import sliderSection from "./sliderSection.vue"

export default{
    data(){
        return{

        }
    },
    components: {img3Text,  ImgTextBlock, sliderSection},
    props:["index", "components", "style"]
}


</script>

<style scoped>

</style>