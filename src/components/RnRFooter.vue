<template>
    <div class="RnRFooter container">
        <hr>
        <div class="row text-left">
            <div class="col-9 offset-3"> <h3>For the latest, follow us on LinkedIn <router-link to="https://www.linkedin.com/in/richardwolsson/"><img id="footerLinkedIn" src="../img/redlinkedin612x612.png" /></router-link></h3></div>
        </div>
        <div class="row text-left">
            <div class="col-9 offset-3"><h3>Schedule your Free Consult<img id="footerPhone" src="../img/redphone256x256.png"/></h3></div>
        </div>
        <div class="row text-left">
            <div class="col-9 offset-3 "><span >Contact Us</span> <b class="Black">(888) 843-5691</b> | <a class="ECTEmail" href="mailto:solutions@ecttechnologies.com">solutions@ecttechnologies.com</a></div>
        </div>
        <div class="row text-left">
            <div class="col-9 offset-3">
                <nav id="footerNavLinks">
                        <router-link to="/"><span><a href="#">Home</a></span></router-link>
                        |
                        <router-link to="/features"><span><a href="#">Features</a></span></router-link>
                        |                   
                        <router-link to="/plans"><span><a href="#">Plans</a></span></router-link>
                        |                              
                        <router-link to="/ourteam"><span><a href="#">Our Team</a></span></router-link>
                        |                   
                        <router-link to="/"><span><a href="#">Login</a></span></router-link>           
                    <!-- <ul>
                        <li><a href="#">Features</a></li>
                        <li>|</li>                   
                        <li><a href="#">Plans</a></li>
                        <li>|</li>                              
                        <li><a href="#">Our Team</a></li>
                        <li>|</li>                   
                        <li><a href="#">Support</a></li>
                        <li>|</li>                   
                        <li><a href="#">Login</a></li>
                    </ul>     -->
                </nav>
            </div>
        </div>        
        <div class="row text-left">
            <div class="col-9 offset-3"> &#169; ECT Technologies LLC. All Rights Reserved</div>
        </div>
        <!-- <div class="row text-left">
            <div class="col-9 offset-3">
            <p> 
                <nav>
                    <span>Terms of Use</span>
                    |           
                    <span>Privacy</span>
                    |           
                    <span>Contact Us</span>                    
                </nav>
            </p>
            </div>
        </div> -->
    </div>
</template>

<script>

export default {
    name: 'RnRFooter',
    props: {
       
    },
    components: {
       
    }
}
</script>
<style scoped>
    hr {
        margin: 6rem 0rem;
    }
    .RnRFooter {
        margin: 4rem 0rem; 
        font-size: 18px;        
        color: gray;
        text-align: center;
        font-family: 'Indie Flower','Amatic SC','Handlee','Damion', cursive;
    }
    .RnRFooter a {
        color: gray;
    }
    
    .Black {
        color:black;
    }

    #footerNavLinks ul {    
    list-style:none;
    padding-left: 0px;
    /* text-align: left; */
    /* vertical-align: text-top; */
    }

    #footerNavLinks ul li {    
    /* width:auto;    */
    cursor:pointer;   
    display:inline-block;
    
    }

    #footerNavLinks ul li a{
    /* padding:5px 15px;     */
    
    color: #808080;
    display:inline-block;
    text-decoration:none;
    }

    #footerLinkedIn{      
        width: 30px;
        height: 30px;
        margin-left: .4rem;
    }
   #footerPhone{
      
        width: 30px;
        height: 30px;
        margin-left: .4rem;
    }
</style>