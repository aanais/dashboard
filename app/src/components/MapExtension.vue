<template>
    <div class="row map-country">
        <map-geo v-if="data.length > 0" :data="data" :top-country.sync="listTopCountry"/>
        <div class="top-country">
            <div class="country" v-for="(country, index) in listTopCountry" :key="index">
                <p class="title">{{country[0]}}</p>
                <p class="value" :style="`color:${colors[index]}`">
                    {{getRoundNumber(country[1])}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import MapGeo from './types/Mapgeo.vue';

    export default {

        name: 'map-extension',

        props: ['apiFunctions', 'topCountry'],

        components: {
            MapGeo
        },

        data() {
            return {
                data: [],
                listTopCountry: [],
                colors: ['#ff9f4b','#ff9f4b','#f46a4d','#bc304b']
            }
        },

        mounted() {
            this.apiFunctions.countryHits().then((data) => {
                let dataArray = [];
                data.forEach((e) => {
                    dataArray.push(Object.values(e));
                });
                this.data = dataArray;
            });
        },

        methods: {
            getRoundNumber(number) {
                return (number > 1000) ? `${Math.round(number / 100)}K` : number;
            }
        }
    }
</script>
<style lang="less">
    .map-country {
        height: 100%;
        justify-content: space-between;
        box-sizing: border-box;
        .country {
            padding-bottom: 1em;
            p {
                margin: 0;
                line-height: 1em;
                &.title {
                    font-size: 1.1em;
                }
                &.value {
                    color: #bc304b;
                    font-size: 3em;
                }
            }
        }
    }
</style>
