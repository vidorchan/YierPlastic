<template>
    <div>
        <el-row>
            <el-col :span="3"><img src="/static/images/companyQ.jpg"/></el-col>
            <el-col :span="21">
                <el-collapse :data="cultureList">
                    <div v-for="(culture,index) in cultureList" class="itemBorder">
                        <el-collapse-item :title="culture.ctitle"  :name="index">
                            <pre v-if="culture.firstLine && culture.firstLine != ''">{{ culture.firstLine}}</pre>
                            <div v-if="culture.pics && culture.pics != ''">
                                <div v-for="(pi, index) in culture.pics">
                                    <pre v-if="pi.beforeLine && pi.beforeLine != ''">{{pi.beforeLine}}</pre>
                                    <div v-if="pi.pic && pi.pic != ''">
                                        <img v-lazy="pi.pic" :key="pi.pic"/>
                                    </div>
                                    <pre v-if="pi.afterLine && pi.afterLine != ''">{{pi.afterLine}}</pre>
                                </div>
                            </div>
                            <pre v-if="culture.lastLine && culture.lastLine != ''" class="last">{{ culture.lastLine}}</pre>
                        </el-collapse-item>
                    </div>
                </el-collapse>
            </el-col>
        </el-row>
        <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                　　　　　　layout="total, prev, pager, next"
                　　　　　　:total="totalDataNumber">
            　　　　</el-pagination>
    </div>
</template>

<script>
    import { EventBus } from '~/event-bus.js';
    //降序排列
    function down(x,y){
        return y.cid-x.cid;
    }
    export default {
        data() {
            return {
                cultureList: [],
                currentPage: 1,
                totalDataNumber: 0,
                pageSize: 12,
                totalCulture: []
            }
        },
        methods: {

            handleCurrentChange(currentPage) {
                console.log(`当前页: ${currentPage}`);
                this.fetchPageData(currentPage);
            },
            fetchTotal() {
                this.$http.get('/static/json/' + this.$i18n.locale + '/culture.json').then((response) => {
                    this.totalCulture = response.data.sort(down);
                    this.totalDataNumber = this.totalCulture.length;
                }, (response) => {
                    // 请求失败回调
                    console.log("json data failure");
                });
            },
            fetchPageData(currentPage) {
                this.cultureList = this.totalCulture.slice((currentPage-1)*this.pageSize,currentPage*this.pageSize);
            }
        },
        mounted() {
            var _self = this;
            this.fetchTotal();
            EventBus.$on('localeChange',function(){
                _self.fetchTotal();
            })
        },
        watch: {
            totalCulture: function () {
                this.fetchPageData(this.currentPage);
            }
        }
    }
</script>

<style scoped>

    pre {
        white-space: pre-wrap;
        /*font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;*/
    }

    .el-row {
        width: 80%;
        margin: 0 auto;
    }

    .el-col-3 img{
        width: 100%;
    }

    .el-collapse {
        margin-left: 100px;
        text-align: left;
    }

    .itemBorder {
        border-bottom: 1px solid;
    }

    .itemBorder:last-child {
        border-bottom: none;
    }

    .el-collapse-item__content img{
        width: 70%;
    }

    .el-collapse-item.is-active el-collapse-item__header {
        font-size: 16px;
        color: blue;
    }

    .el-collapse-item__header:hover {
        color: red !important;
    }

    .el-collapse-item__header.is-active{
        color: red !important;
        font-weight: bold !important;
        background: #e6e6e6 !important;
        font-size: 16px !important;
    }

    .last {
        margin-bottom: 0px;
    }

    .el-pagination {
        margin-top: 20px;
    }
</style>