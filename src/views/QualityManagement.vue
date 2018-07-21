<template>
    <div>
        <!--<p><img src="/static/images/company.jpg" style="width:100%"/></p>-->
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
        }
    }
</script>

<style scoped>
    @import "/static/css/pages.css";

    P {
        margin-bottom: 20px;
    }

    img{
        width: 80%;
        border: 5px solid #ddd;
        padding: 5px;
        background: #fff;
        border-radius: 10px;
    }
</style>