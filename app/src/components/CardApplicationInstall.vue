<template>
    <card id="card-application-install" :number="number" :difference="difference" :title="'Application installées'"
          :picto="'user'"></card>
</template>

<script>
    import Card from './types/Card.vue';

    export default {
        name: "card-application-install",

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
            this.apiFunctions.application().then((data) => {
                this.number = data[data.length - 1].value;
                this.apiFunctions.lastApplication().then((data) => {
                    if (data.length > 0) {
                        this.difference = this.number - data[0].value;
                    }
                });
            });
        }
    }
</script>

<style lang="less">
    #card-application-install {
        background-image: linear-gradient(to bottom, #50e9e9, #3ab7ff 76%, #2e3192 127%)
    }
</style>