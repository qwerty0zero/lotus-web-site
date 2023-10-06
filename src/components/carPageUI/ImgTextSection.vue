<template>
    <section>
        <div class="textHolder">
            <h5>{{ jsonFile.title }}</h5>
            <p class="text">{{ jsonFile.text }}</p>
            <p class="subText">{{ jsonFile.subText }}</p>
        </div>
        <div class="ulHolder">
            <ul id="ul">
                <li v-for="el in jsonFile.ul">
                <p v-if="el.data>10" class="data"> {{ Math.floor(el.data) }}</p>
                <p v-if="el.data<10" class="data"> {{ el.data }}</p> 

                <p>{{ el.title }}</p>
            </li>
        </ul>    
        <p>*WLTP maximum range. Using 20-inch wheel, available as a no-cost option in the UK</p>        
        </div>
        <ImageParalax
        Style='backGround'
        :url="require('@/assets/img/cars/' + this.$route.params.name + '/imgTextSection/' + '1.jpg')"
        ></ImageParalax>
    </section>
</template>
<script>

import ImageParalax from '../ImageParalax.vue'
import gsap from 'gsap'



export default{
    data(){
        return{
            isRun: false,
            jsonFile: this.json
        }
    },
    props: ["json", "index"],
    components: {ImageParalax},
    mounted(){
        let ul = document.getElementById("ul") 
        let numbers = document.querySelectorAll("#ul>li>.data")

        window.addEventListener("scroll", ()=> {
            if(!this.isRun){
            if(ul.getBoundingClientRect().top < window.innerHeight * 5 / 6){

                for (let i = 0; i <= 1; i++) {
                    gsap.from(numbers[i], {
                innerText: 0,
                  duration: 1,
                  snap: { innerText: 1 },
                  stagger: 0,
                });
                }
                gsap.from(numbers[2], {
                innerText: 0,
                  duration: 1,
                  snap: { innerText: 0.01 },
                  stagger: 0,
                });

                this.isRun = true
            }
        }

        })
    }, 
    
}
</script>

<style scoped>
section{
    padding: 4rem;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
section::after{
    position: absolute;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
    left: 0;top: 0;
    width: 100%;height: 100%;
    content: "";
}
.textHolder, .ulHolder{
    position: relative;
    z-index: 3;
}
.textHolder, .ulHolder>ul{
    display: flex;
    gap: 2rem;

}
.textHolder{
    flex-direction: column;
}
h5{
    color: #fff41a;
    font-size: 8rem;
    font-weight: 300;
}
p{
    font-size: 1.6rem;
    color: white;
}
.subText{
    max-width: 350px;
    font-size: 1.2rem;
}

.ulHolder{
    margin-top: 5rem;
}
ul{
    justify-content: space-evenly;
}
li{
color: white;
display: flex;
align-items: flex-end;
}
.data{
    font-size: 8rem;
}
li>p{
    font-size: 1rem;
}
.ulHolder>p{
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
    color: #9fa5aa;
}
img{
    object-fit: cover;
}
@media screen and (max-width:1020px){
    section{
        justify-content: flex-end;
    }
    .ulHolder{
        margin-top: 8rem;
    }
    .subText{
        max-width: 600px;
    }
    .data{
    font-size: 6rem;
}
}

@media screen and (max-width:780px){
    #ul{
        flex-direction: column;
    }
    .ulHolder>p{
        max-width: 70%;
        margin: 0 auto;
        margin-top: 3rem;
    }
    .textHolder {
        margin-bottom: 1rem;
    }
    .data{
        font-size: 8rem;
    }
}
@media screen and (max-width:550px){

    section{
        padding: 2rem;
    }
    h5{
        font-size: 25vw;
    }
    .subText{
        font-size: 0.9rem;
    }
    .data{
        font-size: 6rem;
    }
    .ulHolder{
        margin-top: 1rem;
    }
}
</style>