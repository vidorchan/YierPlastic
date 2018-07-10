<template>
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
                                    <span>{{ $t(newIndex.title) }}</span>
                                    <div class="newsContent">{{ $t(newIndex.content) }}</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </el-col>
            </div>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
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
                    {title: 'message.homeN1T', content: 'message.homeN1D', date: {year: '2018', month: '03', day: '23'}},
                    {title: 'message.homeN2T', content: 'message.homeN2D', date: {year: '2019', month: '12', day: '03'}},
                    {title: 'message.homeN3T', content: 'message.homeN3D', date: {year: '2017', month: '09', day: '06'}}
                ]
            }
        }
    }
</script>