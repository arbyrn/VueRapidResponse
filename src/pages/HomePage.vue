<template>
    <div>
        <Header></Header>
        <div class="homeContent">            
            <div class="Header"><span class="grey">Transforming</span> Insights <span class="grey">into</span> Actions</div>
                           
            <div class="Content">
                Collect, analyze and act on Medical Affairs Medical Insights faster and better than your competitors, without breaking your budget.
            </div> 
            <div class="row">
                <div class="col-4 offset-4"><b-button class="btnSeeDemo" to="/ctapage">Free Consultation</b-button></div>               
            </div>
            <div class="row">    
                 <div class="col-4 offset-4"><span class="ourNumber">(888) 843-5691</span></div>                
            </div>
        </div>
        <hr>
        <EctFeature card="RealTime"></EctFeature>
        <EctFeature card="MedStrategy"></EctFeature>
        <EctFeature card="CycleTime"></EctFeature>        
        <RnRFooter></RnRFooter>
    </div>
</template>
<script>

    import Header from '../components/Header.vue'
    import EctFeature from '../components/EctFeature.vue'
    import RnRDivider from '../components/RnRDivider.vue'
    import RnRFooter from '../components/RnRFooter.vue'
   
 
export default {
      name: 'HomePage',
      metaInfo: {
          title:'Rapid Response Medical Insights',
          titleTemplate: '%s | Rapid Response Medical Insights - Home',
          meta: [
              {vmid:"description", name:"description", content:"Collect, analyze and act on Medical Affairs Medical Insights faster and better than your competitors, without breaking your budget."}
          ]
      },
      props: {
        msg: String
      },
      data(){
          return { thistest: "this is something to return"};
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
    /* div {
        background-color: #FC7F7F;
    } */
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
        padding-top: 1px;
        background-color: red;
        border-radius: 6px;
        color:white;
        border-color: red;
        font-size: 18px;
      
        width: 150px;
        height: 55px;
    }

    .ourNumber {
        font-size: 22px;
        font-weight: 700;
        color: black;
    }

    
</style>
