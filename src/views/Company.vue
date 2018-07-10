<template>
    <div>
        <p style="overflow: hidden"><img src="/static/images/company.jpg"/></p>
        <div id="company" class="pageCon">
            <el-tabs type="border-card">
                <el-tab-pane v-bind:label="$t('message.aboutus').toUpperCase()">
                    <p v-if="this.$i18n.locale == 'cn'">
                        绍兴上虞溢尔塑业有限公司是一家专业生产化妆品包装的企业。公司致力于产品设计开发，模具制造，注塑，喷涂，包装和检验于一体的工艺流程。主要产品包括亚克力乳液瓶，亚克力膏霜瓶，真空瓶等等。<br/>
                        <br/>
                        公司位于浙江省绍兴市上虞区丰惠工业园区，交通便利，临近宁波北仑港和上海港，连通杭甬高速公路，比邻杭州萧山国际机场和宁波栎社国际机场。<br/>
                        <br/>
                        公司拥有一支力量雄厚的技术团队，专业高效的生产队伍以及令行禁止的管理制度，这些都对确保产品质量，提供了强有力的保障。我们秉承着提供满意服务和优秀质量为理念，以注重细节为宗旨，以不断创新为动力，以客户满意为目标，集广泛之智慧，吸百家之所长为化妆品的包装带来锦上添花。<br/>
                        <br/>
                        我们旨在溢于细节，让你们卓尔不凡！<br/>
                    </p>
                    <p v-else>
                        Located in Zhejiang province, Shangyuu yier plastic company ltd. Is a professional producer and supplier of cosmetics packaging
                        as well as various plastics,including different kinds of plastic packaging .
                        Specifically,Shangyu yier plastic is committed to product design and development including :mold manufacturing,injecton,molding,painting ,packaging as well as testing,process research and development.
                        Shangyu yier’s main product line includes acrylic lotion bottle,jar ,airless jar and a wide variety of other plastic products.<br/>
                        <br/>
                        The company is conveniently located in shangyu fenghui industrial zone,shaoxing city ,zhejiang province.Access to public transportation makes the commute easy.<br/>
                        Our company is located close to the shanghai and Ningbo beilun port,as well as the Ningbo expressway,which is also close to both the Hangzhou Xiaoshan international airport and Ningbo international airport.<br/>
                        <br/>
                        Shangyu yier has a strong technical team,professional and efficient production team to ensure that products are delivered on time .Coupled with talented management system to ensure product quality ,as well as product protection.
                        Shangyu yier is committed to providing quality ,apersonalized customer service and products.In order to achieve and build on our standards of customer satisfaction,shangyu yier continuously invests in research and development to improve its product and service offering .
                        Customer satisfaction will always be one of the top goals of our company as well as motivation to continuously improve.Our knowledge ,experience ,and attention to detail will continue to bring quality products to the market .
                        We take the time to this so we can ensure that our customers have the highest quality plastics made to suit their needs .<br/>
                    </p>
                    <p><img src=""/>图片</p>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Company',
        data() {
            return {
            }
        }
    }
</script>

<style>
    .pageCon {
        width: 70%;
        margin: 20px auto;
    }
    
    .pageCon .el-tab-pane{
        font-size: 12px;
        text-align: left;
        line-height: 24px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>