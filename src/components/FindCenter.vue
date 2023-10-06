<template>
<div class="container">
    <div class="imgTetx">
        <h3>LOTUS <br>
        CENTRES</h3>
        <p>Experience our cars at your nearest Lotus Centre.</p>
    </div>
    <div>
        <aside class="input">
            <img src="@/assets/svg/locastion.svg" alt="" class="loaction">
            <input type="text"
        placeholder="Town / Postcode"
        >
        <img src="@/assets/svg/search.svg" alt="" class="search">

        </aside>

    </div>
</div>
</template>

<script>
</script>

<style scoped>
    .container{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        width: 100%;
        background-color: black;
        padding-left: 0;
    }
    .imgTetx{
        width: 60%;
        background-image: url("@/assets/img/bck/1.png");
        background-size: cover;
        min-height: 400px;
    }
    div{
        width: 40%;
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;
        padding-left: 6rem;
    }
    h3{
        font-size: 4rem;
        color: #fdef00;
    }
    p{
        color: white;
        font-size: 1.4rem;
        margin-top: 1rem;        
    }

    input{
        width: 350px;
        padding:  1rem 3rem;
        font-size: 1.4rem;
        background-color: transparent;
        border: 1px solid white;
    }
    .input{
        position: relative;
    }
    .input img{
        position: absolute;
        top: 50%;
        height: 32px; width: 32px;
        transform: translateY(-50%);
        left: 10px;
    }
    .input img:last-child{
        position: absolute;
        top: 50%;
        height: 32px; width: 32px;
        transform: translate(-100%, -50%);
        left: unset;
        right: 20px;
    }

</style>