import VueComponentView from './VueComponentView'

import store from 'core/store'
import cocoVueRouter from 'app/core/vueRouter'

import Root from './Root'

export default class SingletonAppVueComponentView extends VueComponentView {

  constructor () {
    // For now we only support the default the default base-flat template
    super(null, {})
  }

  buildVueComponent () {
    this.router = cocoVueRouter()

    return new Vue({
      el: this.$el.find('#site-content-area')[0],

      store,
      router: this.router,

      render: (h) => h(Root)
    })
  }
}
