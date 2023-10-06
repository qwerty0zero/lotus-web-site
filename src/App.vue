<template>
<div class="app">
  <router-view/>
</div>
</template>

<script>

export default{

}

</script>

<style>
*, *::after, *::before{
  box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-family: Overpass Headlines Exlight,Source Han Sans CN Normal,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
	vertical-align: baseline;
  font-size: inherit;
}
a{
  text-decoration: none;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-size: 10px;
	overflow-x: hidden
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.buttonGroup{
    position: relative;
    display: flex;
    gap: 1rem;
}

.btn{
    font-size: 1.4rem;
    color: white;
    padding: 15px 20px;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    gap: 5px;
	text-transform: uppercase;
}
.btn::after{
	content: url("./assets/svg/arrow-right.svg");
	transition: 0.3s;
    transform: translateX(0);
}
.btn.yellow{
    color: black;
    background-color: #fdef00;
}
.btn.black.transparent{
	color: black;
}
.btn.black.transparent::after{
    filter: invert(0);
}
.btn:hover::after{
    transform: translateX(50%);
}
.transparent::after{
    filter: invert(1);
}
.DarkYellow{
	background-color: black;
	color: #fdef00;
}
.DarkYellow::after{
	filter: none;
}
.fade{
	transition: 0.5s;
	opacity: 0;
}
.fade.top{
	transform: translateY(-100%);
}
.fade.bottom{
	transform: translateY(100%);
}
.carTransition.fade.bottom{
	transform: translateY(-15%);
}
.activeTransition .carTransition.fade.bottom{
	transform: translateY(-30%);
}
.activeTransition .fade{
	opacity: 1;
	transform: translate(0);


}
</style>
