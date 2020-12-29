<template>
<img class="block rounded-lg " alt="Vue logo" src="../assets/images/logo.png" />
  <div class="flex-shrink-0" >
    
  </div>
  <h1>{{ msg }}</h1>
  <button @click="count++">Test count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
