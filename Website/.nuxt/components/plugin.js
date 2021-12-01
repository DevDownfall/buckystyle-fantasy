import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CookieConsent: () => import('../..\\components\\CookieConsent.vue' /* webpackChunkName: "components/cookie-consent" */).then(c => wrapFunctional(c.default || c)),
  Dropdown: () => import('../..\\components\\Dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Modal: () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  OptionBox: () => import('../..\\components\\OptionBox.vue' /* webpackChunkName: "components/option-box" */).then(c => wrapFunctional(c.default || c)),
  QuoteCard: () => import('../..\\components\\QuoteCard.vue' /* webpackChunkName: "components/quote-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
