<template>
  <div>
    <b-navbar toggleable="sm" variant="white">
      <b-navbar-brand href="#">
        <router-link :to="{ name: 'Home' }">
          <img class="ectLogo" alt="ECT logo" src="../img/ect_logo_redblk.gif" />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown text="Features" right>
            <b-dropdown-item to="/features">How it Works</b-dropdown-item>
            <b-dropdown-item href="/features#collection">Collection</b-dropdown-item>
            <b-dropdown-item href="/features#analysis">Analysis</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Plans" right>
            <b-dropdown-item to="/plans">Plans</b-dropdown-item>
            <b-dropdown-item href="/plans#PilotProgram">Pilot</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/ourteam">Our Team</b-nav-item>
          <b-nav-item-dropdown text="Login" right>
            <b-dropdown-item
              href="https://insights.rapidresponseinsights.com"
              target="_blank"
            >Collection Tool</b-dropdown-item>
            <b-dropdown-item
              href="https://analysis.rapidresponseinsights.com"
              target="_blank"
            >Analysis Tool</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ectLogo {
  width: 120px;
  height: 120px;
}
.ectMenu {
  font-size: 24px;
  font-weight: 600;
}
#nav_collapse {
  font-size: 24px;
  font-weight: 600;
}
a {
  color: #6d6e70;
}
</style>
