<template>


 <div >
 
 <div>search :<input type="text" v-model="search" /> 
    <tree-view :data="coutries"  ></tree-view>



 </div>  <ul class="pagination">
    <li class="prev">
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li   v-for="PageId in 10"><router-link :to="{name:'test'} " 
 v-on:click.native="page(PageId)"> {{ PageId}}</router-link>
    </li>
     
    <li class="next">
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
 
  
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
   
       var itemId= this.$route.params.id
              var search= this.$route.params.Q



   this.$http.get('https://api.github.com/search/repositories?q='+search+'&page='+itemId+'&per_page=5' ).then(response => {

   this.coutries = response.data
 
   }, (response) => {
   console.log('erreur', response)
   })

},
methods:{


page(PageId){
              var search= this.$route.params.Q

 
  this.$http.get('https://api.github.com/search/repositories?q='+search+'&page='+PageId+'&per_page=5' ).then(response => {

   this.coutries = response.data
 
   }, (response) => {
   console.log('erreur', response)
   })


}
}
  
}
</script>

 