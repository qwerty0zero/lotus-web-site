<template>
    <div>
        <section :class="{active : animation}" class="faqContact">
        <aside>
            <h3>FAQ</h3>
            <div class="faqInfo">
                <ul class="faqTitleUl">
                <li v-for="el in faqData"> {{ el.faqTitle }}
            <ul class="midTitleUl">
                    <li @click="midTitleClick($event, el.faqTitle)" v-for="subEl in  el.subTitle"> {{ subEl.midTitle }}</li>
            </ul>
                
            </li>
            </ul>
            </div>

        </aside>
        <aside class="contacChat">

            <div>
                <h3>CONTACT</h3>
                <div class="contacts">
                <a href="tel:+44 (0) 3300 948 047">+44 (0) 3300 948 047</a>
                <a href="mailto:customercare@lotuscars.com">customercare@lotuscars.com</a>
                <p>09.00 – 17:00 Monday to Friday</p>
                </div>

            </div>
            <hr>
            <div>
                <h3>CHAT</h3>
                <form action="">
                    <div>
                        <label for="">NAME</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="">EMAIL</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="">QUASTION</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button>START CHAT</button>
                </form>
            </div>

        </aside>
    <FAQ
    :arr="currentArr"
    :faqTitle="currentFaqTitle"
    :clicked="midTitleClicked"
    v-if="midTitleClicked"
    @close="midTitleClicked = false"
    ></FAQ>

        </section>
        
    </div>


</template>
    
    <script>

    import faqData from "@/assets/json/faq.json"
    import FAQ from "@/components/FAQ.vue";

    export default{    
        data(){
            return{
                faqData: faqData,
                currentArr: [],
                currentFaqTitle: "",
                midTitleClicked: false
            }
        },
        props: ["animation"],
        components: {FAQ},
        methods: {
            midTitleClick(event, faqTitle) {
                let indexFaqTitle;
                for (let i = 0; i < this.faqData.length; i++) {
                    if(this.faqData[i].faqTitle === faqTitle)
                        indexFaqTitle = i 
                }

                let currentFaqArr = this.faqData[indexFaqTitle].subTitle
                let indexMidTitle;

                for (let i = 0; i < currentFaqArr.length; i++) {
                    if(currentFaqArr[i].midTitle === event.target.textContent)
                        indexMidTitle = i
                }

                this.currentArr = currentFaqArr[indexMidTitle]
                this.currentFaqTitle = this.faqData[indexFaqTitle].faqTitle
                this.midTitleClicked = true;
                console.log(this.currentArr.midTitle)
            }
        }

    }
    </script>
    
    <style scoped>
   .faqContact{
        position: absolute;
        display: flex;
        height: 100vh;
        left: 0;top: 0;
        z-index: 7;
        transition: 0.3s;
        width: 0;
        overflow: hidden;
    }
    
    .faqContact.active{
        width: 100vw;
    }
    aside{
        width: 50%;
        background-color: #fdef00;
        padding: 4em;
        padding-top: 6em;
    }
    .contacChat{
        background-color: white;
    }
    h3{
        font-size: 6.6em;
        font-weight: 400;
    }
p,a, label{
    font-size: 1.6em;
    color: black;
}

hr{
    width: 100%;height: 1px;
    background-color: black;
    margin: 6.4em 0;
}
    .contacChat>div, .contacts, form{
        display: flex;
        flex-direction: column;
        gap: 5em;
    }
    .contacts{
        gap:1em;
    }

    form{
        gap: 1em;
    }

    input, textarea, button{
        width: 100%;
        border-radius: 0;
        border: 1px solid black;
        background-color: white;
        padding: 1em ;
        margin-top: 1em
    }


    ul>li{
        cursor: pointer;
    }

    .faqInfo{
        margin-top: 3rem;
    }
    .faqTitleUl{
        font-size: 2.5rem;
    }
    .faqTitleUl>li{
        margin-bottom: 2rem;
    }
    .midTitleUl{
        font-size: 1.6rem;
        margin-top: 1rem;
        margin-left: 2rem;
    }

    </style>