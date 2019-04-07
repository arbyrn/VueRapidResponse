<template>
    <div id="Plans">
            <Header></Header>
            <div class="homeContent">            
                <div class="Header">Affordable<span class="grey"> and Scalable Plans</span>
                </div>
                <div class="Content">
                    <b>Rapid Response Insights</b> is the most cost-effective platform in the pharmaceutical medical insights market.
                </div>
            </div>
            <div>
                <img class="targetImage" alt="target" src="../img/target.png"/>
            </div>
            <div class="container">
                <div id="TableSection row">
                    <div class="col-md-12">
                        <table id="plansTable">
                            <thead>
                            <tr><th>Tier:</th><th>Single TA</th><th>Multiple TA</th><th>Enterprise</th></tr>
                            </thead>
                            <tr> <td>Theraputic Areas:</td><td>1</td><td>2</td><td>3 or more</td></tr>
                            <tr> <td>Annual Insights:</td><td> &lt; 10,000</td><td>10,000 - 20,0000</td><td> &gt; 20,000</td></tr>
                            <tr> <td></td><td colspan="3"><div class="RequestInfo">Request more Info</div></td></tr>
                            <tr> <td>Unlimited Users</td><td class="Red"> &#x2714;</td><td class="Red">&#x2714;</td><td class="Red"> &#x2714;</td></tr>
                            <tr> <td>Hosting and Backup</td><td class="Red"> &#x2714;</td><td class="Red">&#x2714;</td><td class="Red"> &#x2714;</td></tr>
                            <tr> <td>Support and Maintentance</td><td class="Red">&#x2714;</td><td class="Red">&#x2714;</td><td class="Red"> &#x2714;</td></tr>
                            <tr> <td>Additional User On Boarding</td><td class="Red"> &#x2714;</td><td class="Red">&#x2714;</td><td class="Red"> &#x2714;</td></tr>
                            <tr> <td>Collection Field Value Changes</td><td class="Red">&#x2714;</td><td class="Red">&#x2714;</td><td class="Red"> &#x2714;</td></tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="container">
                <div id="PilotProgram" class="row">
                    <div class="col-md-9 text-left">
                        <h2><img class="targetImage" alt="target" src="../img/target.png"/>Pilot Program</h2>
                        <p class="copyText">Want to give Rapid Response Insights a test drive before commiting to an annual contract? Test the program for 3 months
                            and the fee will be applied to your implementation.
                            </p>
                    </div>
                    <div class="col-md-3">
                        <h1>Try it out</h1>
                        <p>3-Month Pilot</p>
                        <router-link to="/ctapage"><button class="btnSeeDemo">Learn More</button></router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <img id="redGlassesImg" src="../img/redglasses.jpg" alt="reading glasses">
                    </div>
                    <div class="col-md-6 copyText">
                        <b>Want to know more?</b>
                        <p class="copyText">For more information about plans, pricing and evaluating your organization for a pilot program, schedule a freee consult.
                            
                        </p>
                    <router-link to="/ctapage"><button to="/ctapage" class="btnSeeDemo rounded-3">See a Demo</button></router-link>
                    </div>
                </div>
            </div>
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

    .Content{
        font: 28px tahoma;
        color:gray;
        text-align: justify;
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
    
    .RequestInfo{
        border: 2px solid red;
        border-radius: 10px;
        background-color: RGBA(256, 0, 0, .25);
        color: red;
        margin: 2px 7px 2px 7px;
    }

    .targetImage{
        width: 70px;
        height: 70px;
    }

    #plansTable{        
        margin-bottom: 100px;
        font-size: 20px;
    }

    #plansTable td {
        border: 1px solid black;         
        width: 12rem;
        height: 3rem;
    }
    #plansTable tr:nth-child(n+5) {        
        font-size: 16px;       
    }
    #plansTable tr td:nth-child(1), #plansTable tr th:nth-child(1) {
        border: 0px solid white;
        text-align: right;
        width:15rem;
    }
    #PilotProgramSection{
        margin-bottom: 100px;
    }
    #redGlassesImg{
        margin: 0px;
        border-radius: 20px;
        height: 200px;
        width: 300px;
    }
</style>