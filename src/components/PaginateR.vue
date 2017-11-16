<template>


 <div>
 search :<input type="text" v-model="search" v-on:change="changeHandler" />
    <tree-view :data="coutries"  ></tree-view>

  <ul class="pagination">
    <li class="prev">
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li   v-for="PageId in 10"><router-link :to="{name:'test',params:{id:PageId,Q: search}}">{{PageId}}</router-link>
    </li>
     
    <li class="next">
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
 
  
 


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
   
      

},
methods:{


changeHandler(){

   this.$http.get('https://api.github.com/search/repositories?q='+this.search+'&page=1&per_page=5' ).then(response => {

   this.coutries = response.data
 
   }, (response) => {
   console.log('erreur', response)
   })
  


}
}
  
}
</script>

 