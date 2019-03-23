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
        <EctFeature card="CollectAnywhere"></EctFeature>
        <EctFeature card="SSO"></EctFeature>
        <EctFeature card="SupportingDocs"></EctFeature>
        <EctFeature card="MultiDevice"></EctFeature>
        <EctFeature card="Templates"></EctFeature>
    
        
    </div>
</template>
<script>

    import Header from '../components/Header.vue'
    import EctFeature from '../components/EctFeature.vue'
 
export default {
      name: 'Features',
      props: {
        msg: String
      },
    components: {
        Header,
        EctFeature
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
