//Setup Store 
import { defineStore } from "pinia";
import {ref,reactive,computed} from 'vue'

export const useCounterStore = defineStore('counter',()=>{

    //State
const count = ref(0);

//Getters
const doubleCount = computed(()=>count.value * 2)

//actions 
function increment(){
    count.value++
}

function decrement(){
    count.value--
}
return{
    count,
    doubleCount,
    increment,
    decrement
}
})