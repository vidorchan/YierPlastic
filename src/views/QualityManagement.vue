<template>
    <div>
        <el-button type="text" @click="openDesc">
            <img src="/static/images/zhijiantixi.png" style="width:100%"/>
        </el-button>
        <p v-for="i in imgs">
            <img v-lazy="i" />
        </p>
    </div>
</template>

<script>
    export default {
        name: 'QuanlityManagement',
        data() {
            return {
                imgs: [
                    "/static/images/device/zhijianjiqi1.jpg",
                    "/static/images/device/zhijianjiqi2.jpg"
                ]
            }
        },
        methods: {
            openDesc() {
                this.$alert('<div class="el-icon-caret-right" style="line-height: 2em;">' + this.$t('qm.ac') + '</div>'
                    + '<div class="el-icon-caret-right" style="line-height: 2em;">' +  this.$t('qm.fc') + '</div>', this.$t('qm.qc'), {
                    dangerouslyUseHTMLString: true
                });
            }
        }
    }
</script>

<style scoped>
    @import "/static/css/pages.css";

    P {
        margin-bottom: 20px;
    }

    p img{
        width: 80%;
        border: 5px solid #ddd;
        padding: 5px;
        background: #fff;
        border-radius: 10px;
    }

    .lineHeight {
        line-height: 2em;
    }
</style>