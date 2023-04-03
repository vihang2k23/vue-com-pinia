import {ref,reactive,onMounted,onUnmounted} from 'vue'
import { faker } from '@faker-js/faker';
export function useName(){

//state encapsulated and managed by the composable
    const firstName = ref()
    const lastName = ref()
   
    // a composable car update its managed state over time 

    function updateName(){
        firstName.value = faker.name.firstName()
        lastName.value = faker.name.lastName()
    }
    onMounted(()=>{
     
        window.addEventListener("mousemove",updateName)
    }) 
    onUnmounted(()=>{
      
        window.removeEventListener("mousemove",updateName)
    })
    console.log(firstName)
    return {firstName,lastName}

}