<template>
    <el-header style="height: 100px">
        <div class="headerContainer">
            <div style="float: right">
                <div style="text-align: right; margin-top: 5px;">
                    <span class="el-icon-phone">+86 0575-82972298</span>
                    <span class="lang-tab">
                        <a class="tab-en"></a>
                        <a class="tab-cn"></a>
                    </span>
                </div>
                <el-menu :default-active="activeIndex" style="border: none" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">Home</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">About Us</template>
                        <el-menu-item index="2-1">Company Overview</el-menu-item>
                        <el-menu-item index="2-2">Company Devices</el-menu-item>
                        <el-menu-item index="2-3">Certificate</el-menu-item>
                        <el-menu-item index="2-4">Certificate</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">new arrival</template>
                        <el-menu-item index="3-1">acrylic cosmetic jar</el-menu-item>
                        <el-menu-item index="3-2">acrylic cosmetic bottle</el-menu-item>
                        <el-menu-item index="3-3">Airless bottle</el-menu-item>
                        <el-menu-item index="3-4">airless pump jar</el-menu-item>
                        <el-menu-item index="3-5">PP airless bottle</el-menu-item>
                        <el-menu-item index="3-6">See all categories</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4">Quality Management</el-menu-item>
                    <el-menu-item index="5">News</el-menu-item>
                    <el-menu-item index="6">Contact Us</el-menu-item>
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
           }
       }
   }

</script>