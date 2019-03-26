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
                <input id="inCompany" name="inCompany" placeholder="Company Name / Organization"/>
            </div>
        </div>
        <div class="row"> 
            <div class="col-sm-12">          
                <input id="inFirstName" placeholder="First Name"/>            
                <input id="inLastName" placeholder="Last Name"/>
            </div>
        </div>        
        <div class="row">
            <div class="col-sm-12">
            <input id="inWorkEmail" placeholder="Work Email"/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
            <input id="inPhoneNumber" placeholder="Best Phone Number"/>
            </div>
        </div>
        <div class="row">
            <button id="btnSchedNow" >Schedule Now</button>
        </div>
        <div class="row">
            <div class="col-sm-1">
                <img class="col-sm-1" src="../img/lockimg.png" alt="Lock pic">
            </div>
            <div class="col-sm-11">
                <span>We hate spam. We will never sell or share your information. See our <a href="#">privacy policy</a>.</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CTAForm',
    props: {
       
    },
    components: {
        
    }
}
</script>
<style scoped>
div.CTAForm {
    
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