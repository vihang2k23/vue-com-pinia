<script setup>
import {usecompoStore} from '../store/compo'

const store = usecompoStore()



console.log(store);
</script>
<template>
    <div>
        without destructuring  
        <h1>Fullname :{{ store.name.firstName }} + {{ store.name.lastName }}</h1>
        with destructing
        <h1>Fullname :{{ store.fName }} + {{ store.lName }}</h1>
        
    </div>
</template>