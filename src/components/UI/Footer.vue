<template>

<footer>
    <div class="footerSection">
        <img src="@/assets/svg/logo.svg" alt="">
    </div>
    <div class="footerSection">
        <ul class="links">
            <li v-for="el in socialLinks">
                <router-link to="/">
                    <img :src="require(`@/assets/img/socialNetworks/` + el + '.svg')" alt="">
                </router-link>
            </li>
        </ul>
        <div>
            <ul v-for="element in siteMap" 
            class="title"
            >
                <li> <h4>{{ element.title }} </h4></li>
                <ul
                class="subTitle"
                >
                    <li v-for="el in element.subTitle">
                        <router-link to="/">      
                            {{ el }}  
                        </router-link>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
    <div class="footerSection">
        <ul class="terms">
            <li v-for="el in siteTerms">
            <router-link to="/"> {{el.title }}</router-link>
        </li>
        </ul>
    </div>
</footer>

</template>

<script>
export default{
    name: 'Footer',
    data(){
        return{
            socialLinks: ["facebook","instagram", "twitter", "youtube"],
            siteMap: [
                {
                    title: "MODELS",
                    subTitle: [
                        "Eletre",
                        "Emira",
                        "Evija"
                    ]
                },
                {
                    title: "BUY",
                    subTitle: [
                        "Car Locator",
                        "Parts & Accessories",
                        "Clothing & Merchandise"
                    ],
                    links: [
                        "Support",
                        "Media Centre",
                        "Careers"
                    ]
                },
                {
                    title: "SERVICES",
                    subTitle: [
                        "Support",
                        "Media Centre",
                        "Careers"
                    ]
                }   
            ],
            siteTerms: [
                {
                title: 'Terms & Conditions',
                link: ''
                },
                {
                title: 'Privacy Policy',
                link: ''
                },
                {
                title: 'Cookie Policy',
                link: ''
                },
                {
                title: 'Cookie Settings',
                link: ''
                },
                {
                title: 'Gender Gap Pay Statement',
                link: ''
                },
                {
                title: 'Anti-Slavery',
                link: ''
                },
            ]
        }
    }
}
</script>

<style scoped>
footer{
    background-color: black;
    padding: 0 4rem;
}
.footerSection{
    padding: 5rem 0;
}
.footerSection:nth-child(2){
    border-bottom: 3px solid #fdef00;
    border-top: 3px solid #fdef00;
    display: flex;
    justify-content: space-around

}
.footerSection>img{
    margin: 0 auto;
    display: block;
}

ul, .footerSection:nth-child(2)>div{
    display: flex;
    gap: 1rem;
}
.footerSection:nth-child(2)>div{
    gap: 5rem;
    margin-bottom: 7rem;
}
.title, .subTitle{
    flex-direction: column;
}
.title{
    gap: 2.5rem;
}
.links{
    align-items: end;
}
.terms{
    flex-direction: column;
}
a>img{
    padding: 0.5rem;
    border: 1px solid #fdef00 ;
    border-radius: 50%;
}
h4{
    color: #fdef00;
    font-size: 2rem;
}
p, a{
    color: white;
    font-size: 1.4rem;
}
</style>