<template>

<section class="slider" :class="json.mode">
    <h4>{{ json.text }}</h4>

    <h3>{{ json.title }}</h3>

    <carousel 
    :items-to-show="1"
    @slide-end="slideChange()"
    ref="myCarousel"
    >
    <slide v-for="(slide, i) in json.img" :key="slide">
        <div class="slide" >
                <img v-if="json.img[i].type === '.jpg'" :src="require('@/assets/img/cars/' + this.$route.params.name + '/carSlider/' + this.index + '/' + json.img[i].index  + json.img[i].type )" alt="">
                <video  v-if="json.img[i].type === '.mp4'" muted preload="auto" autoplay>
                <source :src="require('@/assets/img/cars/' + this.$route.params.name + '/carSlider/' + this.index + '/' + json.img[i].index  + json.img[i].type )">
            </video>
            <div class="textContent">
            <h5>{{ json.imgTitle[i] }}</h5>
            <p>{{ json.imgText[i] }}</p>
    </div>
        </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>

</section>

</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default{
    data(){
        return{
            json: require("@/assets/json/" + this.$route.params.name + "/carSlider/" + this.index + ".json") ,
            currentSlide: 0
        }
    },
    components: {
    Carousel,
    Slide,
    Navigation
  },
  props: ["index", "type"],
  methods: {
    slideChange(){
        console.log(this.$refs.myCarousel.data.currentSlide)
        this.currentSlide = this.$refs.myCarousel.data.currentSlide
    }
  }
}

</script>

<style scoped>
.slider{
    padding: 4rem 8rem;
    color: white;
}
.slider.light{
    color:black;
}
.carousel{
    
}
.slide{
    margin-left: 1rem;
}
img, video{
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
.slide h5{
    font-size: 3rem;
}
.textContent{
    max-width: 70%;
    margin: 1rem auto 0 auto;
    min-height: 105px;
    opacity: 0;
    transition: 0.3s;
  transform: translateY(3rem);
  transition-delay: 0.2s;

}
.slide p{
    font-size: 1.3rem;
    margin-top: 1rem;
}
h3,h4{
    font-weight: 200;
}
h4{
    margin-bottom: 1rem;
    font-size: 2rem;
}
h3{
    font-size: 3rem;
    margin-bottom: 4rem;
}


.carousel__slide--active .textContent{
  opacity: 1;
  transform: translate(0);
}

@media screen and (max-width:1200px){
    img, video{
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    }
    .slider{
        padding: 4rem 2rem;
    }

}
@media screen and (max-width:1000px){
    .textContent{
        width: 90%;
    }
    .slide h5{
        font-size: 2.5rem;
    }
    .slide p{
        font-size: 1.1rem;
    }
}
@media screen and (max-width:800px){
    .slider{
        padding: 2rem;
    }
}
</style>