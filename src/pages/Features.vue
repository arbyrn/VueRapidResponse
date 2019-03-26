<template>
    <div>
        <Header></Header>
        <div class="homeContent">            
            <div class="Header"><span class="grey">Transforming</span> Insights <span class="grey">into</span> Actions
                <div class="Content">
                    Features Page
                </div>            
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
</style>
