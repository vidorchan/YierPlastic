<template>
    <div id="app">
        <img src="/static/images/product/20b65585c7214-1acea4d9a5104182511.jpeg">
        <div>
            <el-button @click="switchLang">{{$t('message.hello')}}</el-button>
        </div>
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
</style>
