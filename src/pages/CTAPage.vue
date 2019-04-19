<template>
    <div id="CTAFormPage" class="container">
            <div class="row align-items-center">
                <div class="col-2 offset-2">
                    <router-link :to="{ name: 'Home' }">
                        <div class="ectLogo" to="/"><img alt="ECT logo" src="../img/ect_logo_redblk.gif"></div>
                    </router-link>
                </div>
                <div class="homeContent col-8">            
                    <div class="Header"><span class="grey"><h1>Rapid Response Insights</h1></span>
                    </div>
                </div>
            </div>
            <div >
                <div class="row">
                    <div id="CTAScrollContainer" class="col-md-5">
                        <div class="row align-items-center"> 
                            <div class="col-sm-12 "> <CTAScroll></CTAScroll></div>                            
                        </div>
                    </div>
                    <div id="CTASpace" class="col-md-1"></div>
                    <div id="CTAForm" class="col-md-5">
                        <div class="col-sm-12 "><CTAForm></CTAForm></div>    
                    </div>
                </div>
            </div>
            <RnRFooter></RnRFooter>
        </div>
</template>
<script>
    import RnRFooter from "../components/RnRFooter.vue"
    import CTAForm from "../components/CTAForm.vue"
    import CTAScroll from "../components/CTAScroll.vue"
    export default {
        name: "CTAPage",
        metaInfo: {
          title:'Rapid Response Medical Insights',
          titleTemplate: '%s - Get more information',
          meta: [
              {vmid:"description", name:"description", content:"Get more information on Rapid Response Medical Insights which help to Collect, analyze and act on Medical Affairs Medical Insights faster and better than your competitors, without breaking your budget."}
          ]
      },
        components: {
            RnRFooter,
            CTAForm,
            CTAScroll
        }
    }
</script>
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
    
    #CTAScrollContainer {
        background-color:#fc7f7f;
        /* background:white; */
        border-radius: 50px;
    }

    #CTAForm {
        border: 2px solid lightgray;
        border-radius: 50px;
        height: auto;
        
    }
    /* #CTAFormPage{
        background:#fc7f7f;
    } */
    .ectLogo img{
        width:100%
    }
    .ectLogo, CTAForm .ectMenu {
        display:inline-block;
    }
    
</style>