<template>
    <div :id="id" class="feature row" :class="featureAlignClass">
        <div class="featureText col-md-6" :class="textOrderClass">
            <div class="featureHeader">{{featureHeader}}</div>
            <div v-html="featureText"></div>
            <div class="featureLink">
                <a :href="linkAddress">{{linkText}}</a>
            </div>
        </div>
        <div class="featureImg col-md-6" :class="imgOrderClass" :data-callout="callout">
            <div class="imgWrap">
                <img :src="getImgUrl(mainImg)" :style="borderStyle" class="mainImg" />
                <div class="mirrorWrapper">
                    <div class="mirrorImgWrapper">
                        <img :src="getImgUrl(mirrorImg)" :style="borderStyle" class="mirrorImg rotateimg180" />
                    </div>
                    <div class="FadeAway"></div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

    import dataStore from '../services/DataStore.js'
    export default {
        name: 'EctFeature',
        props: ['card','id'],
        data: function () {
            return {
                featureText: '',
                featureHeader: '',
                mainImg: '',
                mirrorImg: '',
                border: 'none',
                callout: 'callout',
                imgAlign: 'left',
                linkText: "See All Features",
                linkAddress: "#",
                calloutColor: 'red'
            };
        },
        computed: {
            borderStyle: function () {
                if (this.border != 'none') {
                    return {
                        border: '3px solid ' + this.border
                    }
                }
            },
            imgOrderClass: function () {
                if (this.imgAlign == "left") {
                    return "order-last order-sm-last order-md-first " + this.calloutColor;
                }
                else {
                    return "order-last " + this.calloutColor;
                }
            },
            textOrderClass: function () {
                if (this.imgAlign == "left") {
                    return "order-first order-sm-first order-md-last";
                }
                else {
                    return "order-first";
                }
            },
            featureAlignClass: function () {
                return this.imgAlign;
            }

        },
        created: function () {
            this.fetchData();
        },
        methods: {
            fetchData: function () {
                var featureData = dataStore.getCard(this.card);
                this.featureText = featureData.featureText;
                this.mainImg = featureData.mainImg;
                this.mirrorImg = featureData.mirrorImg;
                this.border = featureData.border;
                this.featureHeader = featureData.featureHeader;
                this.callout = featureData.callout;
                this.imgAlign = featureData.imgAlign;
                this.linkText = featureData.linkText;
                this.linkAddress = featureData.linkAddress;
                this.calloutColor = featureData.calloutColor;
            },
            getImgUrl(pic) {
                return require('../img/' + pic);
            }
        }

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .feature {
        padding-left: 50px;
        margin: 15px 0;
    }

    .featureHeader {
        font: 24px tahoma;
        color: #333333;
    }

    .feature.right .featureHeader::before {
        content: url('../img/target.png');
        position: absolute;
        left: -60px;
        top: -6px;
    }

    .feature.left .featureText::after {
        content: url('../img/target.png');
        position: absolute;
        right: -45px;
        top: -6px;
    }

    .featureText, .featureImg {
        display: inline-block;
        padding-right: 15px;
        position: relative;
    }

    .featureText {
        vertical-align: top;
        margin: 15px 0 0 0;
        text-align: left;
        padding: 2px 2px 5px 2px;
        color: #6d6e70;
        font: 24px tahoma;
    }

    .feature.left .featureText {
        text-align: right;
    }

    .mainImg, .mirrorImg {
        display: block;
        height: 240px;
        width: 300px;
        border-radius: 40px;
        box-shadow: 1px 2px 2px #999;
    }

    .featureImg::after {
        border-radius: 5px;
        min-height: 30px;
        width: 140px;
        color: #ffffff;
        position: absolute;
        content: attr(data-callout);
        padding: 2px 5px;
        text-align: center;
    }

    .featureImg.red::after {
        background-color: #e11b22;
    }

    .featureImg.black::after {
        background-color: #333333;
    }

    .featureLink a {
        color: #e11b22;
        font: 14px tahoma;
        font-weight: 600;
    }

    .feature.right .featureImg::after {
        right: -40px;
        top: 25px;
    }

    .feature.left .featureImg::after {
        left: -60px;
        top: 25px;
    }

    .mirrorImg {
        opacity: .3;
    }

    .mirrorWrapper {
        height: 75px;
        overflow: hidden;
        position:relative;
    }
    .mirrorImgWrapper {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 99%;
        overflow:hidden;
    }
    .FadeAway {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: transparent;
        background: linear-gradient(top, rgba( 255, 255, 255, 255 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -moz-linear-gradient(top, rgba( 255, 255, 255, 0) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -ms-linear-gradient(top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -o-linear-gradient( top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -webkit-linear-gradient( top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#550000FF, endColorstr=#550000FF);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff, endColorstr=#ffffffff);
    }
    .rotateimg180 {
        -webkit-transform: rotate(180deg) scaleX(-1);
        -moz-transform: rotate(180deg) scaleX(-1);
        -ms-transform: rotate(180deg) scaleX(-1);
        -o-transform: rotate(180deg) scaleX(-1);
        transform: rotate(180deg) scaleX(-1);
    }

    .feature.right .imgWrap {
        float:right;
    }
</style>
