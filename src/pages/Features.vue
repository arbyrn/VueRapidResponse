<template>
    <div>
        <Header></Header>
        <div class="homeContent">            
                <div class="Header">Features <span class="grey">and Benefits</span>
                </div>
                <div class="Content">
                    Rapid Response Insights will sepearate the medical insights from the cacophony of data so you can react and respond faster than your pharmaceutical competitors.
                </div>            
                <br>
                <div id="HowItWorks" class="containter">
                    <div class="row">
                        <div class="col-md-12"><H1>How it Works</H1></div>
                    </div>
                    <div class="row align-items-center">                    
                        <div class="col-md-3">
                            <h1 class="Black">Insights</h1>
                            <ul class="howitworkslist">
                                <li>Clinical Trials</li>
                                <li>Thought Leaders</li>
                                <li>Competitors</li>
                                <li>Presentations</li>
                                <li>Policy/Guidelines</li>
                                <li>Research</li>
                            </ul>
                           
                        </div>
                        <div class="col-md-3">
                            <div id="InsightCollToolDiv" class="align-middle">
                                <span>INSIGHT</span>
                                <br>
                                <span><b>COLLECTION</b></span>
                                <br>
                                <span>TOOL</span>
                                <br>
                                <a href="#collection">See Benefits</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div id="InsightAnalysisToolDiv">
                                <span>INSIGHT</span>
                                <br>
                                <span><b>ANALYSIS</b></span>
                                <br>
                                <span>PORTAL</span>
                                <br>
                                <a href="#analysis">See Benefits</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h1 class="Black">Actions</h1>
                            <ul class="howitworkslist">
                                <li>Strategy</li>
                                <li>Tactics</li>
                                <li>Medical Plans</li>
                                <li>ISRs</li>
                                <li>Communications</li>
                                <li>and more</li>
                            </ul>                            
                        </div>                
                    </div>
                    <div class="row">                    
                        <div class="col-md-12">
                            <b-button class="btnSeeDemo" to="ctapage">See a Demo</b-button>
                        </div>
                                        
                    </div>
                    <hr>
                </div>
            </div>
        <RnRDivider id="collection" dividerId="8"></RnRDivider>
        <EctFeature card="Customizable"></EctFeature>
        <EctFeature card="MeanInsights"></EctFeature>
        <EctFeature card="FastMods"></EctFeature>
        <RnRDivider dividerId="2"></RnRDivider>
        <EctFeature card="CollectAnywhere"></EctFeature>
        <EctFeature card="SSO"></EctFeature>
        <EctFeature card="SupportingDocs"></EctFeature>
        <RnRDivider dividerId="9"></RnRDivider>       
        <EctFeature card="MultiDevice"></EctFeature>        
        <EctFeature card="Templates"></EctFeature>
        <RnRDivider id="analysis" dividerId="7"></RnRDivider>
        <EctFeature card="RealTimeReports"></EctFeature>
        <EctFeature card="Translation"></EctFeature>
        <EctFeature card="InsightComments"></EctFeature>
        <RnRDivider dividerId="1"></RnRDivider>
        <EctFeature card="AI"></EctFeature>
        <EctFeature card="Trends"></EctFeature>
        <EctFeature card="DocLibrary"></EctFeature>
        <EctFeature card="Exporting"></EctFeature>
        <RnRDivider dividerId="2"></RnRDivider>
        <RnRFooter></RnRFooter>        
    </div>
</template>
<script>

    import Header from '../components/Header.vue'
    import EctFeature from '../components/EctFeature.vue'
    import RnRDivider from '../components/RnRDivider.vue'
    import RnRFooter from '../components/RnRFooter.vue'
 
export default {
      name: 'Features',
      props: {
        msg: String
      },
    components: {
        Header,
        EctFeature,
        RnRDivider,
        RnRFooter
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
    .howitworkslist{
        list-style: none;
        padding:0;
    }
    .btnSeeDemo {
        margin: 15px;
        background-color: #E11B22;
        border-radius: 6px;
        color:white;
        border-color: red;
        font-size: 20px;
        width: 150px;
        height: 45px;
    }
    #InsightCollToolDiv{
        color: white;
        border: 2px solid black;
        font-family: TimesNewRoman;
        font-size: 18px;
        background-color: grey;
        border-radius:25px;
        width: 160px;
        height: 140px;
    }
    #InsightCollToolDiv::before {        
        width: 75px;
        height: 60px;
        background: url('../img/greyblackarrow.png') no-repeat 0 0;
        background-size: 100%;     
        content: "";        
        position: absolute;       
        left: -60px;
        top: 40px;
       
    }
    #InsightCollToolDiv a {
        text-decoration: none;
        background-color: white;
        padding: 3px 3px;
        border: 1px solid black;
        border-radius:3px;
        font-size: 14px;
        text-decoration: none;
        color: initial;
        font-weight:600;
        transition: all 0.5s ease;
    }
    #InsightCollToolDiv a:hover {
        background-color: black;
        color:white;
    }

    #InsightAnalysisToolDiv{
        color: white;
        border: 2px solid r#E11B22;
        font-family: Arial;
        font-size: 18px;
        background-color: grey;
        border-radius:25px;
        width: 160px;
        height: 140px;
    }
    #InsightAnalysisToolDiv::before{
        
        width: 75px;
        height: 60px;
        background: url('../img/blackarrow.png') no-repeat 0 0;
        background-size: 100%;           
        content:"";        
        position: absolute;
        left: -90px;
        top: 40px;
        -webkit-animation: arrowRoll 2s infinite; /* Chrome, Safari, Opera */
        animation: arrowRoll 2s infinite;
    }

    #InsightAnalysisToolDiv::after{
        display:inline-block;
        width: 85px;
        height: 65px;        
        content:"";
        background: url('../img/greyredarrow.png') no-repeat 0 0;
        background-size: 100%;        
        position: absolute;
        left: 200px;
        top: 40px;
    }
    
    #InsightAnalysisToolDiv a {
        background-color: white;
        margin-bottom: 5px;
        border: 1px solid #E11B22;
        border-radius:3px;
        font-size: 12px;
        font-weight:600;
        text-decoration: none;
        padding: 3px 3px;
        color: initial;
        transition: all 0.5s ease;
    }
    #InsightAnalysisToolDiv a:hover {
        background-color: #E11B22;
        color:white;
    }   

    @keyframes arrowRoll
{
    0% {
        left: -120px;
    }
   
    100% {
        left: -50px;
    }
}
</style>
