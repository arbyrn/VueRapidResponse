<template>
    <div class="RnRFooter container">
        <div class="row text-left">
            <div class="col-9 offset-3"> <h2>For the latest, follow us on<img id="footerLinkedIn" src="../img/redlinkedin612x612.png" /></h2></div>
        </div>
        <div class="row text-left">
            <div class="col-9 offset-3"><h2>Schedule your Free Consult<img id="footerPhone" src="../img/redphone256x256.png"/></h2></div>
        </div>
        <div class="row text-left">
            <div class="col-9 offset-3 "><span class="FooterScript">Contact Us</span> <b class="Black">(888) 843-5691</b> | <a class="ECTEmail" href="mailto:solutions@ecttechnologies.com">solutions@ecttechnologies.com</a></div>
        </div>
        <div class="row text-left">
            <div class="col-9 offset-3">
                <nav id="footerNavLinks">
                    <span><a href="#">Features</a></span>
                        |                   
                        <span><a href="#">Plans</a></span>
                        |                              
                        <span><a href="#">Our Team</a></span>
                        |                   
                        <span><a href="#">Support</a></span>
                        |                   
                        <span><a href="#">Login</a></span>               
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
        <div class="row text-left">
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
        </div>
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
<style>
    
    .RnRFooter {
        margin-top: 4rem; 
        font-size: 24px;        
        color: gray;
        text-align: center;
        font-family: 'Indie Flower','Amatic SC','Handlee','Damion', cursive;
    }
    .RnRFooter a {
        color: gray;
    }
    
    .FooterScript {
        font-size: 2rem;
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