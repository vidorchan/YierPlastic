<template>
    <el-main>
        <el-carousel height="700px">
            <el-carousel-item v-for="item in homePics">
                <img v-bind:src="item.src"/>
            </el-carousel-item>
        </el-carousel>
        <el-row class="margin150">
            <p>{{ $t('message.aboutus')}}<span></span></p>
            <div class="homeAbout">
                {{ $t('message.homeAboutDesc')}}
            </div>
            <div style="margin-top: 20px">
                <el-button type="warning" round>
                    <router-link :to="'/contact'">
                        {{ $t('message.cu')}}
                    </router-link>
                </el-button>
            </div>
        </el-row>
        <el-row>
            <div id="pro">
                <div style="width:1200px;margin: 0 auto;clear: both;">
                    <p>{{ $t('message.po')}}<span></span></p>
                    <div class="proContainer">
                        <div class="hd">
                            <router-link :to="'/products?cid=2'">
                                {{ $t('message.ab')}}
                            </router-link>
                            <router-link :to="'/products?cid=3'">
                                {{ $t('message.fl')}}
                            </router-link>
                            <router-link :to="'/products?cid=4'">
                                {{ $t('message.lb')}}
                            </router-link>
                            <router-link :to="'/products?cid=5'">
                                {{ $t('message.cj')}}
                            </router-link>
                        </div>
                        <div class="bd">
                            <div class="tempWrap" style="overflow:hidden; position:relative; width:1250px; display: inline-block">
                                <div class="tamp" style="width: 8750px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: -30px;">
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c1 in C1List">
                                            <router-link :to="'/proDetails?cid=2&pid=' + c1.pid">
                                                <img v-bind:src="c1.src" />
                                            </router-link>
                                        </li>
                                    </ul>
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c2 in C2List">
                                            <router-link :to="'/proDetails?cid=3&pid=' + c2.pid">
                                                <img v-bind:src="c2.src" />
                                            </router-link>
                                        </li>
                                    </ul>
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c3 in C3List">
                                            <router-link :to="'/proDetails?cid=4&pid=' + c3.pid">
                                                <img v-bind:src="c3.src" />
                                            </router-link>
                                        </li>
                                    </ul>
                                    <ul class="clone" style="float: left; width: 1250px;">
                                        <li v-for="c4 in C4List">
                                            <router-link :to="'/proDetails?cid=5&pid=' + c4.pid">
                                                <img v-bind:src="c4.src" />
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row class="homeQuality">
            <div style="height: 140px; position: relative; padding-top: 42px;width: 1200px;margin: 0 auto;">
                <div class="qualityDes">
                    <p>{{ $t('message.homeQmDesc')}}</p>
                </div>
                <img src="/static/images/quality-img.png"/>
                <el-button round class="qualityBut">
                    <router-link :to="'/contact'">
                        {{ $t('message.qm')}}
                    </router-link>
                </el-button>
            </div>
        </el-row>
        <el-row style="margin-top: 42px;" class="homeNews">
            <p>
                <router-link :to="'/news'">{{ $t('message.news')}}<span></span></router-link>
            </p>
            <div style="width: 1200px; margin: 0 auto; margin-top: 42px;">
                <el-col :span="12">
                    <router-link :to="'/news'">
                        <img src="/static/images/news-img.jpg"/>
                    </router-link>
                </el-col>
                <el-col :span="12">
                    <ul>
                        <li v-for="newIndex in homeNews">
                            <a href="javascript:void(0)">
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
                    {src: '/static/images/home-carousel-1.jpg' },
                    {src: '/static/images/home-carousel-2.jpg' },
                    {src: '/static/images/home-carousel-3.jpg' },
                ],
                C1List: [
                    {pid: 1, src: '/static/images/product/2airlessbottle/YE-A-07/42-1.jpg'},
                    {pid: 3, src: '/static/images/product/2airlessbottle/YE-A-09/4-3.jpg'},
                    {pid: 4, src: '/static/images/product/2airlessbottle/YE-A-10/7-1.jpg'},
                    {pid: 6, src: '/static/images/product/2airlessbottle/YE-A-12/6-1.jpg'}
                ],
                C2List: [
                    {pid: 1, src: '/static/images/product/3familylook/YE-A-01/21-5.jpg'},
                    {pid: 6, src: '/static/images/product/3familylook/YE-A-13/1-4.jpg'},
                    {pid: 8, src: '/static/images/product/3familylook/YE-A-15/29-5.jpg'},
                    {pid: 10, src: '/static/images/product/3familylook/YE-A-17/3-5.jpg'}
                ],
                C3List: [
                    {pid: 1, src: '/static/images/product/4lotionbottle/YE-A-01/21-3.jpg'},
                    {pid: 3, src: '/static/images/product/4lotionbottle/YE-A-03/31-3.jpg'},
                    {pid: 4, src: '/static/images/product/4lotionbottle/YE-A-13/1-2.jpg'},
                    {pid: 6, src: '/static/images/product/4lotionbottle/YE-A-15/29-3.jpg'}
                ],
                C4List: [
                    {pid: 1, src: '/static/images/product/5creamjar/YE-A-01/21-1.jpg'},
                    {pid: 3, src: '/static/images/product/5creamjar/YE-A-03/31-1.jpg'},
                    {pid: 10, src: '/static/images/product/5creamjar/YE-A-15/29-1.jpg'},
                    {pid: 12, src: '/static/images/product/5creamjar/YE-A-17/3-1.jpg'}
                ],
                homeNews: [
                    {title: 'message.homeN1T', content: 'message.homeN1D', date: {year: '2018', month: '09', day: '02'}},
                    {title: 'message.homeN2T', content: 'message.homeN2D', date: {year: '2018', month: '09', day: '20'}}
                ]
            }
        },
        mounted() {
            jQuery("#pro .proContainer").slide({titCell:".hd a",mainCell:".bd .tamp",effect:"leftLoop",autoPlay:true});
        }
    }
</script>

<style scoped>
    button a {
        color: #ffffff;
        line-height: 1;
        font-size: 14px;
    }

    .el-row p {
        line-height: 24px;
        font-size: 20px;
    }

    .qualityBut a {
        color: #606266;
    }

</style>