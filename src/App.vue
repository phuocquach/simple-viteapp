<template>
  <Overlay></Overlay>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Overlay from './components/Overlay.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Overlay
  }
}
</script>
