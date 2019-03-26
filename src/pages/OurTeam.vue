<template>
    <div id="OurTeam">
            <Header></Header>
            <div class="homeContent">            
                <div class="Header">
                    <p class="grey">Not a Vendor.</p>
                    <span class="grey">Your Technology</span> Partner.
                </div>
                <div class="Content">
                    You don't have a cookie-cutter business and you don't need a cookie-cutter medical insights solution.
                </div>            
                <button class="btnSeeDemo rounded-3">See a Demo</button>
                
            </div>
            <hr>
            <EctFeature card="RealTime"></EctFeature> 
            <div class="container">
                <p class="copyText">
                    Why do <span class="Red">Fortune 500</span> and <span class="Red">Small Businesses</span> choose to partner with ECT Technologies?
                </p>
                <p class="copyText">
                    There's no better teacher than experience, and experience is what the ECT Technologies team brings 
                    when designing a custom medical insights tool for your business.
                </p>
                <ul class="copyText">
                    <li>Over 30 years of pharmaceutical industry experience</li>
                    <li>Over 25 years in enterprise software development experience</li>
                    <li>Servicing Fortune 500 and Small Businesses in the Pharmaceutical and Biotechnical industries.</li>
                    <li>Over 30 years of pharmaceutical industry experience</li>           
                </ul>

                <div>
                    
                    <h2>Where have clients seen the greatest improvements?</h2>
                    <ul class="copyText">
                        <li>Quality of collected medical insights significantly improved.</li>
                        <li>Speed with which medical insights are analyzed and actioned has increased dramatically.</li>
                        <li>Effectiveness of the field teams in medical affairs and commercial departments has greatly improved.</li>
                    </ul>

                </div>
                <div class="copyText">
                    Our Leadership is Committed to Partnering with You
                    We will not be a faceless technology vendor to your organization. We are so dedicated to this partnership that we encourage
                    you to reach out directly to our Managing Partner, Richard Olsson, with your questions and concerns. Richard and the entire 
                    team at ECT Technologies are 100% committed to improving the efficiency and effectiveness of your medical affairs department 
                    through our customized solutions.
                    <p class="copyText">
                    Want more information about our team and how we can help your Medical Insights process? Connect with Richard on LinkedIn Today.
                    </p>
                    <div class="col-md-12">
                            <button class="btnSeeDemo rounded-3">See a Demo</button>
                        </div>
                </div>
            </div>        
            <RnRFooter></RnRFooter>
        </div>
</template>
<script>

    import Header from '../components/Header.vue'
    import EctFeature from '../components/EctFeature.vue'
    import RnRFooter from '../components/RnRFooter.vue'
 
export default {
      name: 'OurTeam',
      props: {
        msg: String
      },
    components: {
        Header,
        EctFeature,
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Header{
        font: bold 44px tahoma;
        color:black;
        text-align:left;
        max-width:780px;
    }
    .Header .grey{
        color:gray;
    }
    .Content{
        font: 28px tahoma;
        color:gray;
        text-align: justify;
    }
    .Header{
        font: bold 44px tahoma;
        color:black;
        text-align:left;
        max-width:780px;
    }

    .Header .grey{
        color:gray;
    }

    .btnSeeDemo {
        margin: 15px;
        background-color: red;
        border-radius: 6px;
        color:white;
        border-color: red;
        font-size: 24px;
        width: 160px;
        height: 60px;
    }

    .copyText {    
        vertical-align: top;
        margin: 15px 0 0 0;
        text-align: left;
        padding: 2px 2px 5px 2px;
        color: #6d6e70;
        font: 24px tahoma;   
    }

    .Grey {
        color: gray;
    }

    .Red {
        color: red;
    }

    .Black {
        color: black;
    }
</style>
