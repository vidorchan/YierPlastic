<template>
    <div>
        <p><img src="/static/images/company.jpg" style="width:100%"/></p>
        <div id="devices" class="pageCon">
            <el-tabs type="border-card">
                <el-tab-pane v-bind:label="$t('message.cd').toUpperCase()">
                    <p v-for="device in devices">
                        <img v-lazy="device"/>
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
                '/static/images/device/yajichejian3.jpg',
                '/static/images/device/yajichejian2.jpg',
                '/static/images/device/mojuchejian.jpg',
                '/static/images/device/tangyin1.jpg',
                '/static/images/device/tangyin2.jpg',
                '/static/images/device/tangyin3.jpg',
                '/static/images/device/pentuchejian.jpg',
                '/static/images/device/yajichejian1.jpg',
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

    .el-tab-pane p img {
        width: 100%;
        border-radius: 20px;
        border: solid;
        margin-bottom: 20px;
    }

</style>