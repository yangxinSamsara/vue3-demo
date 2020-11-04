<template>
<img alt="Vue logo" src="./assets/logo.png" />
<div class="demo">
  <p>{{ a }}
    <van-button type="primary" size="large" @click="incrementA">a ++</van-button>
  </p>
  <p>{{ objA.name + '===>' + objA.age }}</p>
</div>
<HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import {
  reactive,
  ref,
  watchEffect,
  onMounted
} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    console.log('this', this)
    onMounted(() => {
      console.log('onMounted this', this)
    })
    const a = ref(0)
    const objA = reactive({
      name: 'tom',
      age: 18
    })
    const incrementA = () => {
      a.value++
    }
    watchEffect(() => {
      console.log('change', a.value)
    })
    return {
      a,
      objA,
      incrementA
    }
  }
}
</script>

<style lang="css">
.demo {
  width: 300px;
  margin: 0 auto;
  border: 1px solid black;
}
</style>
