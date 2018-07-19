<template>
    <div id="app">
        <el-container>
            <Nav></Nav>
            <router-view></router-view>
            <el-footer>
                <Foot></Foot>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import Nav from "./components/Nav";
    import Foot from "./components/Foot";

    export default {
        components: {
            ElContainer,
            Nav,
            Foot},
        methods: {
            switchLang() {
                this.$i18n.locale === 'en' ? this.$i18n.locale = 'cn' : this.$i18n.locale = 'en'
            }
        },
        data() {
            return {

            }
        }
    }

</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }

    body, div, ul, p {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: black;
        text-decoration: none;
    }

    .margin150 {
        margin-top: 42px;
        margin-left: 150px;
        margin-right: 150px;
    }

    .margin150 p {
        line-height: 0;
    }

    .el-header {
        background-color: #fff;
        color: #333;
        text-align: center;
        padding: 0;
    }

    .headerContainer {
        margin-left: 150px;
        margin-right: 150px;
    }

    .el-icon-phone {
        margin-right: 24px;
    }

    .lang-tab {
        margin: 6px 0 0 0;
    }

    .lang-tab a {
        display: inline-block;
        width: 25px;
        height: 24px;
        overflow: hidden;
        background: url(/static/images/top-tab.png) left bottom no-repeat;
        margin-left: 6px;
    }

    .el-main {
        background-color: #fff;
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        padding: 0px;
    }

    .lang-tab a.tab-cn {
        background-position: right bottom;
    }

    .el-row a{
        font-size: 20px;
        line-height: 24px;
    }

    .el-row p span {
        display: block;
        width: 20px;
        background: #e46713;
        height: 3px;
        margin: 10px auto 0;
    }

    .homeAbout {
        font-size: 12px;
        margin: 20px;
    }

    /* home page product */
    #pro {
        width: 100%;
        margin-top: 42px;
    }

    #pro .title {
        width: 100%;
        text-align: center;
        clear: both;
    }

    #pro .title a {
        font-size: 20px;
        line-height: 24px;
    }

    #pro .title a span {
        display: block;
        width: 20px;
        background: #e46713;
        height: 3px;
        margin: 10px auto 0;
    }

    .proContainer {
        margin-top: 40px;
        position: relative;
    }

    .proContainer .hd {
        width: 100%;
        height: 28px;
        text-align: center;
        margin-bottom: 40px;
    }
    .proContainer .hd a {
        display: inline-block;
        padding: 0 26px;
        line-height: 28px;
        font-size: 14px;
        border-radius: 14px;
        margin-left: 24px;
    }

    .proContainer .hd a.on {
        background: #e46613;
        color: #fff;
    }

    .proContainer .hd a:first-child {
        margin-left: 0;
    }

    .proContainer .bd {
        width: 100%;
        /*height: 443px;*/
        overflow: hidden;
    }
    
    .proContainer .bd li {
        width: 264px;
        float: left;
        margin: 0 48px 43px 0;
        overflow: hidden;
    }

    .proContainer .bd li a {
        width: 262px;
        position: relative;
        overflow: hidden;
        display: block;
    }

    .proContainer .bd li a img {
        width: 262px;
    }

    /* home page quality */
    .homeQuality {
        background: url('/static/images/quality-bg.jpg') center no-repeat;
        margin-top: 96px;
        width: 100%;
        height: 192px;
    }

    .qualityDes {
        color: white;
        width: 50%;
        font-size: 16px;
        line-height: 42px;
        margin-left: 42px;
    }

    .homeQuality img {
        position: absolute;
        top: -48px;
        right: 42px;
    }

    .homeQuality .qualityBut {
        position: absolute;
        top: 80px;
        left: 700px;
        opacity: 0.8;
    }

    .homeNews li:first-child {
        margin-top: 18px;
    }

    .homeNews li {
        margin-top: 50px;
    }

    .homeNews li a {
        display: block;

    }

    .homeNews li a .date {
        height: 69px;
        width: 65px;
        border: 1px solid #9da0a2;
        text-align: center;
        float: left;
    }

    .homeNews li a:hover .date{
        border-color: #e46713;
    }

    .homeNews li a:hover .date .year {
        background: #e46713;
    }

    .homeNews li a .date .monthD {
        display: block;
        color: black;
        line-height: 41px;

    }

    .homeNews li a .date .year {
        display: block;
        background: #9da0a2;
        color: white;
        line-height: 30px;
    }

    .homeNews .newsDesc {
        float: right;
        width: 80%;
        text-align: left;
        font-size: 14px;
    }

    .homeNews .newsDesc span {
        overflow: hidden;
    }

    .homeNews ul {
        width: 80%;
        margin-left: 50px;
    }

    .homeNews li {
        clear: both;
        height: 71px;
    }

    .homeNews .newsContent {
        color: #434343;
        height: 44px;
        overflow: hidden;
    }

    .el-footer {
        background-color: #efefef;
        color: #000;
        text-align: center;
        font-size: 12px;
        margin-top: 20px;
        opacity: 0.5;
    }

    .el-footer p {
        line-height: 25px;
    }
</style>