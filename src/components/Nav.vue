<template>
    <el-header style="height: 100px">
        <div class="headerContainer">
            <div style="float: right">
                <div style="text-align: right; margin-top: 5px;">
                    <span class="el-icon-phone">+86 0575-82972298</span>
                    <span class="lang-tab">
                        <a href="javascript:void(0)" class="tab-en" @click="specifyEn"></a>
                        <a href="javascript:void(0)" class="tab-cn" @click="specifyCn"></a>
                    </span>
                </div>
                <el-menu :default-active="this.$router.path" style="border: none" mode="horizontal"
                         @select="handleSelect" active-text-color="#e46613" unique-opened router>
                    <el-menu-item index="/">{{ $t('message.home')}}</el-menu-item>
                    <el-submenu index="/com">
                        <template slot="title">{{ $t('message.aboutus')}}</template>
                        <el-menu-item index="/company">{{ $t('message.co')}}</el-menu-item>
                        <el-menu-item index="/device">{{ $t('message.cd')}}</el-menu-item>
                        <el-menu-item index="/certificates">{{ $t('message.certificates')}}</el-menu-item>
                        <el-menu-item index="/team">{{ $t('message.tw')}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="/pro">
                        <template slot="title">{{ $t('message.po')}}</template>
                        <el-menu-item index="/products?cid=0">{{ $t('message.na')}}</el-menu-item>
                        <el-menu-item index="/products?cid=1">{{ $t('message.is')}}</el-menu-item>
                        <el-menu-item index="/products?cid=2">{{ $t('message.ab')}}</el-menu-item>
                        <el-menu-item index="/products?cid=3">{{ $t('message.fl')}}</el-menu-item>
                        <el-menu-item index="/products?cid=4">{{ $t('message.lb')}}</el-menu-item>
                        <el-menu-item index="/products?cid=5">{{ $t('message.cj')}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/qm">{{ $t('message.qm')}}</el-menu-item>
                    <el-menu-item index="/news">{{ $t('message.news')}}</el-menu-item>
                    <el-menu-item index="/cu">{{ $t('message.cu')}}</el-menu-item>
                </el-menu>
            </div>
        </div>
        <!--<div class="header-container">-->
        <!--<el-button @click="switchLang">{{$t('message.hello')}}</el-button>-->
        <!--</div>-->
    </el-header>
</template>

<script>

    export default {
        name: 'Nav',
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            specifyEn() {
                window.localStorage.lang  = this.$i18n.locale = 'en';
            },
            specifyCn() {
                window.localStorage.lang = this.$i18n.locale = 'cn';
            }
        }
    }
</script>

<style>
    .el-menu li:not(.is-active):hover {
        color: red !important;
        /*font-weight: bold !important;*/
    }

    .el-menu .el-submenu__title:not(.is-active):hover {
        color: red !important;
    }
</style>