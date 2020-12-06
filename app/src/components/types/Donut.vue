<template>
    <charts v-if="data" type=donut :width="width" :height="height" :options="chartOptions" :series="series"/>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {

        name: 'donut',

        props: ['data', 'categories', 'width', 'height'],

        components: {
            'charts': VueApexCharts
        },

        watch: {
            data(value) {
                this.series = value;
            },
            categories(value) {
                this.chartOptions.labels = value;
            }
        },

        data() {
            return {
                series: null,
                chartOptions: {
                    labels: null,
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        show: true,
                        horizontalAlign: 'left',
                        position: 'left',
                        fontSize: '22px',
                        fontFamily: 'Source Sans Pro',
                        labels: {
                            colors: '#FFF'
                        },
                        markers: {
                            width: 31,
                            height: 31,
                            offsetX: -10,
                            offsetY: 10
                        },
                        itemMargin: {
                            horizontal: 25,
                            vertical: 0
                        },
                    },
                    stroke: {
                        show: true,
                        curve: 'smooth',
                        lineCap: 'butt',
                        colors: undefined,
                        width: 2,
                        dashArray: 0,
                    },
                    colors: ['#ec1c68', '#f3992f', '#48d6f2'],
                    dataLabels: {
                        enabled: true,
                        formatter: function (val) {
                            return Math.round(val) + "%"
                        },
                        style: {
                            fontSize: '26px',
                        }
                    },
                    plotOptions: {
                        pie: {
                            customScale: 0.8,
                            offsetY: 140,
                        }
                    }
                },
            }
        }
    }

</script>

<style>
</style>
