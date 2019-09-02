<template>
  <div id="app">
    <navbar></navbar>
    <facebookinfo></facebookinfo>
    <pagefooter> </pagefooter>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import facebookinfo from './components/facebookinfo.vue'
import pagefooter from './components/pagefooter.vue'

export default {
  components: {
    navbar,
    facebookinfo,
    pagefooter
  }
}
</script>

<style>

</style>
