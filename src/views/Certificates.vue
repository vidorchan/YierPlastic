<template>
    <div>
        <p style="overflow: hidden"><img src="/static/images/company.jpg"/></p>
        <div id="certificates" class="pageCon">
            <el-tabs type="border-card">
                <el-tab-pane v-bind:label="$t('message.certificates').toUpperCase()">

                    <p><img src=""/>图片</p>
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

            }
        }
    }
</script>