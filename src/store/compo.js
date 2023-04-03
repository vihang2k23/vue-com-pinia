// create store for using $patch method
 
import { defineStore } from "pinia";

import { useName } from "../composable/name";



export const usecompoStore = defineStore('compo',()=>{
    // destructure value 
    const {firstName,lastName} = useName()

    //give composable value 
    const name = useName()
    const fName = firstName
    const lName =lastName
    return {fName,lName,name}
})