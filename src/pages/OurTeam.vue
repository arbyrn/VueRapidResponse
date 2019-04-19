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
                <button class="btnfollowLinkedIn"><a href="https://www.linkedin.com/company/ect-us">Follow us on LinkedIn</a></button>
                
            </div>
            <hr>
            <EctFeature card="TeamFactory"></EctFeature> 
            <div class="container">
                <div class="row">
                    <p class="Header">
                        Why do <span class="Red">Fortune 500</span> and <span class="Red">Small Businesses</span> choose to partner with ECT Technologies?
                    </p>
                    <p class="copyText">
                        There's no better teacher than experience, and experience is what the ECT Technologies team brings 
                        when designing a custom medical insights tool for your business.
                    </p>
                    <ul class="copyText">
                        <li>Over 30 years of <b>pharmaceutical industry</b> experience</li>
                        <li>Over 25 years in <b>enterprise software development</b> experience</li>
                        <li>Servicing <b>Fortune 500</b> and <b>Small Businesses</b> in the Pharmaceutical and Biotechnical industries.</li>
                        <li>Over 30 years of pharmaceutical industry experience</li>           
                    </ul>
                    <img id="ourcustomersimg" src="../img/Picture1.png" />
                </div>
                
                <div class="row">
                    <div class="col-sm-8 offset-2">
                        
                    </div>
                </div>
                <div class="row">
                    <EctFeature card="MeanInsights"></EctFeature>
                </div>
                <div class="row">
                    
                    <p class="Header">Where have clients seen the greatest improvements?</p>
                    <ul class="copyText">
                        <li><span class="Red">Quality</span> of collected medical insights significantly improved.</li>
                        <li><span class="Red">Speed</span> with which medical insights are analyzed and actioned has increased dramatically.</li>
                        <li><span class="Red">Effectiveness</span> of the field teams in medical affairs and commercial departments has greatly improved.</li>
                    </ul>

                </div>
                <div class="row">
                    <div class="copyText">
                        <p class="Header">Our Leadership is Committed to Partnering with You</p>
                        We will not be a faceless technology vendor to your organization. We are so dedicated to this partnership that we encourage
                        you to <a href="mailto:solutions@ecttechnologies.com?subject=Mail us some info on Rapid Response Insights">reach out directly to our Managing Partner</a>, Richard Olsson, with your questions and concerns. Richard and the entire 
                        team at ECT Technologies are 100% committed to improving the efficiency and effectiveness of your medical affairs department 
                        through our customized solutions.
                        <p class="copyText">
                        Want more information about our team and how we can help your Medical Insights process? <a href="https://www.linkedin.com/in/richardwolsson/">Connect with Richard on LinkedIn</a> Today.
                        </p>
                        <div class="col-md-12">
                            <button class="btnfollowLinkedIn" ><a href="https://www.linkedin.com/company/ect-us">Follow us on LinkedIn</a></button>
                        </div>
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
      metaInfo: {
          title:'Rapid Response Medical Insights',
          titleTemplate: '%s - Our Team',
          meta: [
              {vmid:"description", name:"description", content:"Rapid Response team. Why do Fortune 500 and Small Businesses choose to partner with ECT Technologies."}
          ]
      },
      props: {
        msg: String
      },
    components: {
        Header,
        EctFeature,
        RnRFooter
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row{
        margin-top: 3em;
        margin-bottom: 3em;
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

    button.btnSeeDemo {
        margin: 15px;
        background-color: red;
        border-radius: 6px;
        color:white; 
        border-color: red;
        font-size: 18px;
        width: 160px;
        height: 45px;
    }

    button.btnfollowLinkedIn {
        margin: 15px;
        background-color: red;
        border-radius: 6px;
        color:white; 
        border-color: red;
        font-size: 18px;
        width: 190px;
        height: 45px;
    }

    button.btnfollowLinkedIn a {
        color: white;
    }

    .copyText {    
        vertical-align: top;
        margin: 15px 0 0 0;
        text-align: left;
        padding: 2px 2px 5px 2px;
        color: #6d6e70;
        font: 24px tahoma;   
    }
    .copyText a {
        color: red;
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
    #ourcustomersimg {
        position: relative;
         margin-left:50%;
         margin-right:50%;
         transform: translateX(-50%);
    }
</style>
