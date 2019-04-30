<template>
    <div>
        <Header></Header>
        <div class="homeContent container">            
            <div class="Header row">
                <div class="col-12">
                    Rapid Response Insights Privacy Policy
                </div>
            </div>    
            <hr>           
            <div class="Content row">
                <div class="col-12">
                    <h3><b>Privacy Policy</b></h3>
                    <h3> Last updated: April 30th, 2019</h3>
                    <p>Our Company "ECT LLC" operates http://www.RapidResponseInsights.com. This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
                        We use your Personal Information only for contacting you and other anonymous information for improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
                    <strong>We do not send or sell your information to anyone.</strong>
                    </p>
                    <h3><b>Information Collection And Use</b></h3>
                    <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, your email address,
                    your company name, and your phone number.
                    </p>
                    <h3><b>Log Data</b></h3>
                    <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
                    This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
                    In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this information.
                    </p>
                    <h3><b>Communications</b></h3>
                    <p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that you provided us with, during the request for further contact.
                    </p>
                    <h3><b>Cookies</b></h3>
                    <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
                    We do not use cookies on "www.RapidResponseInsights.com", but may in the future. Like many sites, we may use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                    </p>
                    <h3><b>Security</b></h3>
                    <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                    </p>
                    <h3><b>Changes To This Privacy Policy</b></h3>
                    <p>This Privacy Policy is effective as of 01/01/2019 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                    We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                    If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
                    </p>
                    <h3><b>Contact Us</b></h3>
                    <p>If you have any questions about this Privacy Policy, please contact us. 
                    </p>
                </div>
            </div>
        </div>          
        <RnRFooter></RnRFooter>
    </div>
</template>
<script>

    import Header from '../components/Header.vue'
    import RnRFooter from '../components/RnRFooter.vue'
   
 
export default {
      name: 'PrivacyPage',
      metaInfo: {
          title:'Rapid Response Medical Insights - Privacy Policy',
          titleTemplate: '%s | Rapid Response Medical Insights - Privacy Policy',
          meta: [
              {vmid:"description", name:"description", content:"Collect, analyze and act on Medical Affairs Medical Insights faster and better than your competitors, without breaking your budget. Privacy Policy"}
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
        /* max-width:780px; */
    }
    .Header .grey{
        color:gray;
    }
    .Content{
        font: 18px tahoma;
        color:gray;
        text-align: justify;
    }

</style>
