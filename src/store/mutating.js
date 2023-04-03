// create store for using $patch method
 
import { defineStore } from "pinia";
import {ref,reactive,computed}  from 'vue'

export const usemutationStore = defineStore('mutation',()=>{

    const name = ref("vihang");
    const data = ref(['java','python'])
    return{name,data}
})