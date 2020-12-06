<template>
    <div v-if="data" class="map" ref="chartdiv"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4maps from "@amcharts/amcharts4/maps";
    import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

    const {getCode } = require('country-list');

    export default {

        name: 'map-geo',

        props: ['data', 'topCountry'],

        data() {
            return {
                sortChart: []
            }
        },

        mounted() {
            this.sortChart = this.data.sort(function (a, b) {
                return a[1] - b[1];
            });
            this.$emit('update:topCountry', this.sortChart.slice(this.sortChart.length - 5));
            // this.sortChart = this.data;
            let chart = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
            // Set map definition
            chart.geodata = am4geodata_worldLow;

            // Set projection
            chart.projection = new am4maps.projections.Miller();

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;

            // Configure series
            var polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.fill = am4core.color("#3d4b66");
            polygonTemplate.stroke = am4core.color("#3d4b66");

            polygonSeries.exclude = ["AQ"];

            // Add heat rule
            polygonSeries.heatRules.push({
                "property": "fill",
                "target": polygonSeries.mapPolygons.template,
                "min": am4core.color("#fbb03b"),
                "max": am4core.color("#800948")
            });

            polygonSeries.data = [];

            for (let i = 0; i < this.sortChart.length; i++) {
                polygonSeries.data.push({
                    "id": getCode(this.sortChart[i][0]),
                    "value": this.sortChart[i][1],
                })
            }
        }
    }
</script>
<style lang="less">
    .map {
        padding-bottom: 30px;
        width: 70%;
    }
</style>
