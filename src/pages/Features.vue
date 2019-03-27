<template>
    <div>
        <Header></Header>
        <div class="homeContent">            
                <div class="Header">Features <span class="grey">and Benefits</span>
                </div>
                <div class="Content">
                    Rapid Response Insights will sepearate the medical insights fro the cacophony of data so you can react and respond faster than your pharmaceutical competitors.
                </div>            
            
                <div id="HowItWorks" class="containter">
                    <div class="row">
                        <div class="col-md-12"><H1>How it Works</H1></div>
                    </div>
                    <div class="row">                    
                        <div class="col-md-3">
                            <!-- <img src="http://via.placeholder.com/200x250"/> -->
                            <h1 class="Black">Insights</h1>
                            <p>Clinical Trials</p>
                            <p>Thought Leaders</p>
                            <p>Competitors</p>
                            <p>Presentations</p>
                            <p>Policy/Guidelines</p>
                            <p>Research</p>
                        </div>
                        <div class="col-md-3">
                            <!-- <img src="http://via.placeholder.com/200x250"/> -->
                            <div id="InsightCollToolDiv">
                                <p>Insight</p>
                                <h2>Collection</h2>
                                <p>Insight</p>
                                <button>See Benefits</button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <!-- <img src="http://via.placeholder.com/200x250"/> -->
                            <div id="InsightAnalysisToolDiv">
                                <p>Insight</p>
                                <h2>Analysis</h2>
                                <p>Insight</p>
                                <button>See Benefits</button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h1 class="Black">Actions</h1>
                            <p>Strategy</p>
                            <p>Tactics</p>
                            <p>Medical Plans</p>
                            <p>ISRs</p>
                            <p>Communications</p>
                            <p>and more</p>
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
        <EctFeature card="Customizable"></EctFeature>
        <EctFeature card="MeanInsights"></EctFeature>
        <EctFeature card="FastMods"></EctFeature>
        <EctFeature id="collection"  card="CollectAnywhere"></EctFeature>
        <RnRDivider dividerId="2"></RnRDivider>
        <EctFeature card="SSO"></EctFeature>
        <EctFeature card="SupportingDocs"></EctFeature>
        <RnRDivider dividerId="3"></RnRDivider>
        <EctFeature card="MultiDevice"></EctFeature>
        <EctFeature card="Templates"></EctFeature>
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
        background-color: grey;
        border-radius:25px;
    }
    #InsightAnalysisToolDiv{
        color: white;
        border: 2px solid red;
        background-color: grey;
        border-radius:25px;
    }
</style>
