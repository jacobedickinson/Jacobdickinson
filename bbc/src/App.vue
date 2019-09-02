<template>
  <div id="app">
    <navbar/>
    <newsbody/>
    <bottomnews/>
    <colourlabels/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import newsbody from './components/newsbody.vue'
import bottomnews from './components/bottomnews.vue'
import colourlabels from './components/colourlabels.vue'
export default {
  name: 'app',
  components: {
    navbar,
    newsbody,
    bottomnews,
    colourlabels
  }
}
</script>

<style>
#app{
  font-family: ReithSans,Arial,Helvetica,freesans,sans-serif;
}

</style>
