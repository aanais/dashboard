<template>
    <graph :data="dataCharts" :categories="dataCategories" :color="'#fa8747'"/>
</template>

<script>
    import Graph from './types/Graph.vue';

    export default {

        name: 'graph-extension',

        props: ['apiFunctions'],

        components: {
            'graph': Graph
        },

        data() {
            return {
                dataCharts: null,
                dataCategories: null
            }
        },

        mounted() {
            this.apiFunctions.extension().then((data) => {
                this.dataCategories = data.map(a => a.datetime);
                this.dataCharts = data.map(a => a.value);
            })
        }
    }

</script>

<style>
</style>
