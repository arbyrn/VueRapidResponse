<template>
    <div class="contentDivider" :class="dividerColor">
        <div class="textContent">
            <h2 v-html="title"></h2>
        </div>                           
        <div class="buttonContent">            
            <button v-for="button in buttons" :key="button.btnText"  class="divider-Btn" :class="button.btnColor" @click="sayHi(button.btnLink)" >{{button.btnText}}</button>
        </div>
    </div>
</template>
<script>
    import dataStore from '../services/DataStore.js'
    export default {
        name: 'RnRDivider',
        props: ['dividerId'], 
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
        font-size: 38px;
        color: white;
        padding-top: 50px;
        height:225px;
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

    .divider-Btn{
        border-radius: 7px;
        width: 270px;
        height: 60px;
        font-size: 20px;
        /* margin-bottom: 15px; */
        color: white;
        margin: 15px 10px;
    }

    button.divider-Btn.btnBlack {
        background-color: black;
        color: white;
        border: 6px solid white;
        
    }

    button.divider-Btn.btnRed {
        background-color: red;
        color: white;
        border: 3px solid white;
        
    }

    button.divider-Btn.btnWhite {
        background-color: #FFFFFF;
        color: #505050;
        border: 3px solid black;
        
    }
</style>