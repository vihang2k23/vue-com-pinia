<script setup>
import { usemutationStore } from '../store/mutating';
const store = usemutationStore()
// console.log(store);
// we can change value of store but not replace

// store.name = "smit"
// store.surname = "patel"

// Using Mutating State 
store.$patch({
    name: "smit",
    surname: "patel"
})
store.$patch((state)=>{
    // console.log(state.data)
    state.data.push("vue3")
    // console.log(state.data,"after")
})

</script>

<template>
<div>
    
<h1>{{ store.name }}</h1> 
<h1>{{ store.surname }}</h1>

<ul>
    <li>{{ store.data[0] }}</li>
    <li>{{ store.data[1] }}</li>
    </ul>
</div>
</template>