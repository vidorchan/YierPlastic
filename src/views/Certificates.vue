<template>
    <div>
        <p><img src="/static/images/company.jpg" style="width:100%"/></p>
        <div id="certificates" class="pageCon">
            <el-tabs type="border-card">
                <el-tab-pane v-bind:label="$t('message.certificates').toUpperCase()">
                    <p v-for="cert in certificates">
                        <img v-bind:src="cert" style="width: 100%"/>
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
                    '/static/images/certificates/cer2.jpg',
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
</style>