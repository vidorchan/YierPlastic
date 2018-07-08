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
                <el-menu :default-active="activeIndex" style="border: none" mode="horizontal" @select="handleSelect" active-text-color="#e46613">
                    <el-menu-item index="1">{{ $t('message.home')}}</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">{{ $t('message.aboutus')}}</template>
                        <el-menu-item index="2-1">{{ $t('message.co')}}</el-menu-item>
                        <el-menu-item index="2-2">{{ $t('message.cd')}}</el-menu-item>
                        <el-menu-item index="2-3">{{ $t('message.certificates')}}</el-menu-item>
                        <el-menu-item index="2-4">{{ $t('message.tw')}}</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">{{ $t('message.po')}}</template>
                        <el-menu-item index="3-1">{{ $t('message.na')}}</el-menu-item>
                        <el-menu-item index="3-2">{{ $t('message.acj')}}</el-menu-item>
                        <el-menu-item index="3-3">{{ $t('message.acb')}}</el-menu-item>
                        <el-menu-item index="3-4">{{ $t('message.ab')}}</el-menu-item>
                        <el-menu-item index="3-5">{{ $t('message.fsb')}}</el-menu-item>
                        <el-menu-item index="3-6">{{ $t('message.apj')}}</el-menu-item>
                        <el-menu-item index="3-7">{{ $t('message.pab')}}</el-menu-item>
                        <el-menu-item index="3-8">{{ $t('message.allcategories')}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4">{{ $t('message.qm')}}</el-menu-item>
                    <el-menu-item index="5">{{ $t('message.news')}}</el-menu-item>
                    <el-menu-item index="6">{{ $t('message.cu')}}</el-menu-item>
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
               this.$i18n.locale = 'en'
           },
           specifyCn() {
               this.$i18n.locale = 'cn'
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