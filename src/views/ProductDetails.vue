<template>
    <div id="proDetails">
        <p><img src="/static/images/company.jpg" style="width:100%"/></p>
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
                            <el-table :data="product.size" v-if="product.size" border>
                                <el-table-column label="Capacity(容量)" prop="capacity" header-align="center" align="center" class-name="test">
                                </el-table-column>
                                <el-table-column label="High(瓶身高-最高)/mm" prop="height" header-align="center" align="center">
                                </el-table-column>
                                <el-table-column label="Diameter(瓶身直径-最宽)/mm" prop="diameter" header-align="center" align="center">
                                </el-table-column>
                            </el-table>
                            <div style="clear: both; height: 20px;"></div>
                            <div>
                                <dl>
                                    <dt>{{$t('product.material')}}:</dt>
                                    <dd>{{$t('product.materialV')}}</dd>
                                </dl>
                                <!--<dl v-if="product.params.plasticType && product.params.plasticType != ''">-->
                                    <!--<dt>{{$t('product.plasticType')}}:</dt>-->
                                    <!--<dd v-text="$t(product.params.plasticType)"></dd>-->
                                <!--</dl>-->
                                <!--<dl v-if="product.params.industrialUse && product.params.industrialUse != ''">-->
                                    <!--<dt>{{$t('product.industrialUse')}}:</dt>-->
                                    <!--<dd v-text="$t(product.params.industrialUse)"></dd>-->
                                <!--</dl>-->
                                <!--<dl v-if="product.params.use && product.params.use != ''">-->
                                    <!--<dt>{{$t('product.use')}}:</dt>-->
                                    <!--<dd v-text="$t(product.params.use)"></dd>-->
                                <!--</dl>-->
                                <!--<dl v-if="product.params.sealingType && product.params.sealingType != ''">-->
                                    <!--<dt>{{$t('product.sealingType')}}:</dt>-->
                                    <!--<dd v-text="$t(product.params.sealingType)"></dd>-->
                                <!--</dl>-->
                                <!--<dl v-if="product.params.surfaceHandling && product.params.surfaceHandling != ''">-->
                                    <!--<dt>{{$t('product.surfaceHandling')}}:</dt>-->
                                    <!--<dd v-text="$t(product.params.surfaceHandling)"></dd>-->
                                <!--</dl>-->
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
                                    <dd v-text="product.params.modelN"></dd>
                                </dl>
                                <!--<dl v-if="product.params.color && product.params.color != ''">-->
                                    <!--<dt>{{$t('product.color')}}:</dt>-->
                                    <!--<dd v-text="$t(product.params.color)"></dd>-->
                                <!--</dl>-->
                            </div>
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
                product: {
                    params: {
                    }
                }
            }
        },
        methods: {
            fetchDate() {
                var c_id = this.$route.query.cid;
                var p_id = this.$route.query.pid;
                this.$http.get('/static/json/en/products.json').then((response) => {
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
            },
            specifyEn() {
                window.localStorage.lang  = this.$i18n.locale = 'en';
                console.log("new fun");
            },
            specifyCn() {
                window.localStorage.lang = this.$i18n.locale = 'cn';
                console.log("new ffff");
            }
        },
        watch: {
            "$route": "fetchDate",
            "window.localStorage.lang": "fetchData"
        },
        mounted() {
            this.fetchDate();
            goTop: {
                window.scrollTo(0,0);
            }
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

    .el-table tr, .el-table th {
        background: #dce8f5;
    }

    .el-table--border {
        border: 3px solid #f0f9eb;
        border-radius: 10px;
    }
</style>