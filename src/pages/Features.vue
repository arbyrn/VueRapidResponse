<template>
    <div>
        <Header></Header>
        <div class="homeContent">            
                <div class="Header">Features <span class="grey">and Benefits</span>
                </div>
                <div class="Content">
                    Rapid Response Insights will sepearate the medical insights fro the cacophony of data so you can react and respond faster than your pharmaceutical competitors.
                </div>            
                <br>
                <div id="HowItWorks" class="containter">
                    <div class="row">
                        <div class="col-md-12"><H1>How it Works</H1></div>
                    </div>
                    <div class="row align-items-center">                    
                        <div class="col-md-3">
                            <!-- <img src="http://via.placeholder.com/200x250"/> -->
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
                            <!-- <img src="http://via.placeholder.com/200x250"/> -->
                            <div id="InsightCollToolDiv" class="align-middle">
                                <span>INSIGHT</span>
                                <br>
                                <span><b>COLLECTION</b></span>
                                <br>
                                <span>TOOL</span>
                                <br>
                                <button>See Benefits</button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <!-- <img src="http://via.placeholder.com/200x250"/> -->
                            <div id="InsightAnalysisToolDiv">
                                <span>INSIGHT</span>
                                <br>
                                <span><b>ANALYSIS</b></span>
                                <br>
                                <span>PORTAL</span>
                                <br>
                                <button>See Benefits</button>
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
                            <button class="btnSeeDemo rounded-3">See a Demo</button>
                        </div>
                                        
                    </div>
                    <hr>
                </div>
            </div>
        <EctFeature card="RealTime"></EctFeature>
        <EctFeature card="MedStrategy"></EctFeature>
        <RnRDivider dividerId="8"></RnRDivider>
        <EctFeature card="Customizable"></EctFeature>
        <EctFeature card="MeanInsights"></EctFeature>
        <EctFeature card="FastMods"></EctFeature>
        <RnRDivider dividerId="2"></RnRDivider>
        <EctFeature id="collection"  card="CollectAnywhere"></EctFeature>
        <EctFeature card="SSO"></EctFeature>
        <EctFeature card="SupportingDocs"></EctFeature>
        <RnRDivider dividerId="3"></RnRDivider>       
        <EctFeature card="MultiDevice"></EctFeature>        
        <EctFeature card="Templates"></EctFeature>
        <RnRDivider dividerId="7"></RnRDivider>
        <EctFeature card="RealTimeReports"></EctFeature>
        <EctFeature card="Translation"></EctFeature>
        <EctFeature card="InsightComments"></EctFeature>
        <RnRDivider dividerId="4"></RnRDivider>
        <EctFeature card="AI"></EctFeature>
        <EctFeature card="DocLibrary"></EctFeature>
        <EctFeature card="Exporting"></EctFeature>
        <RnRDivider dividerId="5"></RnRDivider>
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
    }
    .btnSeeDemo {
        margin: 15px;
        background-color: red;
        border-radius: 6px;
        color:white;
        border-color: red;
        font-size: 20px;
        width: 140px;
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
        left: -30px;
        top: 40px;
       
    }
    #InsightCollToolDiv button {
        background-color: white;
        margin-bottom: 5px;
        border: 1px solid black;
        font-size: 12px;
    }
    #InsightAnalysisToolDiv{
        color: white;
        border: 2px solid red;
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
        left: -30px;
        top: 40px;
    }
    #InsightAnalysisToolDiv::after{
        display:inline-block;
        width: 85px;
        height: 65px;        
        content:"";
        background: url('../img/greyredarrow.png') no-repeat 0 0;
        background-size: 100%;        
        position: absolute;
        left: 160px;
        top: 40px;
    }
    
    #InsightAnalysisToolDiv button {
        background-color: white;
        margin-bottom: 5px;
        border: 1px solid red;
        font-size: 12px;
    }

    
</style>
