<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <!-- HOME SECTION -->
      <div class="section section--header gradient-home">
        <MainSection/>
        <div class="section__next">
          <div class="next" @click="$refs.fullpage.api.moveSectionDown()">
            <span>Try it</span>
            <img src="./assets/images/arrow-down.svg" alt="">
          </div>
        </div>
      </div>
      <!-- END -->
      <!-- VIDEO SECTION -->
      <div class="section gradient-video">
        <VideoSection/>
        <div class="section__next">
          <div class="next" @click="$refs.fullpage.api.moveSectionDown()">
            <img src="./assets/images/arrow-down.svg" alt="">
          </div>
        </div>
      </div>
      <!-- END -->
      <!-- HOWITWORKS SECTION -->
      <div class="section gradient-works">
        <HowSection/>
        <div class="section__next">
          <div class="next" @click="$refs.fullpage.api.moveSectionDown()">
            <img src="./assets/images/arrow-down.svg" alt="">
          </div>
        </div>
      </div>
      <!-- END -->
    </full-page>
  </div>
</template>

<script>
import MainSection from './sections/01_MainSection.vue'
import VideoSection from './sections/02_VideoSection.vue'
import HowSection from './sections/03_HowSection.vue'

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
    MainSection,
    VideoSection,
    HowSection
  }
}
</script>
