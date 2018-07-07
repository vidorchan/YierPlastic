<template>
    <div id="app">
        <el-container>
            <el-header>
                <div>
                    <el-button @click="switchLang">{{$t('message.hello')}}</el-button>
                </div>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>

    </div>
</template>

<script>
    export default {
        methods: {
            switchLang() {
                this.$i18n.locale === 'en' ? this.$i18n.locale = 'cn' : this.$i18n.locale = 'en'
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>