<template>
    <aside :class="{active : animation}">
    <nav>
        <ul class="cars">
            <li v-for="el in carsLink">
                <a :href="`/car/` + el" > {{ el }}</a>
            </li>
        </ul>
        <ul>
            <li v-for="el in pagesLink">
                <router-link :to="`/` + el"  v-if="!el.includes('lotus centres') "> {{ el }}</router-link>
                <router-link :to="`/lotus-centres`"  v-if="el.includes('lotus centres') "> {{ el }}</router-link>

            </li>
        </ul>
    </nav>
    </aside>
</template>
    
    <script>
    export default{    
        data(){
            return{
                carsLink: ["eletre", "emira", "evija"],
                pagesLink: ["discover", "buy", "experience", "owners", "company", "lotus centres"]
            }
        }, 
        props: ["animation"]
    }
    </script>
    
    <style scoped>
    aside{
        position: absolute;
        display: flex;
        align-items: top;
        height: 100vh;
        background-color: #fdef00;
        right: 0;top: 0;
        z-index: 7;
        transition: 0.3s;
        width: 0;
    }
    aside.active{
        width: calc(41.66667vw + 3.33333px);
    }
    nav{
        padding: 150px 0 0 50px;
    }
    ul.cars a{
        font-size: 2.8rem;
        letter-spacing: 8px;
        text-transform: uppercase;
    }
    ul{
        font-size: 1.6rem;
    }
    ul a{
        padding: 10px 0;
        text-transform: capitalize;
    }
    ul li{
        margin: 10px 0;
    }
    ul.cars>li{
        margin-bottom: 11px;
    }
    ul.cars>li:last-child{
        margin-bottom: 44px;
    }
    a{
        color: black;
    }
    </style>