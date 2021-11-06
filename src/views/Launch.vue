<template>
  <div class="container details">
    <h3><i @click="$router.push('/')" class="fas fa-arrow-left"></i> {{launchDetails.mission_name}} </h3>
    <h6 v-if="launchDetails.launch_date_utc">Date: {{launchDetails.launch_date_utc}} </h6>
    <h6 v-if="launchDetails.links"><a :href="launchDetails.links.video_link">Watch Here</a></h6>
    <h6>LAUNCH DETAILS</h6>
    <div class="launches" v-if="launchDetails.links">
      <div
        class="launch"
        :key="image"
        v-for="image in launchDetails.links.flickr_images"
      >
        <img :src="image" :alt="launchDetails.mission_name" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Launch",
  data() {
    return {
      launchDetails: [],
    };
  },
  created() {
    axios({
      url: "https://api.spacex.land/graphql",
      method: "post",
      data: {
        query: ` query PostsForAuthor {
            launch(id: ${this.$route.params.id}) {
              mission_name
              links {
                flickr_images
                article_link
                wikipedia
                video_link
              }
              launch_date_utc
              id
              details
              launch_year
              launch_success
              launch_site {
                site_name
              }
              rocket {
                rocket_name
              }
            }
          }`,
      },
    }).then((result) => {
      console.log(result.data.data.launch);
      this.launchDetails = result.data.data.launch;
    });
  },
};
</script>