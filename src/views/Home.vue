<template>
  <div class="container">
    <h3>SOME SPACEX LAUNCHES</h3>
    <div class="launches">
      <router-link
        :style="`background-image: url(${launch.links.flickr_images[0]});`"
        :to="`/launch/${launch.id}`"
        class="launch"
        :key="launch"
        v-for="launch in getlaunchesPast()"
      >
        <!-- <img
          v-if="launch.links.flickr_images[0]"
          :src="launch.links.flickr_images[0]"
          :alt="launch.mission_name"
        /> -->
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      launchesPast: [],
    };
  },
  methods: {
    getlaunchesPast() {
      return this.launchesPast.filter((launch) => {
        if (launch.links.flickr_images[0]) {
          return true;
        }
      });
    },
  },
  beforeMount() {
    axios({
      url: "https://api.spacex.land/graphql",
      method: "post",
      data: {
        query: ` query PostsForAuthor {
            launchesPast(limit: 108) {
              mission_name
              links {
                flickr_images
                article_link
                wikipedia
                video_link
              }
              id
              launch_site {
                site_name
              }
              launch_date_utc
              ships {
                name
                image
              }
              launch_year
              launch_success
            }
          }`,
      },
    }).then((result) => {
      console.log(result);
      this.launchesPast = result.data.data.launchesPast;
    });
  },
};
</script>


<style>
.container {
  position: relative;
  width: 35%;
  max-height: 34rem;
  margin: auto;
}

.container.details {
  text-align: left;
}

.launches {
  position: relative;
  overflow: auto;
  max-height: 34rem;
  margin: auto;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 32.3%);
  gap: 1%;
}

.launch {
  height: 100%;
  height: -moz-fit-content;
  cursor: pointer;
  width: 100%;
  min-height: 8rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.launch > img {
  width: 100%;
  height: 100%;
}
</style>