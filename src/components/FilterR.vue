<template>


 <div >
  <div>search :<input type="text" v-model="search" v-on:change="changeHandler"/> 

    

 <button type="button" class="btn btn-success" value='1' v-on:click="filter(1,$event)">Forks</button>

 <button type="button" class="btn btn-info" value='2' v-on:click="filter(2,$event)">Stars</button>

 <button type="button" class="btn btn-warning" value='3' v-on:click="filter(3,$event)">Activity</button>
   
  <tree-view :data="coutries"  ></tree-view>
  
 </diV>
 </div>

   </template>

<script>
export default {
   data () {
    return {
    coutries:[],
    search:"",

     }
  },

  mounted (){
     
  
  
      

},
 computed: {
    filteredList() {
      return this.coutries.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods:{
     filter: function(btn,e){
         e.preventDefault();
  
    if(btn==1){
       this.$http.get('https://api.github.com/search/repositories?q='+this.search+'&&sort=forks&&order=desc' ).then(response => {

   this.coutries = response.data

   }, (response) => {
   console.log('erreur', response)
   })
  
    }
    if(btn==2){
        this.$http.get('https://api.github.com/search/repositories?q='+this.search+'&&sort=stars&&order=desc' ).then(response => {

   this.coutries = response.data

   }, (response) => {
   console.log('erreur', response)
   })
    }
    if(btn==3){
        this.$http.get('https://api.github.com/search/repositories?q='+this.search+'&&sort=created&&sort=updated&&order=desc' ).then(response => {

   this.coutries = response.data

   }, (response) => {
   console.log('erreur', response)
   })
    }


    }
       
     
     
     ,

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

 