<template>
    <div>
        <Header></Header>
        <div class="homeContent">            
            <div class="Header"><span class="grey">Transforming</span> Insights <span class="grey">into</span> Actions
                <div class="Content">
                    Collect, analyze and act on Medical Affairs Medical Insights faster and better than your competitors, without breaking your budget.
                </div>            
            </div>
            <div class="row">
                <div class="col-4 offset-4"><button class="btnSeeDemo rounded-3">Free Consult</button></div>               
            </div>
            <div class="row">    
                 <div class="col-4 offset-4"><span class="ourNumber">(888) 843-5691</span></div>                
            </div>
        </div>
        <hr>
        <EctFeature card="RealTime"></EctFeature>
        <EctFeature card="MedStrategy"></EctFeature>
        <EctFeature card="CycleTime"></EctFeature>        
        <RnRDivider dividerId="1"></RnRDivider>
        <EctFeature card="RealTime"></EctFeature>
        <EctFeature card="Customizable"></EctFeature>
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

    .ourNumber {
        font-size: 22px;
        font-weight: 700;
        color: black;
    }

    
</style>
