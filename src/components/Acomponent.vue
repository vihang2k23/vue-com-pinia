<!-- state become ref
Getter become Computed Property
Actions become Methods/Function  -->

<script setup>
import { useCounterStore } from '../store/counter';

const store = useCounterStore()
// console.log(store);
</script>

<template>
 
<div>
 <h1>Pinia With Setup Store </h1>
<!-- state  -->
 <h1> Count :: {{ store.count }}</h1>

<!-- Actions -->
 <button @click="store.increment"> + </button>
 <button @click="store.decrement"> - </button>
<button @click="store.$reset">reset state</button>
 <!--Getters-->
 
 <h1 > Multiple Count with 2 = {{ store.doubleCount }}</h1>
</div>
</template>

<style scoped>

</style>
