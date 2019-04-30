import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Features from '../pages/Features.vue'
import Plans from '../pages/Plans.vue'
import OurTeam from '../pages/OurTeam.vue'
import CTAPage from '../pages/CTAPage.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    },
    {
      path: '/plans',
      name: 'Plans',
      component: Plans
    },
    {
      path: '/ourteam',
      name: 'OurTeam',
      component: OurTeam
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy
    },
    {
      path: '/ctapage',
      name: 'CTAPage',
      component: CTAPage
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
          return { selector: to.hash }
      } else if (savedPosition) {
          return savedPosition;
      } else {
          return { x: 0, y: 0 }
      }
  }
})