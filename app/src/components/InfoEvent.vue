<template>
    <info v-if="info" :info="info"></info>
</template>

<script>
    import Info from './types/Info.vue';

    export default {

        name: 'info-event',

        props: ['apiFunctions'],

        components: {
            Info
        },

        data() {
            return {
                info: null
            }
        },

        mounted() {
            this.apiFunctions.listEvent().then((data) => {
                if (data.length > 0) {
                    this.info = {
                        day: this.getDay(data[0].date),
                        month: this.getMonth(data[0].date),
                        difference: this.getDifferenceDayToday(data[0].date),
                        title: data[0].event,
                        date: data[0].date,
                        description: data[0].description
                    }
                }
            });
        },

        methods: {
            getDifferenceDayToday(dateCompare) {
                let today = new Date();
                dateCompare = new Date(dateCompare);
                return Math.round((dateCompare.getTime() - today.getTime()) / (1000 * 3600 * 24));
            },
            getDay(date) {
                date = new Date(date);
                return date.getDate();
            },
            getMonth(date) {
                date = new Date(date);
                let monthArray = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août',
                    'Septembre', 'Octobre', 'Novembre', 'Décembre']
                return monthArray[date.getMonth()];
            }
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
