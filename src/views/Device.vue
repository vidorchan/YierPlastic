<template>
    <div>
        <p style="overflow: hidden"><img src="/static/images/company.jpg"/></p>
        <div id="devices" class="pageCon">
            <el-tabs type="border-card">
                <el-tab-pane v-bind:label="$t('message.cd').toUpperCase()">
                    <p v-for="device in devices">
                        <img v-bind:src="device" style="width: 100%"/>
                    </p>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Device',
        data() {
            return {
                devices: [
                '/static/images/device/baozhuangchejian.jpg',
                '/static/images/device/mojuchejian.jpg',
                '/static/images/device/pentuchejian.jpg',
                '/static/images/device/yajichejian1.jpg',
                '/static/images/device/yajichejian2.jpg',
                '/static/images/device/yajichejian3.jpg',
                '/static/images/device/yinshuanchejian1.jpg',
                '/static/images/device/yinshuanchejian2.jpg',
                '/static/images/device/zhijianjiqi1.jpg',
                '/static/images/device/zhijianjiqi2.jpg'
            ]
        }
        }
    }
</script>

<style scoped>
    @import "/static/css/pages.css";
</style>