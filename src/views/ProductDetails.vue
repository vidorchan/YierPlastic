<template>
    <div id="proDetails">
        <div class="pageCon">
            <el-row>
                <!--<el-col :span="4">-->
                    <!--<LeftNav></LeftNav>-->
                <!--</el-col>-->
                <el-col :span="24">
                    <el-tabs type="card" v-model="activeName2">
                        <el-tab-pane :label="$t('product.details')" name="first">
                            <p v-for="proImage in product.imgs">
                                <img v-bind:src="proImage" />
                            </p>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('product.params')" name="second">
                            <dl>
                                <dt>{{$t('product.material')}}:</dt>
                                <dd>{{$t('product.materialV')}}</dd>
                            </dl>
                            <dl v-if="product.params.plasticType && product.params.plasticType != ''">
                                <dt>{{$t('product.plasticType')}}:</dt>
                                <dd>{{product.params.plasticType}}</dd>
                            </dl>
                            <dl v-if="product.params.industrialUse && product.params.industrialUse != ''">
                                <dt>{{$t('product.industrialUse')}}:</dt>
                                <dd>{{product.params.industrialUse}}</dd>
                            </dl>
                            <dl v-if="product.params.use && product.params.use != ''">
                                <dt>{{$t('product.use')}}:</dt>
                                <dd>{{product.params.use}}</dd>
                            </dl>
                            <dl v-if="product.params.sealingType && product.params.sealingType != ''">
                                <dt>{{$t('product.sealingType')}}:</dt>
                                <dd>{{product.params.sealingType}}</dd>
                            </dl>
                            <dl v-if="product.params.surfaceHandling && product.params.surfaceHandling != ''">
                                <dt>{{$t('product.surfaceHandling')}}:</dt>
                                <dd>{{product.params.surfaceHandling}}</dd>
                            </dl>
                            <dl>
                                <dt>{{$t('product.place')}}:</dt>
                                <dd>{{$t('product.placeV')}}</dd>
                            </dl>
                            <dl>
                                <dt>{{$t('product.brand')}}:</dt>
                                <dd>{{$t('product.brandV')}}</dd>
                            </dl>
                            <dl v-if="product.params.modelN && product.params.modelN != ''">
                                <dt>{{$t('product.modelN')}}:</dt>
                                <dd>{{product.params.modelN}}</dd>
                            </dl>
                            <dl v-if="product.params.color && product.params.color != ''">
                                <dt>{{$t('product.color')}}:</dt>
                                <dd>{{product.params.color}}</dd>
                            </dl>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

    import LeftNav from '~/components/LeftNav'

    export default {
        name: 'ProductDetails',
        components: {
            LeftNav
        },
        data() {
            return {
                activeName2: 'first',
                product: {},
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
                        this.c_name = productList.cname;
                    }

                    if (p_id != '') {
                        productList = productList.products.filter(function (e) { //返回指定的product
                            return e.pid == p_id;
                            })
                    }
                    this.product = productList[0];
                    console.log(this.product);
                }, (response) => {
                    // 请求失败回调
                    console.log("json data failure");
                });
            }
        },
        watch: {
            "$route": "fetchDate",
            "$i18n": "fetchData"
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

    .el-tab-pane p {
        text-align: center;
    }

    #pane-second {
        margin: 10px auto;
        width: 90%;
    }

    .el-tab-pane dl{
        float: left;
        width: 30%;
        margin-right: 10px;
    }

    .el-tab-pane dt, .el-tab-pane dd {
        display: inline-block;
        margin: 0;
    }

    .el-tab-pane dt {
        width: 100px;
        color: #666;
    }
</style>