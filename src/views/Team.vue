<template>
    <div>
        <p><img v-lazy="teamImg" style="max-width: 1200px; width: 100%"/></p>
        <div class="pageCon">
            <el-tabs type="border-card">
                <el-tab-pane v-bind:label="$t('message.tw').toUpperCase()">
                    <el-row v-for="team in teams">
                        <el-col :span="6" style="text-align: center">
                            <img class="icon" v-lazy="team.icon"/>
                        </el-col>
                        <el-col :span="14" class="personInfo">
                            <dl class="marginTop">
                                <dd class="grey">{{$t('team.name')}}：</dd>
                                <dt>{{team.name}}</dt>
                            </dl>
                            <dl>
                                <dd class="grey">{{$t('team.telphone')}}：</dd>
                                <dt>{{team.telphone}}</dt>
                            </dl>
                            <dl>
                                <dd class="grey">{{$t('team.qq')}}：</dd>
                                <dt>{{team.qq}}</dt>
                            </dl>
                            <dl>
                                <dd class="grey">{{$t('team.email')}}：</dd>
                                <dt style="font-style: italic">{{team.email}}</dt>
                            </dl>
                        </el-col>
                        <el-col :span="4">
                            <img class="qcode" v-lazy="team.qcode"/>
                        </el-col>
                        <div style="clear: both; height: 10px;"></div>
                        <hr/>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Team',
        data() {
            return {
                teamImg: '/static/images/team/team.jpg',
                teams: [
                    {
                        icon: '/static/images/team/P1.png',
                        name: '蔡宇程',
                        telphone: '1590575300',
                        qq: '2761172601',
                        email: '466284994@qq.com',
                        qcode: '/static/images/team/P1Q.png'
                    },
                    {
                        icon: '/static/images/team/P2.png',
                        name: '马荧荧',
                        telphone: '15058231737',
                        qq: '316998405',
                        email: '316998405@qq.com',
                        qcode: '/static/images/team/P2Q.png'
                    },
                    {
                        icon: '/static/images/team/P3.png',
                        name: '许益炳',
                        telphone: '13588507040',
                        qq: '1637988865',
                        email: '1637988865@qq.com',
                        qcode: '/static/images/team/P3Q.png'
                    },
                    {
                        icon: '/static/images/team/P4.png',
                        name: '朱雪娇',
                        telphone: '13357539619',
                        qq: '2665097504',
                        email: '2665097504@qq.com',
                        qcode: '/static/images/team/P4Q.png'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    @import "/static/css/pages.css";

    .pageCon {
        margin-top: 0px;
    }

    .icon {
        width: 50%;
        height: 50%;
        box-shadow: 0 15px 30px 0 rgba(0,0,0,0.1);
    }

    .el-row {
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .personInfo {
        text-align: left;
    }

    .personInfo dl {
        line-height: 50px;
        font-size: 20px;
    }

    dd,dt {
        display: inline-block;
    }

    dd {
        width: 250px;
        margin: 0;
    }

    .grey {
        font-size: 24px;
        color: #888787;
    }

    .marginTop {
        margin-top: 0;
    }

    .qcode {
        width: 100px;
        height: 100px;
        float: right;
    }
</style>