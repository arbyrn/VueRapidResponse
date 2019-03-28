<template>
    <div>
        <b-navbar toggleable="sm" variant="white">
            <b-navbar-brand href="#">
                <router-link :to="{ name: 'Home' }">
                    <img class="ectLogo" alt="ECT logo" src="../img/ect_logo_redblk.gif">
                </router-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"/>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Features" right>
                        <b-dropdown-item href="#">    
                            <router-link to="/features">How it Works</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="#"><router-link to="/features#collection" >Collection</router-link></b-dropdown-item>
                        <b-dropdown-item href="#"><router-link to="/features#analysis" >Analysis</router-link></b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Plans" right>
                        <b-dropdown-item href="#">
                            <router-link to="/plans">Plans</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                            <router-link to="/plans#PilotProgram">Pilot</router-link>
                            </b-dropdown-item>
                        <b-dropdown-item href="#">FAQ</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="#"><router-link to="/ourteam">Our Team</router-link></b-nav-item>
                        
                    <b-nav-item href="#">Support</b-nav-item>
                    <b-nav-item href="#">Login</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ectLogo{
        width:120px;
        height:120px;
    }
    .ectMenu{
        font-size:24px;
        font-weight:600;
    }
    #nav_collapse {
        font-size:24px;
        font-weight:600;
    }
    a {
        color:#6D6E70;
    }
</style>
