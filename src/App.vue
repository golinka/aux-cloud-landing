<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section section--header gradient-home">
        <MainSection/>
      </div>
      <div class="section">
        <MainSection/>
      </div>
    </full-page>
  </div>
</template>

<script>
import MainSection from './sections/01_MainSection.vue'

export default {
  name: 'app',
  data () {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        scrollOverflow: true
      }
    }
  },
  components: {
    MainSection
  }
}
</script>
