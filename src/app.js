import Vue from 'vue'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import VueOnsen from 'vue-onsenui'

Vue.use(VueOnsen)

import TimelineVue from './components/timeline.vue'

document.addEventListener('DOMContentLoaded', () => {
    const App = new Vue({
        el: document.getElementById('app'),
        render: h => h(TimelineVue),
    })
})
