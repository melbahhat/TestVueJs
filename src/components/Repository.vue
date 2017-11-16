<template>


 <div >
 <div>search :<input type="text" v-model="search"/> </div>  
 <div class="card" v-for="post in filteredList">

   <tree-view :data="post"  ></tree-view>

 </div>
 </diV>

   </template>

<script>
export default {
   data () {
    return {
    coutries:[],
    search:""

     }
  },

  mounted (){
    this.$http.get('https://api.github.com/repositories' ).then(response => {

   this.coutries = response.data
 
   }, (response) => {
   console.log('erreur', response)
   })
  
      

},
 computed: {
    filteredList() {
      return this.coutries.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

 