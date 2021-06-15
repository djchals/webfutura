<template>
  <div class="content" id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
	updated(){
		let el=document.getElementById("link-services").classList;
		if(this.$route.path!='/'){
			el.remove('active');
		}else{
			el.add('active');
		}
		el=document.getElementById("link-portfolio").classList;
		if(this.$route.path!='/portfolio'){
			el.remove('active');
		}else{
			el.add('active');
		}
		el=document.getElementById("link-mission").classList;
		if(this.$route.path!='/mission'){
			el.remove('active');
		}else{
			el.add('active');
		
		}
	}
}
</script>
<style>
</style>
