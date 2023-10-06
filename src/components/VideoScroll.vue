<template>
<section ref="element" :class="{activeInT: activeIn, isDown: isDown}" @load="loaded">
    <div class="holder">
        <video autoplay muted loop preload="auto">
    <source src="@/assets/video/lotus_driving.mp4"  type="video/mp4">
</video>
    </div>


    <!-- <ZoomScroll
:backgroundImage="require('@/assets/video/lotus_driving.mp4')"
:initialScale="1">

</ZoomScroll> -->

    
</section>
<div class="text">
    <h3>HOME OF LOTUS</h3>
    <div class="buttonGroup">
        <router-link to="/car/eletre" class="DarkYellow btn">DISCOVER ELETRE</router-link>
    <router-link to="/car/eletre" class="transparent black btn">ORDER YOURS</router-link>
    </div>
    <p>Experience, first-hand, the production process. Witness the track, where our class-leading sport-cars are put through their paces. Walk in the footsteps of the F1 greats, who so admirably filled the Lotus trophy cabinet.</p>

</div>
</template>

<script>
import  ZoomScroll  from  "vue-zoom-scroll/src/vue-zoom-scroll.vue"

export default {
    data(){
        return{
            activeIn:false, 
            isDown: false,
            load:false
        }
    },
    components: {ZoomScroll},
    props:["video"],
    mounted(){
        window.addEventListener("load",this.loaded())
        window.addEventListener('scroll', this.checkAnimation);     
    },
    methods:{
        checkAnimation(){
            if(this.load){
                let rect = this.$refs.element.getBoundingClientRect();

                if(( rect.top <= 20 && !this.isDown)){
                    this.activeIn = true;  
                }else {
                    this.activeIn = false;  
                }

                if(( rect.bottom <= 500)){
                    this.activeIn = false;  
                    this.isDown = true
                } else if(( rect.bottom >= 550)){
                    this.activeIn = true;  
                    this.isDown = false
                }
                if(( rect.bottom >= 550) && ( rect.top >= 20)){
                    this.activeIn = false;  
                } 
            }

            },
            loaded(){
                this.load=true;
            }

            
    }
}
</script>

<style scoped>
section{
    background-color:#f2f1f0;
   padding-top: 3rem;
    height: 300vh;
    width: 100%;
    position: relative;
}
.holder{
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);
    margin:  auto;
    position: relative;
    top: 0;left: 0;
    transition: 0.5s;
    z-index: 2;

    
}
.activeInT .holder{
    position: fixed;
    width: 100%;
    height: 100%;
}
video{
    max-height: 100vh;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
    display: block;
}
.activeInT video{
    position: fixed;
}
.isDown video{
    bottom: 0;
}
.text{
    background-color: #f2f1f0;
    font-size: 3rem;
    padding: 6rem 3rem;
}
h3{
    font-size:8vw;
    margin-bottom: 3rem;
}
p{
    margin-top: 5rem;
    font-size: 1.6rem;
}
</style>