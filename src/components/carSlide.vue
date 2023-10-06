<template>
<div class="container" :class="{activeTransition : slideVisible && active}" ref="element">
    <h3 class="fade top">{{ title }}</h3>
    <p class="fade top">{{ text }}</p>
    <div class="btnContainer">    
        <router-link :to="`/car/` + title" class="btn yellow fade top">
        DISCOVER {{ title }}
    </router-link>
    <router-link to="" class="btn transparent black fade top">
        CONFIGURATE YOURS  
    </router-link></div>

    <img class="carTransition fade bottom" :src="require(`@/assets/img/carsSlider/` + index + `.png`)" alt="">

    <div ref="template" id="temp"  @load="elementLoad=true"></div>
</div>
</template>

<script>

export default{
    data(){
        return{
            active: false,
            elementLoad:false
        }
    }, 
    props:["title", "text", "index", "slideVisible"],
    mounted(){
        this.checkAnimation()
        window.addEventListener('scroll', this.checkAnimation);
    },
    methods:{
        checkAnimation(){
            // if(this.elementLoad){
                let rect = this.$refs.element.getBoundingClientRect();

                var viewHeight = 
                Math.max(document.documentElement.clientHeight, window.innerHeight);
                if(!(rect.bottom < 0 || rect.top - viewHeight >= -500))
                    this.active = true;  
                 else 
                    this.active = false; 
            }

            
        // }
    }
}
</script>

<style scoped>
.container, .btnContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.container{
    width: 100%;
    padding: 0  3rem;
    max-width: 1800px;
    position: relative;
    gap: 2rem;
}
h3{
    font-size: 6.6em;
    font-weight: 400;
    text-transform: uppercase;
}
p{
    font-size: 1.4rem;
    text-align: left;
    max-width: 46rem;
}
.btn.black.transparent{
	color: black;
    padding: 15px 0;
}
div>img{
    width: 100%; transform: translateY(-30%);
}
#temp{
    position: absolute;
    width: 0;height: 0;
    top: 50%;right: 50%;
    transform: translate(-50%, 50%);
}
.btnContainer{
gap: 1rem;
}
@media screen and (max-width: 860px){
.btnContainer{
    width: 100%;
    margin-top: 4rem;
}
.btnContainer>.btn{
    width: 100%;
}
.container :nth-child(3){
order: 4;
}
.container :nth-child(4){
order: 3;
}
div>img, .activeTransition .carTransition.fade.bottom{
    transform: translateY(0%);
    margin-top: 4rem;

}

}
</style>