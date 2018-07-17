import Vue from 'vue'
import TimelineVue from './components/timeline.vue'

document.addEventListener('DOMContentLoaded', () => {
    const App = new Vue({
        el: document.getElementById('app'),
        render: h => h(TimelineVue),
    })
})
