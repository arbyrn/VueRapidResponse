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
                        <div class="col-lg-2 col-md-12">
                            <h1 class="Black">Insights</h1>
                            <ul class="howitworkslist insights">
                                <li>Clinical Trials</li>
                                <li>Thought Leaders</li>
                                <li>Competitors</li>
                                <li>Presentations</li>
                                <li>Policy/Guidelines</li>
                                <li>Research</li>
                            </ul>
                           
                        </div>
                        <div class="col-lg-1 col-md-12 arrow arrow1">
                            <img :src="getImgUrl('greyblackarrow.png')" />
                        </div>
                        <div class="col-lg-2 col-md-12">
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
                        <div class="col-lg-1 col-md-12 arrow arrow2">
                            <img :src="getImgUrl('greyblackarrow.png')" />
                        </div>
                        <div class="col-lg-2 col-md-12">
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
                        <div class="col-lg-1 col-md-12 arrow arrow3">
                            <img :src="getImgUrl('greyblackarrow.png')" />
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <h1 class="Black">Actions</h1>
                            <ul class="howitworkslist actions">
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
      metaInfo: {
          title:'Rapid Response Medical Insights',
          titleTemplate: '%s - Features',
          meta: [
              {vmid:"description", name:"description", content:"Features of Rapid Response Medical Insights tools, Collect, analyze and act on Medical Affairs Medical Insights faster and better than your competitors, without breaking your budget."}
          ]
      },
      props: {
        msg: String
      },
    components: {
        Header,
        EctFeature,
        RnRDivider,
        RnRFooter
    },
    mounted(){
        var a = 1;
    },
    methods: {
        getImgUrl(pic) {
                if (pic != ''){
                    return require('../img/' + pic);
                }               
            }
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
        animation: FadeIn 2s 1;
        -webkit-animation: FadeIn 2s 1;
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
    }
    .howitworkslist.insights {
        animation-delay: 1.5s;
    }
    .arrow {
         animation: FadeIn 2s 1;
        -webkit-animation: FadeIn 2s 1;
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
    }
    .arrow1 {          
        animation-delay: 3.5s;
    }
    .arrow img {          
        width: 75px;
        height: 60px;
    }

    #InsightCollToolDiv{
        color: white;
        font-family: TimesNewRoman;
        font-size: 18px;
        background-color: grey;
        border-radius:25px;
        width: 160px;
        height: 140px;
         animation: FadeIn 2s 1;
        -webkit-animation: FadeIn 2s 1;
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
        animation-delay: 5.5s;
        padding-top: 15px;
        margin: 8px auto 8px auto;
    }

     .arrow2{   
        animation-delay: 6s;
    }
    #InsightAnalysisToolDiv{
        color: white;
        font-family: Arial;
        font-size: 18px;
        background-color: grey;
        border-radius:25px;
        width: 160px;
        height: 140px;
        padding-top: 15px;
        -webkit-animation: FadeIn 2s 1; /* Chrome, Safari, Opera */
        animation: FadeIn 2s 1;
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
        animation-delay: 8s;
        margin: 8px auto 8px auto;
    }

    .arrow3{
        animation-delay: 9s;
    }

    .howitworkslist.actions {
        animation-delay: 11s;
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

    @keyframes FadeIn { 
        0% {
            opacity: 0;
            transform: scale(.1);
        }

        85% {
            opacity: 1;
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

@media all and (max-width: 923px){
    .arrow img {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    }
}
</style>
