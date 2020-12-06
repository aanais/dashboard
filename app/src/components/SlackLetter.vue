<template>
    <div class="block text-infos grow-2" v-if="slackLetter">
        <transition name="slide-fade" mode="out-in">
            <div class="item">
                <h2>{{slackLetter[this.currentLetter].title}}</h2>
                {{slackLetter[this.currentLetter].description}}
            </div>
        </transition>
        <div class="bullet-container">
            <div v-for="i in slackLetter.length" class="bullet" :class="{'full' : (currentLetter+1 == i)}" :key="i"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slack-letter",

        props: ['apiFunctions'],

        data() {
            return {
                slackLetter: null,
                currentLetter: 0
            }
        },

        mounted() {
            this.apiFunctions.slackLetter().then((data) => {
                this.slackLetter = data;
                setInterval(() => {
                    if (this.currentLetter == this.slackLetter.length - 1) {
                        this.currentLetter = 0;
                    } else {
                        this.currentLetter += 1;
                    }
                }, 10000)
            });


        }
    }
</script>

<style scoped lang="less">
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

    .bullet-container {
        display: flex;
        justify-content: center;
        margin-top: 55px;
        .bullet {
            border-radius: 17.7px;
            width: 17.7px;
            height: 17.7px;
            margin: 0 6px;
            opacity: 0.24;
            background-color: #ffffff;
        }

        .bullet.full {
            opacity: 1;
        }
    }
</style>
