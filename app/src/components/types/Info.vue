<template>
    <div class="info-block">
        <div class="date">
            <span class="counter" v-if="info.difference > 0">J-{{info.difference}}</span>
            <span class="day">{{info.day}}</span>
            <h2 class="month">{{info.month}}</h2>
        </div>
        <h2>{{info.title}}</h2>
        <p>
            {{info.description}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Info",

        props: ['info']
    }
</script>

<style lang="less">
    .info-block {
        text-align: center;
        padding: 63px 0 52px 0;
        .date {
            display: inline-block;
            padding: 36px 30px 30px 30px;
            position: relative;
            border-radius: 30px;
            background-image: linear-gradient(143deg, #3f0de9 6%, #200775 93%);
            margin-bottom: 20px;
            .counter {
                position: absolute;
                top: -30px;
                right: -30px;
                padding-top: 16px;
                box-sizing: border-box;
                width: 68px;
                height: 68px;
                background-image: linear-gradient(to bottom, #d4145a, #991edf 67%, #3f0de9);
                border-radius: 34px;
                font-weight: bold;
            }
            h2 {
                margin: 0;
            }
            span {
                display: block;
            }
            .day {
                line-height: 1em;
                font-size: 4em;
            }
        }
    }
</style>