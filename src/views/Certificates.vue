<template>
    <div>
        <p><img src="/static/images/company.jpg" style="width:100%"/></p>
        <div id="certificates" class="pageCon">
            <el-tabs type="border-card">
                <el-tab-pane v-bind:label="$t('message.certificates').toUpperCase()">
                    <p v-for="cert in certificates">
                        <img v-bind:src="cert"/>
                    </p>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Certificates',
        data() {
            return {
                certificates: [
                    '/static/images/certificates/cer1.jpg',
                    '/static/images/certificates/cer3.jpg',
                    '/static/images/certificates/cer4.jpg',
                    '/static/images/certificates/cer5.jpg',
                    '/static/images/certificates/cer6.jpg',
                    '/static/images/certificates/cer7.jpg',
                    '/static/images/certificates/cer8.jpg'
                ]
            }
        }
    }
</script>
<style scoped>
    @import "/static/css/pages.css";

    .pageCon {
        width: 90%;
    }

    .el-tab-pane P {
        display: inline;
    }

    .el-tab-pane p img {
        width: 650px;
        height: 1000px;
        margin-bottom: 15px;
        margin-left: 15px;
    }
    /*.el-tab-pane img {*/
        /*width: 80%;*/
        /*border: 10px solid #87743c;*/
        /*border-radius: 10px;*/
        /*!*border-image: -webkit-linear-gradient(#ddd, #420d19) 30 30;*!*/
    /*}*/
</style>