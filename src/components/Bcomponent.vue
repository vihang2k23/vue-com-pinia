<!-- state become ref
Getter become Computed Property
Actions become Methods/Function  -->

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

const store = useCounterStore()
// Using destructing using store is not possible 
// here is example for your refrence 
// we can't using destructure like this
// const {count,increment,decrement,doubleCount} = store

// console.log(store);


// destructure like this 

const {count,doubleCount} = storeToRefs(store)
const {increment,decrement} = store
</script>

<template>
 
<div>
 <h1>Pinia With Setup Store using destructing </h1>
 
<!-- state  -->
 <h1> Count :: {{ count }}</h1>

<!-- Actions -->
 <button @click="increment"> + </button>
 <button @click="decrement"> - </button>

 <!--Getters-->
 
 <h1 > Multiple Count with 2 = {{doubleCount }}</h1>
</div>
</template>

<style scoped>

</style>
