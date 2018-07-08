<template>
    <div id="app">
        <el-container>
            <Nav></Nav>
            <el-main>
                <el-carousel height="700px">
                    <el-carousel-item v-for="item in homePics">
                         <img v-bind:src="item.src"/>
                    </el-carousel-item>
                </el-carousel>
                <el-row class="margin150">
                    <p><a href="about.html">{{ $t('message.aboutus')}}<span></span></a></p>
                    <div class="homeAbout">
                        {{ $t('message.homeAboutDesc')}}
                    </div>
                    <div style="margin-top: 20px">
                        <el-button type="warning" round>{{ $t('message.checkmore')}}</el-button>
                    </div>
                </el-row>
                <!--<el-row class="margin150">-->
                <div id="pro">
                    <div style="width:1200px;margin: 0 auto;clear: both;">
                    <div class="title"><a href="product.html">{{ $t('message.po')}}<span></span></a></div>
                    <div class="proContainer">
                        <div class="hd">
                            <a href="">{{ $t('message.ab')}}</a>
                            <a href="">{{ $t('message.pet')}}</a>
                            <a href="">{{ $t('message.cj')}}</a>
                            <a href="">{{ $t('message.tk')}}</a>
                            <a href="">{{ $t('message.mc')}}</a>
                        </div>
                        <div class="bd">
                            <div class="tempWrap" style="overflow:hidden; position:relative; width:1250px">
                                <div class="tamp" style="width: 8750px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: -30px;">
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c1 in C1List">
                                            <a href="" title="LW-17"><img v-bind:src="c1.src" /></a>
                                        </li>
                                    </ul>
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c2 in C2List">
                                            <a href="" title="LW-17"><img v-bind:src="c2.src" /></a>
                                        </li>
                                    </ul>
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c3 in C3List">
                                            <a href="" title="LW-17"><img v-bind:src="c3.src" /></a>
                                        </li>
                                    </ul>
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c4 in C4List">
                                            <a href="" title="LW-17"><img v-bind:src="c4.src" /></a>
                                        </li>
                                    </ul>
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c5 in C5List">
                                            <a href="" title="LW-17"><img v-bind:src="c5.src" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <el-row class="homeQuality">
                    <div style="height: 140px; position: relative; padding-top: 42px;width: 1200px;margin: 0 auto;">
                        <div class="qualityDes">
                            <p>{{ $t('message.homeQmDesc')}}</p>
                        </div>
                        <img src="/static/images/quality-img.png"/>
                        <el-button round class="qualityBut">{{ $t('message.qm')}}</el-button>
                    </div>
                </el-row>
                <el-row style="margin-top: 42px;" class="homeNews">
                    <p><a href="news.html">{{ $t('message.news')}}<span></span></a></p>
                    <div style="width: 1200px; margin: 0 auto; margin-top: 42px;">
                        <el-col :span="12">
                            <a href="news.html">
                                <img src="/static/images/news-img.jpg"/>
                            </a>
                        </el-col>
                        <el-col :span="12">
                            <ul>
                                <li v-for="newIndex in homeNews">
                                    <a href="">
                                        <div class="date">
                                            <span class="monthD">{{ newIndex.date.month }} / {{ newIndex.date.day }}</span>
                                            <span class="year">{{ newIndex.date.year }}</span>
                                        </div>
                                        <div class="newsDesc">
                                            <span>{{ newIndex.title }}</span>
                                            <div class="newsContent">{{ newIndex.content }}</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </el-col>
                    </div>
                </el-row>
            </el-main>
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
                homeTabActive: 'first',
                homePics: [
                    {src: '/static/images/home-carousel-1.png' },
                    {src: '/static/images/home-carousel-2.png' },
                    {src: '/static/images/home-carousel-3.png' },
                ],
                // ProductTitle: [
                //     {title: 'Airless Bottle'},
                //     {title: 'PET Bottle'},
                //     {title: 'Cream Jar'},
                //     {title: 'Travel Kit'},
                //     {title: 'More Categories'}
                // ],
                C1List: [
                    {src: '/static/images/product/1/1-1.jpg'},
                    {src: '/static/images/product/1/1-2.jpg'},
                    {src: '/static/images/product/1/1-3.jpg'},
                    {src: '/static/images/product/1/1-4.jpg'},
                    {src: '/static/images/product/1/1-5.jpg'},
                    {src: '/static/images/product/1/1-6.jpg'},
                    {src: '/static/images/product/1/1-7.jpg'},
                    {src: '/static/images/product/1/1-8.jpg'}
                ],
                C2List: [],
                C3List: [],
                C4List: [],
                C5List: [],
                homeNews: [
                    {title: this.$t('message.homeN1T'), content: this.$t('message.homeN1D'), date: {year: '2018', month: '03', day: '23'}},
                    {title: this.$t('message.homeN2T'), content: this.$t('message.homeN2D'), date: {year: '2019', month: '12', day: '03'}},
                    {title: this.$t('message.homeN3T'), content: this.$t('message.homeN3D'), date: {year: '2017', month: '09', day: '06'}}
                ]
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

    .el-row p a span {
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
        height: 443px;
        overflow: hidden;
    }
    
    .proContainer .bd li {
        width: 264px;
        height: 200px;
        float: left;
        margin: 0 48px 43px 0;
        overflow: hidden;
    }

    .proContainer .bd li a {
        width: 262px;
        height: 198px;
        border: 1px solid #c5c6c7;
        position: relative;
        overflow: hidden;
        display: block;
    }

    .proContainer .bd li a img {
        width: 262px;
        height: 198px;
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
        background-color: #b3c0d124;
        color: #000;
        text-align: center;
        font-size: 12px;
        margin-top: 20px;
    }

    .el-footer p {
        line-height: 25px;
    }
</style>