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
                <input id="inCompany" v-model="inCompany" name="inCompany" placeholder="Company Name / Organization"/>
            </div>
        </div>
        <div class="row"> 
            <div class="col-sm-12">          
                <input id="inFirstName" v-model="inFirstName" name="inFirstName" placeholder="First Name"/>            
                <input id="inLastName" v-model="inLastName" name="inLastName" placeholder="Last Name"/>
            </div>
        </div>        
        <div class="row">
            <div class="col-sm-12">
                <input id="inWorkEmail" v-model="inWorkEmail" name="inWorkEmail" placeholder="Work Email"/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <input id="inPhoneNumber" v-model="inPhoneNumber" name="inPhoneNumber" placeholder="Best Phone Number"/>
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
        <div class="row">
            <div class="col-sm-1">
                <img id="CTALockImg" class="" src="../img/lockimg.png" alt="Lock pic">
            </div>
            <div class="col-sm-11">
                <span>We hate spam. We will never sell or share your information. See our <a href="#">privacy policy</a>.</span>
            </div>
        </div>
        <!-- <div v-for="currency in info"
                    class="currency">
                    {{currency.description}}:
                    <span class="lighten">
                        <span v-html="currency.symbol"></span>{{currency.rate_float}}
                    </span>
                </div> -->
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
        inCompany: "",
        inFirstName: "",
        inLastName: "",
        inWorkEmail: "",
        inPhoneNumber:"",
        chkPleaseCall: false,
        chkScheduleDemo: false,        
        contactSent: 1,
        sending: false
        }
    },
    mounted(){
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi))
            .catch(error => {
              console.log(error)
              this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        sendContactReq: function(event) {
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
            // axios.post('https://ectwebappfunctions.azurewebsites.net/api/RapidResponseContactTrigger', {
            //     firstname: this.inFirstName,
            //     lastname: this.inLastName,
            //     companyname: this.inCompany,
            //     email: this.inWorkEmail,
            //     phone: this.inPhoneNumber,
            //     chkDemo: this.chkScheduleDemo,
            //     chkPleaseCall: this.chkPleaseCall
            // })
            .then(function(response){
                console.log("Response came back!"); 
                // this.sending = false;             
               // this.contactSent = 2;
            })
            .catch(function (error){
                // this.sending = false; 
                console.log("Request Errored: " + error);
                //this.contactSent = 3;
            });
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

/* div.CTAForm div.row {
    margin: 10px;
} */

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