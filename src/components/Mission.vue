<template>
		<div class="about-section" id="about">
				<div class="container">
						<div class="about-header">
								<h3>{{title}}</h3>
								<div class="about-imag">
										<img src="img/icono_webfutura.jpg" alt=""/>
								</div>
								<div class="about-text">
                    <p v-for="actLine in description">{{actLine}}</p>
                  </div>
							</div>
								<div v-if="totSkills>0" class="about-sectiongrids">
										<div class="col-md-6 about-leftgrid">
												<div class="polls">
														<div v-for="act in skillsLeft">
																<div class="poll">
																		<div class="poll-desc">
																				<h4>{{act.title}}</h4>
																		</div>
																		<div class="percentage">
                                        <p>{{act.width}}%</p>
																		</div>
																		<div class="clearfix"></div>
																</div>
																<div class="skills">
																		<div v-bind:style="{width: act.width+'%'}"></div>
																</div>
														</div>
												</div>
                    </div>
										<div v-if="totSkills>1" class="col-md-6 about-rightgrid">
												<div class="polls">
														<div v-for="act in skillsRight">
																<div class="poll">
																		<div class="poll-desc">
																				<h4>{{act.title}}</h4>
																		</div>
																		<div class="percentage">
                                        <p>{{act.width}}%</p>
																		</div>
																		<div class="clearfix"></div>
																</div>
																<div class="skills">
																		<div v-bind:style="{width: act.width+'%'}"></div>
																</div>
														</div>
												</div>
                    <p></p>
                    </div>
								</div>
						</div>
				</div>
		</div>
</template>
<script>
		export default {
				data: () => ({
						title: "Nuestra misión",
						description: [
						"Desde la antigüedad, siempre han existido genios que en su día tuvieron una idea que nos cambió la manera de hacer o ver las cosas. Eso quiere decir que puede que dependa de ti cambiar el rumbo de la historia!",
						"A nivel digital en WebFutura queremos ayudarte a desarrollar tu proyecto y potenciar tu genialidad.",
						"Estas son nuestras habilidades:"
						],
								skills:[
										{title:"HTML", width: 100},
										{title:"Css", width: 100},
										{title:"Javascript", width: 100},
										{title:"PHP", width: 100},
										{title:"MySql", width: 100},
										{title:"Wordpress", width: 100},
										{title:"Vue.js", width: 50},
										{title:"React.js", width: 50},
										{title:"Node.js", width: 30},
										{title:"Linux", width: 100},
										{title:"C/C++", width: 50},
										{title:"Bash", width: 90},
										]
						}),
				computed:{
						totSkills: function(){
								return this.skills.length;
						},
						skillsLeft: function() {
// 								console.log("izq" + this.skills.slice(0,Math.ceil(this.totSkills/2)));
								return this.skills.slice(0,Math.ceil(this.totSkills/2));
						},
						skillsRight: function(){
								let numLeft=Math.ceil(this.totSkills/2);
// 								console.log("der" + this.skills.slice(numLeft,this.totSkills));
								return this.skills.slice(numLeft,this.totSkills);
            }
				}
		}
</script>
<style>
.about-text{
  text-align:left;
}
.about-text p{
margin-bottom:20px;
}
</style>
