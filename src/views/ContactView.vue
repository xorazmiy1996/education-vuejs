<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ContactVue"
})
</script>

<template>
<section class="ftco-section ftco-consult ftco-no-pt ftco-no-pb" style="background-image: url(src/assets/new/images/bg_5.jpg); background-position: 50% -982.531px;" data-stellar-background-ratio="0.5">
    	<div class="overlay"></div>
    	<div class="container">
    		<div class="row justify-content-end">
    			<div class="col-md-6 py-5 px-md-5">
    				<div class="py-md-5">
		          <div class="heading-section heading-section-white ftco-animate mb-5 fadeInUp ftco-animated">
		            <h2 class="mb-4">Request A Quote</h2>
		            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
		          </div>
		          <form action="#" class="appointment-form ftco-animate fadeInUp ftco-animated">
		    				<div class="d-md-flex">
			    				<div class="form-group">
			    					<input type="text" class="form-control" placeholder="First Name">
			    				</div>
			    				<div class="form-group ml-md-4">
			    					<input type="text" class="form-control" placeholder="Last Name">
			    				</div>
		    				</div>
		    				<div class="d-md-flex">
		    					<div class="form-group">
			    					<div class="form-field">
		        					<div class="select-wrap">
		                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
		                    <select name="" id="" class="form-control">
		                    	<option value="">Select Your Course</option>
		                      <option value="">Art Lesson</option>
		                      <option value="">Language Lesson</option>
		                      <option value="">Music Lesson</option>
		                      <option value="">Sports</option>
		                      <option value="">Other Services</option>
		                    </select>
		                  </div>
			              </div>
			    				</div>
		    					<div class="form-group ml-md-4">
			    					<input type="text" class="form-control" placeholder="Phone">
			    				</div>
		    				</div>
		    				<div class="d-md-flex">
		    					<div class="form-group">
			              <textarea name="" id="" cols="30" rows="2" class="form-control" placeholder="Message"></textarea>
			            </div>
			            <div class="form-group ml-md-4">
			              <input type="submit" value="Request A Quote" class="btn btn-primary py-3 px-4">
			            </div>
		    				</div>
		    			</form>
		    		</div>
    			</div>
        </div>
    	</div>
    </section>
</template>

<style scoped>

</style>