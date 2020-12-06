<template>
    <graph :data="dataCharts" :categories="dataCategories" :color="'#48d6f2'"/>
</template>

<script>
    import Graph from './types/Graph.vue';

    export default {

        name: 'graph-application',

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
            this.apiFunctions.application().then((data) => {
                this.dataCategories = data.map(a => a.datetime);
                this.dataCharts = data.map(a => a.value);
            })
        }
    }

</script>

<style>
</style>
