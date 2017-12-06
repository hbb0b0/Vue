<template>
   <p>
      <ul>
            <li v-for="n in 5" v-bind:key="n">{{ n }} {{msg}}</li>
        </ul>
   </p>  
</template>
<script>
export default {
  data:function(){
     return {
         msg:"i am Bar!"
     }
  }
}
</script>
<<style scoped>
  li{
      font-size:2em;
      color:red;
  }
</style>


