import Vue from 'vue'
import Router from 'vue-router'
import PdfVuer from '@/components/PdfVuer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PdfVuer',
      component: PdfVuer
    }
  ]
})
