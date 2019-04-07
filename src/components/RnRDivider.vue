<template>
    <div :id="id" class="contentDivider full_width" :class="dividerColor">
        <div class="textContent">
            <p v-html="title"></p>
        </div>                           
        <div class="buttonContent">            
            <b-button v-if="button.btnLink.charAt(0) == '/'"
                v-for="button in buttons" 
                :key="button.btnText"  
                class="divider-Btn" 
                :class="button.btnColor"                 
                :to="button.btnLink" 
                v-html="button.btnText" >
            </b-button>
            <b-button v-else
                v-for="button in buttons" 
                :key="button.btnText"  
                class="divider-Btn" 
                :class="button.btnColor"                 
                :href="button.btnLink" 
                v-html="button.btnText" >
            </b-button>
        </div>
    </div>
</template>
<script>
    import dataStore from '../services/DataStore.js'
    export default {
        name: 'RnRDivider',
        props: ['dividerId', 'id'], 
        data: function() {
            return {
                title: 'This is default',
                dividerColor: 'red',
                buttons: []
            };
        },
        created: function () {
                this.fetchData();
        },        
        methods: {
            sayHi: function(text){
                alert(text);
            },
            fetchData: function () {
                var dividerData = dataStore.getDivider(this.dividerId);
                this.title = dividerData.title;
                this.dividerColor = dividerData.dividerColor;
                this.buttons = dividerData.buttons;
            },
        }
    }
</script>
<style>
    div.contentDivider {
        background-color: #FF0A0A;
        text-align: center;
        font-size: 30px;
        color: white;
        padding-top: 50px;
        height:200px;
        margin: 3em 0em;
    }

    div.contentDivider.Red {
        background-color:#FF0A0A;
        color: white;
    }

    div.contentDivider.Gray {
        background-color:#606060;
        color: white;        
    }

    div.contentDivider.Gray strong {
        background-color:#606060;
        color: rgb(233, 129, 129);        
    }

    div.contentDivider.Gray strong.black {
        background-color:#606060;
        color: rgb(0, 0, 0);        
    }

    div.contentDivider .divider-Btn{
        border-radius: 7px;
        width: 270px;
        height: 50px;
        font-size: 18px;
        /* margin-bottom: 15px; */
        color: white;
        margin: .85rem .85rem;
        padding: .5rem;
        text-align: center;
        vertical-align: middle;
    }

    div.contentDivider .divider-Btn.btnBlack {
        background-color: black;
        color: white;
        border: 6px solid white;
        padding: .4rem;
        
    }

    div.contentDivider .divider-Btn.btnRed {
        background-color: red;
        color: white;
        border: 3px solid white;
        
    }

    .full_width{
        width: 100vw;
        position: relative;
        left: calc(-1 * (100vw - 100%)/2);

    /*  left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw; */
    }

    div.contentDivider .divider-Btn.btnWhite {
        background-color: #FFFFFF;
        color: #505050;
        border: 3px solid black;
        
    }
</style>