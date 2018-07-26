<template>
    <el-row>
        <el-col :span="3"><img src="/static/images/companyQ.jpg"/></el-col>
        <el-col :span="21">
            <el-collapse :data="cultureList">
                <div v-for="(culture,index) in cultureList">
                    <el-collapse-item :title="culture.ctitle"  :name="index" >
                        <pre v-if="culture.firstLine && culture.firstLine != ''">{{ culture.firstLine}}</pre>
                        <div v-if="culture.pics && culture.pics != ''">
                            <div v-for="(pi, index) in culture.pics">
                                <pre v-if="pi.beforeLine && pi.beforeLine != ''">{{pi.beforeLine}}</pre>
                                <div v-if="pi.pic && pi.pic != ''">
                                    <img v-lazy="pi.pic"/>
                                </div>
                                <pre v-if="pi.afterLine && pi.afterLine != ''">{{pi.afterLine}}</pre>
                            </div>
                        </div>
                        <pre v-if="culture.lastLine && culture.lastLine != ''">{{ culture.lastLine}}</pre>
                    </el-collapse-item>
                </div>
            </el-collapse>
        </el-col>
    </el-row>
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
                cultureList: []
            }
        },
        methods: {
            fetchDate() {
                this.$http.get('/static/json/' + this.$i18n.locale + '/culture.json').then((response) => {
                    // 请求成功回调
                    this.cultureList = response.data.sort(down);
                }, (response) => {
                    // 请求失败回调
                    console.log("json data failure");
                });
            }
        },
        mounted() {
            var _self = this;
            this.fetchDate();
            EventBus.$on('localeChange',function(){
                _self.fetchDate();
            })
        }
    }
</script>

<style scoped>

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

    .el-collapse-item__header {
        background: #909399 !important;
    }

    .el-collapse-item__header .is-active {
        color: red !important;
    }

    .el-collapse-item__content img{
        width: 70%;
    }
</style>