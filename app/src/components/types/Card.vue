<template>
    <div class="card">
        <h2>{{title}}</h2>
        <div class="picto-number">
            <div class="picto">
                <img v-if="picto == 'user'" src="./../../assets/picto_user.svg" class="picto">
                <img v-if="picto == 'server'" src="./../../assets/picto_server.svg" class="picto">
                <img v-if="picto == 'plugin'" src="./../../assets/picto_plugin.svg" class="picto">
            </div>
            <div class="number">
                <span>{{number}}</span>
            </div>
        </div>
        <div class="difference" v-if="difference">
            <p>Bilan des 7 derniers jours</p>
            <p v-if="difference > 0">
                <span class="arrow green"></span>
                <span>+{{difference}}<br/>install</span>
            </p>
            <p v-else>
                <span class="arrow red"></span>
                <span>{{difference}}<br/>install</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card.vue",

        props: ['number', 'title', 'picto', 'difference'],
    }
</script>

<style lang="less">
    .card {
        &.large {
            .picto-number {
                justify-content: center;
                display: flex;
                .picto {
                    padding-right: 1em;
                }
            }
        }
        height: 100%;
        text-align: center;
        font-size: 1em;
        color: #FFF;
        padding: 30px 42px 36px 39px;
        border-radius: 30px;
        .number {
            img {
                padding-right: 44px;
                height: 126px;
            }
            margin-top: 10px;
            font-size: 3.2em;
        }
        .difference {
            span {
                display: inline-block;
                text-align: left;
            }
            .arrow {
                margin-top: 10px;
                vertical-align: top;
                margin-right: 1em;
                height: 0;
                width: 0;
                opacity: 0.7;
                &.green {
                    border-right: 10px solid transparent;
                    border-bottom: 18px solid #53fb1a;
                    border-left: 10px solid transparent;
                }
                &.red {
                    border-top: 18px solid #ff1c1c;
                    border-right: 10px solid transparent;
                    border-left: 10px solid transparent;
                }
            }

            padding-top: 1em;
        }
    }
</style>