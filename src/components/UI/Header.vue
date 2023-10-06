<template>
<header ref="header" :class="{active: showNavbar, activeTop: navIsTop}">
    <div class="contactButton" ref="contactButton" :class="{active : contactButtonClicked}" @click="contactButtonClick">
        <img src="@/assets/svg/message-icon.svg" alt="">
    </div>

    <img src="@/assets/svg/header-logo.svg" alt="" @load="onImgLoad">

    <div class="navButton" ref="navBuutton" :class="{active : navBuuttonClicked}" @click="navBuuttonClick">
        <div class="spanConteiner">
            <span></span><span></span><span></span>
        </div>
    </div>


    <NavigationWindow
    :animation="navBuuttonClicked"
    ></NavigationWindow>
    <ContactWindow
    :animation="contactButtonClicked"
    ></ContactWindow>

<div class="shadow"  :class="{active : navBuuttonClicked || contactButtonClicked}"></div>

</header>
</template>

<script>

import ContactWindow from '@/components/UI/Header/ContactWindow.vue';
import NavigationWindow from '@/components/UI/Header/NavigationWindow.vue';


export default{
    name: 'Header',
    components: {ContactWindow,NavigationWindow},
    data(){
        return{
            imgLoad:false,
            headerHeight: 0,
            contactButtonClicked: false,
            navBuuttonClicked: false,
            scrollWidth: 0,
            showNavbar: true,
            navIsTop: true,
            lastScrollPosition: 0
        }
    },
    methods: {
        onImgLoad (){
            this.imgLoad = true;
            this.headerHeight = this.$refs.header.clientHeight;
            this.$refs.contactButton.style.width = this.headerHeight + "px"
            this.$refs.navBuutton.style.width = this.headerHeight + "px"
        }, 
        navBuuttonClick(){
            this.navBuuttonClicked =! this.navBuuttonClicked
            this.contactButtonClicked = false;
            this.$refs.navBuutton.style.zIndex = 8
            this.$refs.contactButton.style.zIndex = 4

            this.modalWindowOpen(this.navBuuttonClicked)
        }, 
        contactButtonClick(){
            this.contactButtonClicked =! this.contactButtonClicked
            this.navBuuttonClicked = false;
            this.$refs.contactButton.style.zIndex = 8
            this.$refs.navBuutton.style.zIndex = 4

            this.modalWindowOpen(this.navBuuttonClicked)
        },
        modalWindowOpen(clicked, modalWindow){
            this.$refs.header.style.paddingLeft= this.scrollWidth + "px"
            if (clicked){
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            
        }, 
        onScroll () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

            if(currentScrollPosition === 0) 
                this.navIsTop = true 
                else
                this.navIsTop = false 

            if (currentScrollPosition < 0) 
              return
            

            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) 
                return
            

            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
  }
    },
    mounted(){
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';

        document.body.append(div);
        this.scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        window.addEventListener('scroll', this.onScroll)

    },
        beforeDestroy () {
          window.removeEventListener('scroll', this.onScroll)
        }
}
</script>

<style scoped>
header{
    z-index: 3;
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 1.5em 0;
    transition: 0.3s;
    transform: translateY(-100%);
}
header.active{
    transform: translateY(0);
}
header.activeTop{
    background-color: transparent;
}
header.activeTop>img{
    filter: grayscale(1)
}
header.activeTop .navButton{
    background-color: transparent;
}
header.activeTop .navButton span{
    background-color: white;
}
.contactButton, .navButton{
    position: absolute;
    top: 0;height: 100%;
    width: 40px;
    left: 0;
    padding: 0.5em;
    cursor: pointer;
    transition: 0.3s;
    z-index: 5;
}
.contactButton img{
    width: 100%;
}
.navButton{
    left: unset;
    right: 0;
    background-color: #fdef00;
}
.spanConteiner, .navButton{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.spanConteiner{
    gap: 3px;
    align-items: flex-start;
    position: relative;
}

.navButton span{
    width: 30px;height: 2px;
    background-color: black;
    transition: 0.3s;
}
.navButton span:nth-child(2){
    width: 20px;
}
.navButton span:nth-child(3){
    width: 10px;
}
.navButton.active span{
    width: 30px;
}

.navButton.active  span:nth-child(1), .navButton.active  span:nth-child(3){
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
}
.navButton.active  span:nth-child(2){
    width: 0;
}
.navButton.active  span:nth-child(3){
    transform: translate(-50%, 50%) rotate(-45deg);

}
header.top, header.top .navButton{
    background-color: transparent;
}
header.top img{
    filter: saturate(0);
}
.shadow{
    position: fixed;
    background-color: transparent;
    width: 100vw;
    height: 100vh;top: 0;left: -120%;
    transition: left 0s;
    transition: background-color 0.3s;

}

.shadow.active{
    background-color: rgba(0, 0, 0, 0.4);
    left: 0;
    z-index: 6;
}
</style>