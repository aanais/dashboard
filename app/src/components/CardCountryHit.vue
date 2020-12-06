<template>
    <card class="large" id="card-country-hit" :number="number" :title="'Nombre de Hits serveurs'"
          :picto="'server'"></card>
</template>

<script>
    import Card from './types/Card.vue';

    export default {
        name: "card-country-hit",

        props: ['apiFunctions'],

        components: {
            Card
        },

        data() {
            return {
                number: 0
            }
        },

        mounted() {
            let totalHits = 0;
            this.apiFunctions.countryHits().then((data) => {
                data.forEach((e) => {
                    totalHits += e.hits;
                });
                this.number = totalHits;
            });
        }
    }
</script>

<style lang="less">
    #card-country-hit {
        background-image: linear-gradient(to bottom, #fbb03b, #f96851 76%, #d4145a 127%)
    }
</style>