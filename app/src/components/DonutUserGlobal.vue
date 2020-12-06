<template>
    <donut id="donutUser" :data="dataCharts" :categories="dataCategories" :width="'100%'" :height="'700'"/>
</template>

<script>
    import Donut from './types/Donut.vue';

    export default {

        name: 'donut-user-global',

        props: ['apiFunctions'],

        components: {
            Donut
        },

        data() {
            return {
                dataCharts: null,
                dataCategories: null

            }
        },

        mounted() {
            this.dataCategories = ['Extensions', 'Applications'];
            let resultArray = [];
            this.apiFunctions.extension().then((dataExension) => {
                resultArray.push(dataExension[dataExension.length - 1].value);
                this.apiFunctions.application().then((dataApplication) => {
                    resultArray.push(dataApplication[dataApplication.length - 1].value);
                    this.dataCharts = resultArray;
                })
            })
        }
    }

</script>

<style lang="less">
    #donutUser {
        width: 100%;
        max-height: 500px;
        min-height: auto;
    }
</style>
