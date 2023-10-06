<template>

<Header></Header>

<main>
<video autoplay muted loop preload="auto">
    <source src="@/assets/video/main.mp4"  type="video/mp4">
</video>
<div class="buttonGroup">
    <router-link to="/car/eletre" class="yellow btn">DISCOVER ELETRE</router-link>
    <router-link to="/car/eletre" class="transparent btn">ORDER YOURS</router-link>
</div>
</main>
<section class="slider">
    <carousel :items-to-show="1"
    @slide-end="handleSlideEnd"
    @slide-start="handleSlideStart">
    <slide v-for="(slide, index) in carsSliderData" :key="slide">
        <carSlide
        :title="slide.title"
        :text="slide.text"
        :index="index"
        :slideVisible="slideIndex === index ? true : false" 
        >
        </carSlide>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>

</section>

<VideoScroll></VideoScroll>

<section
class="cards"
>
<Card v-for="(el, index) in cardsData"
:arr="el"
:index="index"
></Card>
</section>
<FindCenter>
    
</FindCenter>


<Footer></Footer>


</template>

<script>

import carsSlider from "@/assets/json/carsSlider.json"
import cards from "@/assets/json/cards.json"


import carSlide from "@/components/carSlide.vue"
import VideoScroll from "@/components/VideoScroll.vue"
import Card from "@/components/Card.vue"
import FindCenter from "@/components/FindCenter.vue"




import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    name: 'home',
    components: {
    Carousel,
    Slide,
    Navigation,
    carSlide,
    VideoScroll,
    Card,
    FindCenter
  },

    data(){
        return{
            carsSliderData: carsSlider,
            slideIndex: 0,
            cardsData: cards

        }
    },
    methods:{
        handleSlideEnd(data) {
            this.slideIndex = data.currentSlideIndex
      }
    }
}
</script>

<style scoped>
main{
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 10rem;
}
main video{
    position: absolute;
    width: 100%;height: 100%;
    top: 0;left: 0;
    object-fit: cover;
}


.cards{
    display: flex;
    padding: 3rem;
    gap: 2rem;
}


.transparent img{
    filter: invert(1);
}

.slider{
    padding: 5rem;
}

.div{
    height: 400vh;
    background-color: aqua;
}
@media screen and (max-width:1050px) {
   .cards{
    flex-direction: column;
   } 
}
</style>