<template>
    <div class="amap-page-container">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin" :events="events">
            <el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
            <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        </el-amap>
    </div>
</template>

<style>
    .amap-page-container {
        height: 500px;
    }
</style>


<script>
    export default {
        data () {
            var self = this;
            return {
                zoom: 15,
                center: [120.974, 29.9595],
                marker: {
                    position: [120.974, 29.9595],
                    events: {
                        click: () => {
                            if (this.mywindow.visible === true) {
                                this.mywindow.visible = false
                            } else {
                                this.mywindow.visible = true
                            }
                        }
                    },
                    visible: true,
                    draggable: true
                },
                mywindow: {
                    position: [120.974, 29.9595],
                    content: 'Yier Plastic/溢尔',
                    visible: true,
                    events: {
                        close () {
                            this.D.Bg.hidden = true
                        }
                    }
                },
                plugin: {
                    pName: 'Scale',
                    events: {
                        init (instance) {
                            console.log(instance)
                        }
                    }
                },
                events: {
                    init(o) {
                        o.setLang('zh_en');
                    }
                }
            }
        },
        mounted() {

        }
    }
</script>