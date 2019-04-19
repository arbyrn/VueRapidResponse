<template>
    <div class="CTAForm">
        <div class="row">
            <div class="col-md-12">
                <h2 class="Gray">Request a Demo and</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="Red">Free Consultation</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input id="inCompany" v-model="inCompany" name="inCompany" placeholder="* Company Name / Organization"/>
            </div>
        </div>
        <div class="row"> 
            <div class="col-sm-12">          
                <input id="inFirstName" v-model="inFirstName" name="inFirstName" placeholder="* First Name"/>            
                <input id="inLastName" v-model="inLastName" name="inLastName" placeholder="* Last Name"/>
            </div>
        </div>        
        <div class="row">
            <div class="col-sm-12">
                <input id="inWorkEmail" v-model="inWorkEmail" name="inWorkEmail" placeholder="* Work Email"/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <input id="inPhoneNumber" v-model="inPhoneNumber" name="inPhoneNumber" placeholder="Best Phone Number"/>
            </div>
        </div>
         <div class="row formLegendRow">
            <div class="col-12">
                <span class="formLegend">* required</span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-11 offset-1">
                <b-form-checkbox id="chkScheduleDemo" v-model="chkScheduleDemo" name="chkScheduleDemo" class="float-left">
                    Schedule a demo
                </b-form-checkbox>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-11 offset-1">                
                 <b-form-checkbox id="chkPleaseCall" v-model="chkPleaseCall" name="chkPleaseCall" class="float-left">
                    Please call, I would like more information.
                </b-form-checkbox>
            </div>
        </div>
       
        <div v-if="sending" class="row">
            <div v-if="contactSent === 2">
                <h2> Request was received! Someone will contact you shortly.</h2>
            </div>
            <div v-else-if="contactSent === 3">
                <h2>The request ran into a problem, please try again at a later time. Thank you!</h2>
            </div>
            <div v-else class="col-12">
                <h2 class="text-center"> Request is being sent!</h2>
            </div>
        </div>
        <div v-else class="row">
            <button id="btnSchedNow" v-on:click="sendContactReq">Schedule Now</button>
        </div>
        <div v-if="errors.length">
            <ul class="formErrors">
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
        <div class="row">
            <div class="col-sm-1">
                <img id="CTALockImg" class="" src="../img/lockimg.png" alt="Lock pic">
            </div>
            <div class="col-sm-11">
                <span>We hate spam. We will never sell or share your information. See our <a href="#">privacy policy</a>.</span>
            </div>
        </div>       
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CTAForm',
    props: {
       
    },
    components: {
        
    },
    data () {
        return {
            info: null,
            inCompany: null,
            inFirstName: null,
            inLastName: null,
            inWorkEmail: null,
            inPhoneNumber:null,
            chkPleaseCall: false,
            chkScheduleDemo: false,        
            contactSent: 1,
            sending: false,
            errors: []
        }
    },
    mounted(){
        
        var a = 1;
   
    },
    methods: {
        sendContactReq: function(event) {
            var vm = this;
            if (this.checkForm(event)) {
                this.sending = true;
                var config = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'                        
                        }                
                };
                axios.post('https://ectwebappfunctions.azurewebsites.net/api/RapidResponseContactTrigger?code=kkmGhTglW3kNwK1ni/TGtdnFOFmXJILdp6gvACYVTaFNyiFznn7HjA==', {
                    'firstname': this.inFirstName,
                    'lastname': this.inLastName,
                    'companyname': this.inCompany,
                    'email': this.inWorkEmail,
                    'phone': this.inPhoneNumber,
                    'chkDemo': this.chkScheduleDemo,
                    'chkPleaseCall': this.chkPleaseCall
                }, config)
                .then(function(response){
                    console.log("Response came back!"); 
                    //vm.sending = false;             
                    vm.contactSent = 2;
                })
                .catch(function (error){
                    //vm.sending = false; 
                    console.log("Request Errored: " + error);
                    vm.contactSent = 3;
                });
            }
        },
        checkForm: function(e){
            this.errors = [];

            if (!this.inFirstName ) {
                this.errors.push("First name required.");
            }
            if (!this.inLastName) {
                this.errors.push("Last name required.");
            }
            if (!this.inCompany) {
                this.errors.push("Company name required.");
            }
            if(!this.inWorkEmail){
                this.errors.push('Email required');
            } else if (!this.validEmail(this.inWorkEmail)){
                this.errors.push("The email doesn't appear to be valid.");
            }

            if(!this.errors.length){
                return true;
            }
            
            e.preventDefault();
        },
        validEmail: function (email){
             var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
}
</script>
<style scoped>
input {
    height: 2.25em;
}

div.CTAForm div input{
    border: 2px solid lightgray;
    border-radius:5px;
    margin: 12px;
    text-align: center;
}
ul.formErrors{
    color: red;
    font-size: 1.5em;
    list-style: none;
}
/* div.CTAForm div.row {
    margin: 10px;
} */
div.formLegendRow{
    text-align:end;
    vertical-align: text-top;
}
div span.formLegend {
    vertical-align: text-top; 
    font-size: 14px;
   
}
.Gray {
    color: gray;
}
.Red {
    color: red;
}
#btnSchedNow {
    margin: 12px 0px 12px 42px;
    background-color: red;
    border-radius: 6px;
    color:white;
    border-color: red;
    font-size: 18px;
    width: 140px;
    height: 50px;
}
#inFirstName {
    width: 180px;
    margin: 12px 5px 12px 12px;
}
#inLastName {
    width: 180px;
    margin: 12px 12px 12px 5px;
}
#inCompany, #inWorkEmail, #inPhoneNumber{
    width: 370px;
}

</style>