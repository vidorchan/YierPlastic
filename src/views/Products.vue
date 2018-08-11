<template>
    <div id="proReview">
        <p><img src="/static/images/company.jpg" style="width:100%"/></p>
        <div class="pageCon">
            <LeftNav></LeftNav>
            <div class="proList">
                <!--<el-tag>{{c_name}}</el-tag>-->
                <div class="holder"></div>
                <ul id="itemContainer">
                    <li v-for="pro in productList">
                        <router-link :to="'/proDetails?cid=' + cid + '&pid=' + pro.pid">
                            <img v-lazy="pro.imgs[0]" :key="pro.imgs[0]"/>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <img v-lazy="totalProducts" style="width:100%"/>
    </div>
</template>

<script>

    import LeftNav from '~/components/LeftNav'

    export default {
        name: 'Products',
        components: {
            LeftNav
        },
        data() {
            return {
                productList: [],
                c_name: '',
                currentPage1: 1,
                cid: this.$route.query.cid,
                totalProducts: "/static/images/product/total-products.jpg"
            }
        },
        computed: {
            total: function () {
                if (this.productList.length > 6) {
                    return this.productList.length;
                }
                return 6;
            }
        },
        methods: {
            fetchDate() {
                var c_id = this.$route.query.cid;
                var p_id = this.$route.query.pid;
                this.$http.get('/static/json/' + this.$i18n.locale + '/products.json').then((response) => {
                    // 请求成功回调
                    var productList;
                    if (c_id != '') {
                        productList = response.data.filter(function (e) { //返回指定类别的product
                            return e.cid == c_id;
                        })[0];
                        if (productList !== undefined) {
                            this.c_name = productList.cname || '';
                            this.productList = productList.products;
                        } else {
                            this.productList = [];
                        }
                        this.cid = c_id;
                    }
                }, (response) => {
                    // 请求失败回调
                    console.log("json data failure");
                });
            }
        },
        watch: {
            "$route": "fetchDate",
        },
        mounted() {
            this.fetchDate();
        }
    }
</script>

<style scoped>
    @import "/static/css/pages.css";

    .pageCon {
        width: 80%;
    }

    #proReview {
        /* margin-bottom: 30px; **/
    }

    #proReview .pageCon .el-menu{
        width: 20%;
        display: inline-block;
        float: left;
        background: #efefef;
    }

    #proReview .pageCon .proList {
        float: right;
        width: 79%;

    }

    #proReview .pageCon .el-tag {
        color: white;
        background: #e46713;
        border: none;
        border-radius: 5px;
    }

    #itemContainer li {
        float: left;
        display: inline-block;
        margin-left: 40px;
        margin-top: 20px;
        transition: box-shadow 0.2s linear;
    }

    #itemContainer li:hover {
            box-shadow: 0 15px 30px 0 rgba(0,0,0,0.1);
    }

    #itemContainer li img {
        width: 200px;
        height: 200px;
    }
</style>