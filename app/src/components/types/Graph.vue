<template>
    <charts v-if="data" type=line height="80%" :options="chartOptions" :series="series"/>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {

        name: 'graph',

        props: ['data', 'categories', 'color'],

        components: {
            'charts': VueApexCharts
        },

        watch: {
            data(value) {
                this.series[0].data = value;
            },
            categories(value) {
                this.chartOptions.xaxis.categories = value;
            }
        },

        data() {
            return {
                series: [{
                    name: 'series1',
                    data: []
                }],
                chartOptions: {
                    colors: [this.color],
                    theme: {
                        mode: 'dark'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    chart: {
                        renderTo: 'container',
                        dropShadow: {
                            enabled: true,
                            blur: 10,
                            color: '#3a4964',
                        },
                        toolbar: {
                            show: false
                        },
                        fontFamily: 'Arial',
                        background: '#091b3d'
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: [],
                        lines: {
                            show: true
                        },
                        labels: {
                            format: 'dd/MM',
                            style: {
                                fontFamily: 'Source Sans Pro',
                                fontSize: '1em',
                            },
                            offsetY: 15,
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontFamily: 'Source Sans Pro',
                                fontSize: '1em',
                            },
                            offsetX: -15,
                        }
                    },
                    tooltip: {
                        enabled: false
                    },
                    grid: {
                        show: true,
                        position: 'front',
                        borderColor: '#3a4964',
                        xaxis: {
                            lines: {
                                show: true
                            }
                        },
                        yaxis: {
                            lines: {
                                show: true
                            }
                        },
                    }
                },
            }
        }
    }

</script>

<style>
</style>
