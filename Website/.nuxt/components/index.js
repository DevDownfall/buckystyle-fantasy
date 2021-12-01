import { wrapFunctional } from './utils'

export { default as CookieConsent } from '../..\\components\\CookieConsent.vue'
export { default as Dropdown } from '../..\\components\\Dropdown.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Modal } from '../..\\components\\Modal.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as OptionBox } from '../..\\components\\OptionBox.vue'
export { default as QuoteCard } from '../..\\components\\QuoteCard.vue'

export const LazyCookieConsent = import('../..\\components\\CookieConsent.vue' /* webpackChunkName: "components/cookie-consent" */).then(c => wrapFunctional(c.default || c))
export const LazyDropdown = import('../..\\components\\Dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyModal = import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyOptionBox = import('../..\\components\\OptionBox.vue' /* webpackChunkName: "components/option-box" */).then(c => wrapFunctional(c.default || c))
export const LazyQuoteCard = import('../..\\components\\QuoteCard.vue' /* webpackChunkName: "components/quote-card" */).then(c => wrapFunctional(c.default || c))
