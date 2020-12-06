<template>
    <card id="card-extension-install" :number="number" :difference="difference" :title="'Plugins installés'"
          :picto="'plugin'"></card>
</template>

<script>
    import Card from './types/Card.vue';

    export default {
        name: "card-extension-install",

        props: ['apiFunctions'],

        components: {
            Card
        },

        data() {
            return {
                number: 0,
                difference: null
            }
        },

        mounted() {
            this.apiFunctions.extension().then((data) => {
                this.number = data[data.length - 1].value;
                this.apiFunctions.lastExtension().then((data) => {
                    if (data.length > 0) {
                        this.difference = this.number - data[0].value;
                    }
                });
            });
        }
    }
</script>

<style lang="less">
    #card-extension-install {
        background-image: linear-gradient(to bottom, #d52c9d, #991edf 76%, #3f0de9 127%)
    }
</style>