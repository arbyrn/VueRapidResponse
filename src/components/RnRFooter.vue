<template>
    <div class="RnRFooter container">
        <div class="row">
            <div class="col-12"> <h1>For the latest, follow us on</h1></div>
        </div>
        <div class="row">
            <div class="col-12"><h2>Schedule your Free Consult</h2></div>
        </div>
        <div class="row">
            <div class="col-12"><p>Contact Us <b>(888) 843-5691</b> | <a class="ECTEmail" href="mailto:solutions@ecttechnologies.com">solutions@ecttechnologies.com</a></p></div>
        </div>
        <div class="row">
            <div class="col-10 offset-2">
                <nav id="footerNavLinks">                
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li>|</li>                   
                        <li><a href="#">Plans</a></li>
                        <li>|</li>                              
                        <li><a href="#">Our Team</a></li>
                        <li>|</li>                   
                        <li><a href="#">Support</a></li>
                        <li>|</li>                   
                        <li><a href="#">Login</a></li>
                    </ul>    
                </nav>
            </div>
        </div>        
        <div class="row">
            <div class="col-12"><p> &#169 ECT Technologies LLC. All Rights Reserved</p></div>
        </div>
        <div class="row">
            <div class="col-12">
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
        font-size: 24px;
        line-height: 16px;
        color: gray;
        text-align: center;
        font-family: 'Indie Flower','Amatic SC','Handlee','Damion', cursive;
    }

    /* #footerNavLinks {
        text-align:left;
    } */

    #footerNavLinks ul {    
    list-style:none;
    text-align: left;
    vertical-align: text-top;
    }

    #footerNavLinks ul li {    
    width:auto;   
    cursor:pointer;   
    display:inline-block;
    
    }


    /* #footerNavLinks ul li:hover {    
        position:relative;
    } */

    #footerNavLinks ul li a{
    padding:5px 15px;    
    color: #808080;
    display:inline-block;
    text-decoration:none;
    }
</style>