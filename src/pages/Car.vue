<template>
<Header></Header>
<section  v-for="(element, i) in pageConfigurator" :class="element.type ">
<videoAnimation 
v-if="element.type === 'videoAnimation'"
:car="$route.params.name"
:index="element.index"
:active="element.active"></videoAnimation>
<ImgTextSection
v-if="element.type === 'imgTextSection' && this.dataLoadet"
:json="element.json"
:index="element.index"></ImgTextSection> 
<contentSection v-if="element.type === 'contentSection' " :class="element.style"
:index="element.index"
:components="element.components"
:style="element.style"
>
</contentSection>
<sliderSection v-if="element.type === 'carSlider'"
:json="element.json"
:index="element.index"
></sliderSection>
<div v-if="element.type === 'space'"
:style="element.style, element.type"
>

</div>
</section> 
    


<Footer></Footer>
</template>

<script>
import videoAnimation from '@/components/carPageUI/videoAnimation.vue';
import ImgTextSection from '@/components/carPageUI/ImgTextSection.vue';
import pageConfigurator from '@/assets/json/eletre/pageConfigurator.json'
import contentSection from '@/components/carPageUI/contentSection.vue'
import sliderSection from "@/components/carPageUI/sliderSection.vue"


export default{
    data(){
        return{
            jsonPath: "@/assets/json/" + this.$route.params.name,
            ImgTextSectionJson: require("@/assets/json/" + this.$route.params.name + "/ImgTextsection.json"),

            pageConfigurator: pageConfigurator,
            videoAnimationArr: [],
            contentSectionArr: [],
            imgTextSectionArr: [],
            carSliderArr: [],
            wideImgArr: [],
            imgParalaxArr: [],

            dataLoadet: false,
            sliderIndex: 0,
            scrollSection: [],
            scrollDown: true
        }
    },
    components:{videoAnimation, ImgTextSection, contentSection,sliderSection},
    methods:{

        scrollDirection(){

            if (window.scrollY > this.lastScrollTop || 0) 
                this.scrollDown = true
                     else if (window.scrollY < this.lastScrollTop)  
                        this.scrollDown = false

            this.lastScrollTop = window.scrollY;
        },
        scroll(){
            this.scrollDirection()

            let windowPosition = window.pageYOffset;
            let currentSlide = this.scrollSection[this.sliderIndex]
            let currentSlideButtom = currentSlide.offsetTop + currentSlide.offsetHeight

            if(windowPosition > currentSlideButtom && this.scrollDown && this.sliderIndex < this.videoAnimationArr.length - 1){
                this.videoAnimationArr[this.sliderIndex].active = false
                this.sliderIndex++
                this.videoAnimationArr[this.sliderIndex].active = true
            } 
            
            if(windowPosition  < currentSlide.offsetTop && !this.scrollDown){
                this.videoAnimationArr[this.sliderIndex].active = false
                this.sliderIndex--
                this.videoAnimationArr[this.sliderIndex].active = true
            }

        },
        setData(object){
            switch(object.type){
                case "videoAnimation":  
                    this.videoAnimationArr.push(object)

                break;
                case "imgTextSection":  
                    this.imgTextSectionArr.push(object)
                    object.json = require('@/assets/json/' + this.$route.params.name +'/imgTextSection/' + object.index + '.json')

                    // console.log(this.imgTextSectionArr)

                break;
                case "contentSection":
                    this.contentSectionArr.push(object)
                    // console.log(this.imgTextBlockArr)

                break;
                case "carSlider":  
                    this.carSliderArr.push(object)
                    // console.log(this.carSliderArr)

                break;
                case "wideImg":  
                    this.wideImgArr.push(object)
                    // console.log(this.wideImgArr)

                break;
                case "carSlider":  
                    this.imgParalaxArr.push(object)
                    // console.log(this.imgParalaxArr)
                break;
            }
        }
    }, 
    mounted(){

        for (let i = 0; i < this.pageConfigurator.length; i++) {
            this.setData(this.pageConfigurator[i])
            if(i ===  this.pageConfigurator.length - 1)
                 this.dataLoadet = true
        }   

        this.scrollSection = document.querySelectorAll(".videoAnimation")
        
        window.addEventListener("scroll", this.scroll)
    }
}
</script>

<style scoped>
section{
    width: 100vw;
}
.scroll{
height: 300vh;
position: relative;
}
.c{
    height: 500vh;
}
.contentSection{
    padding: 4rem 0;
    background-color: black;
}
.space{
    width: 100%;
    height: 30vh;
    background-color: white;

}
</style>