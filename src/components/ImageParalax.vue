<template>
<div class="holder" :class="Style">
    <img :src="url" alt="" @load="loaded" ref="img">
</div>
</template>

<script>

export default{
    data(){
        return{
            loaded: false,
            scale: 0,
            lastScrollTop: 0
        }
    },
    props: ["url", "Style"],
    methods:{
        loaded(){
            this.loaded = true
            console.log(this.loaded)
        },
        scroll(){
                let step = 3 / (window.innerHeight / 2)

                let st = window.pageYOffset || document.documentElement.scrollTop; 
                    if (st > this.lastScrollTop) {
                        if(this.scale <= 1.3)
                            this.scale+=step
                        this.$refs.img.style.scale=this.scale
                    } else if (st < this.lastScrollTop) {
                        if(this.scale > 1)
                            this.scale-=step
                        this.$refs.img.style.scale=this.scale

                    }
                this.lastScrollTop = st <= 0 ? 0 : st
            }
    },
    mounted(){
        this.scale=1
        window.addEventListener("scroll", this.scroll)
    }
}

</script>

<style scoped>
img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}.holder{
    overflow: hidden;
    height: 100%;
}
.backGround{
    position: absolute;
top: 0;left: 0;
width: 100%;height: 100%;    
}

</style>