<template>
        <div id="canvasHolder"  >

        <canvas :id="car+'-'+index"></canvas>
        <div id="textSection">
            <div  :id="'holder' + this.index" class="textHolder" :class="this.textArr.animation, this.textArr.position" v-if="this.svgLink">
            <img :src="require('@/assets/svg/' + this.svgLink +'.svg')" alt="">
            <p class="upper">{{ this.textArr.text }}</p>
            <p>{{ this.textArr.subText }}</p>
            </div>

            <div  :id="'holder' + this.index"  class="textHolder" :class="this.textArr.animation, this.textArr.position" v-if="!this.svgLink">
            <p :id="'topText' + this.index" class="upper">{{ this.textArr.text }}</p>
            <h5 :id="'h5Text' + this.index">{{ this.textArr.title }}</h5>
            <p :id="'bottomText' + this.index">{{ this.textArr.subText }}</p>
            </div>
            </div>


        </div>
</template>

<script>



export default{
    data(){
        return{
            textArr:[],
            frameCount: 0,
            frameIndex: 1,
            svgLink: '',
            animationType: "",
            opacityCoefficient: 0,
            scrollCoefficient: 0,
            scrollCount: 50,
            opacityCount: 0,
            position: ""
            
        }
    },
    props: ["car", "index", "active"],
    methods:{
        textAnimation(){
            let block = document.getElementById("textBlock")
            console.log(this.textArr.animation)
            switch(this.textArr.animation){
                case "scrollTop":
                    if(!this.scrollUp){
                        this.scrollPostion -= this.scrollStep 
                        this.opacityPossition -= 0.01
                    }else{
                        this.scrollPostion += this.scrollStep
                        this.opacityPossition += 0.01
                    }
                    block.style.top = this.scrollPostion + "%";
                    block.style.opacity = this.opacityPossition;
                console.log(21)

                break;

                case "fade":
                console.log(11)
                break;
            }
        }, 
        getData(){
            this.textArr = []
            this.textArr = require("@/assets/json/" + this.car + "/imgScroll/" + this.index + ".json")
            this.frameCount = this.textArr.frames
            this.animationType = this.textArr.animation
            this.position = this.textArr.position[0] + "-" + this.textArr.position[1]

            this.opacityCoefficient = (this.animationType === "scrollTop") ?
                                        130 / this.frameCount :
                                        200 / this.frameCount
            this.scrollCoefficient = (this.animationType === "scrollTop") ?
                                        60 / this.frameCount : 
                                        (this.animationType === "fade") ?
                                        20 / this.frameCount : 0
            this.svgLink = (this.textArr.svg) ? this.textArr.svg : ''

            },
        currentFrame(index) {
            return require('@/assets/img/cars/' + this.car+ "/imgScroll/" + this.index + "/" + index + ".jpg")
        },

        preloadImages() {
            for (let i = 1; i <= this.frameCount; i++) {
            const img = new Image();
            img.src = this.currentFrame(i);
        }
        }
    },
    mounted(){
    // console.log('@/assets/img/cars/' + this.car+ "/imgScroll/" + this.index + "/" + index + ".jpg")
    const html = document.documentElement;
    const canvas = document.getElementById(this.car+"-"+this.index);
    const context = canvas.getContext("2d");
    const canvasHolder = document.getElementById("canvasHolder")


    this.getData()
   

    const img = new Image()
    img.src = this.currentFrame(1);
    canvas.width=1920;
    canvas.height=1080;
    img.onload=function(){
      context.drawImage(img, 0, 0);
    }

    const updateImage = index => {
      img.src = this.currentFrame(index);
      context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {  
    if(this.active){
      const scrollTop = (html.scrollTop - (this.index - 1) * window.innerHeight * 3) ;
      const maxScrollTop = canvasHolder.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const holder = document.getElementById('holder' + this.index)

      const topText = document.getElementById("topText" + this.index)
      const bottomText = document.getElementById("bottomText" + this.index)
      const h5Text = document.getElementById("h5Text" + this.index)

      this.frameIndex = Math.min(
        this.frameCount - 1,
        Math.ceil(scrollFraction * this.frameCount)
      );
      switch (this.textArr.animation){
        case "scrollTop":
        holder.style.opacity = 1 - this.frameIndex * this.opacityCoefficient / 100
        holder.style.top = this.scrollCount - this.scrollCoefficient * this.frameIndex + "%"
        break;
        case "fade": 
        this.opacityCount = 
        (this.frameIndex <= (this.frameCount / 2) - 10) ?
        this.frameIndex * this.opacityCoefficient / 100 :
        (this.frameIndex >= (this.frameCount / 2) - 10 && this.frameIndex < (this.frameCount / 2)) ? 1:
        (this.frameIndex >= (this.frameCount / 2)) ?
        1 - ((this.frameIndex - this.frameCount / 2) * this.opacityCoefficient) / 100 - ( this.opacityCoefficient / 100): 0

        topText.style.opacity = this.opacityCount + 0.05
        h5Text.style.opacity = this.opacityCount + 0.1
        bottomText.style.opacity = this.opacityCount

        if(this.frameIndex >= (this.frameCount / 2)){
            topText.style.opacity = this.opacityCount - 0.05
            h5Text.style.opacity = this.opacityCount - 0.1    
        }


        switch(this.position){
            case "top-right":
                case "top-right":
                topText.style.left = this.scrollCoefficient * this.frameIndex +  "%"
                h5Text.style.right = (this.scrollCoefficient * this.frameIndex) / 2 +  "%"
                bottomText.style.right = this.scrollCoefficient * this.frameIndex +  "%"
            break;
            case "down-left": case "top-left": case "centerY-left":
                topText.style.left = this.scrollCoefficient * this.frameIndex +  "%"
                h5Text.style.right = (this.scrollCoefficient * this.frameIndex) / 2 +  "%"


        }

      }

        requestAnimationFrame(() => updateImage(this.frameIndex + 1))
    }
    });
    


    this.preloadImages()

    }
}
</script>

<style scoped>

h5{
    font-size: 6rem;
    font-weight: 100;
    color: #fff41a;
}

#canvasHolder{
    height: 300vh;
    position: relative;

}

canvas{
position: sticky;
  left:0;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

#textSection{
  position: absolute;
  left:0;
  top: 0;
  width: 100vw;
  height: 300vh;
}
.textHolder{
    position: sticky;
    z-index: 4;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 0.5rem;
    width: max-content;
    opacity: 1;
}

.fade p, .fade h5{
 opacity: 0;
}
.centerY.centerX{
    margin: 0 auto;
    top: 50%;                         
    transform: translate(0,-50%);  
}
.top.right{
    top: 0%;   
    transform: translate(-5vh,40%);
    align-items: flex-end;
    margin-left: auto;
}
.down.left{
    transform: translate(4vh,40%);
    top: 79vh;
    align-items: flex-start;
}
.top.left{
    top: 0%;   
    transform: translate(5vh,40%);
    align-items: flex-start;
}

.top.right>p:first-child{
    margin-right: auto;
}
.centerY.left{
    top: 50%;                    
    align-items: flex-start;     
    transform: translate(5vh,-50%);
}

.textHolder img{
    width: 60vw;
}
p{
    color: white;
    font-size: 1.8rem;
}
p, h5{
    position: relative;
    transition: 0.5s;
}
.upper{
    text-transform: uppercase;
}
</style>