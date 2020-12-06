<template>
    <div id="dashboard">
        <div class="row">
            <div class="column">
                <div class="row">
                    <div class="block logo">
                        <img src="./assets/logo.png" alt="Logo"/>
                    </div>
                    <slack-letter :apiFunctions="apiFunctions" />
                </div>
                <div class="row">
                    <div class="block transparent small">
                        <card-extension-install :apiFunctions="apiFunctions" :key="key"/>
                    </div>
                    <div class="block graph grow-3">
                        <h2>Détail du nombre d'extensions installées</h2>
                        <graph-extension :apiFunctions="apiFunctions" :key="key"/>
                    </div>
                </div>
                <div class="row">
                    <div class="block transparent small">
                        <card-application-install :apiFunctions="apiFunctions" :key="key"/>
                    </div>
                    <div class="block graph grow-3">
                        <h2>Détail du nombre d'applications installées</h2>
                        <graph-application :apiFunctions="apiFunctions" :key="key"/>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <div class="grow-1">
                        <div class="block transparent">
                            <card-country-hit :apiFunctions="apiFunctions" :key="key"/>
                        </div>
                        <div class="block">
                            <info-event :apiFunctions="apiFunctions"></info-event>
                        </div>
                    </div>
                    <div class="block last">
                        <h2>Répartition application / extension</h2>
                        <donut-user-global :apiFunctions="apiFunctions" :key="key"/>
                    </div>
                </div>
                <div class="block map last">
                    <h2>Répartition de nos internautes dans le monde</h2>
                    <map-extension :apiFunctions="apiFunctions" :key="key"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import GraphExtension from './components/GraphExtension.vue';
    import GraphApplication from './components/GraphApplication.vue';
    import MapExtension from './components/MapExtension.vue';
    import CardCountryHit from './components/CardCountryHit.vue';
    import CardExtensionInstall from './components/CardExtensionInstall.vue';
    import CardApplicationInstall from './components/CardApplicationInstall.vue';
    import SlackLetter from './components/SlackLetter.vue';
    import DonutUserGlobal from "./components/DonutUserGlobal.vue";
    import InfoEvent from "./components/InfoEvent.vue";

    const ApiFunctions = require('./ApiFunctions.js');

    export default {
        components: {
            DonutUserGlobal,
            GraphExtension, MapExtension, CardCountryHit, CardExtensionInstall, CardApplicationInstall,
            SlackLetter, InfoEvent, GraphApplication
        },

        data() {
            return {
                apiFunctions: ApiFunctions,
                autoRefresh: true,
                key: 0
            }
        },

        mounted() {
            if (this.autoRefresh) {
                setInterval(() => {
                    this.key += 1;
                }, 300000)
            }
        }
    }

</script>

<style lang="less">
    @colorBackground: #0f2850;
    @colorBackgroundLight: #17305e;
    @colorCard: #091b3d;
    @bodyColor: #FFF;

    @font-face {
        font-family: "Futura Std";
        src: url("./fonts/FuturaStd-Book.woff2") format("woff2"),
        url("./fonts/FuturaStd-Book.woff") format("woff");
    }

    @font-face {
        font-family: "Source Sans Pro";
        src: url("./fonts/SourceSansPro-Regular.ttf") format("ttf");
        font-weight: normal;
    }

    @font-face {
        font-family: "Source Sans Pro";
        src: url("./fonts/SourceSansPro-Bold.ttf") format("ttf");
        font-weight: bold;
    }

    body {
        font-family: 'Source Sans Pro';
        font-size: 26px;
        background-color: @colorBackground;
        margin: 0;
        height: 100%;
        color: @bodyColor;
    }

    h2 {
        font-size: 1.5em;
        font-family: 'Futura Std';
        font-weight: normal;
    }

    div {
        box-sizing: border-box;
    }

    #dashboard {
        box-sizing: border-box;
        padding: 103px 78px;
        width: 3840px;
        zoom: 0.5;
        /*height: 2160px;*/
        /*width: 100%;*/
        .row {
            display: flex;
            .column {
                height: auto;
                flex: 1 1 0;
            }
        }
        .grow-1 {
            flex: 1;
        }
        .grow-2 {
            flex: 2;
        }
        .grow-3 {
            flex: 3;
        }
        .block {
            flex: 1;
            box-sizing: border-box;
            border: 1px solid @colorCard;
            background-color: @colorCard;
            padding: 25px 96px;
            border-radius: 30px;
            margin-bottom: 70px;
            margin-right: 46px;
            &.last {
                margin-right: 0px;
            }
            &.map {
                height: 41%;
                width: 100%;
            }
            &.small {
                max-width: 380.6px;
            }
            &.transparent {
                border: none;
                padding: 0;
                background-color: transparent;
            }
        }
        .logo {
            display: flex;
            flex: 0;
            align-items: center;
            justify-content: center;
            padding: 0 83px;
            margin-right: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .text-infos {
            padding: 10px 30px 10px 50px;
            background-color: @colorBackgroundLight;
            border: 1px solid @colorBackgroundLight;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }

</style>
