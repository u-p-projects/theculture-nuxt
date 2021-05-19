<template>
  <div class="captions">
    <template v-if="current || current > -1">
      <h3 v-html="captions[current].text"></h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Captions',
  computed: {
    captions() {
      return [
        {
          time: [0, 0.25],
          text: '[00:45:01] The Culture'
        },
        {
          time: [0.25, 3.5],
          text: 'Schwartz Media is launching a brand new podcast'
        },
        {
          time: [3.5, 4.5],
          text: 'The Culture'
        },
        {
          time: [4.5, 6.8],
          text: 'From the team the brought you 7am'
        },
        {
          time: [6.8, 9],
          text: 'Australia\'s most popular daily news podcast'
        },
        {
          time: [9, 13],
          text: 'The Culture is a weekly deep dive on music, film'
        },
        {
          time: [13, 17],
          text: 'tv, streaming and everything arts and culture.'
        },
        {
          time: [17, 19],
          text: 'Hosted by me Osman Faruqi,'
        },
        {
          time: [19, 21.5],
          text: 'every week we\'ll explore what\'s shaping the world'
        },
        {
          time: [21.5, 24],
          text: 'of pop culture and entertainment.'
        },
        {
          time: [24, 26],
          text: 'With the help of Australia\'s best critics.'
        },
        {
          time: [26.1, 29],
          text: 'We will be bringing you long form, smart, fun'
        },
        {
          time: [29, 31],
          text: 'cultural analysis and conversation.'
        },
        {
          time: [31.1, 35],
          text: 'With new episodes dropping every Friday from May 28.'
        },
        {
          time: [35, 37],
          text: 'You can follow us right now'
        },
        {
          time: [37, 40],
          text: 'Just search The Culture in Apple podcasts'
        },
        {
          time: [40, 43],
          text: 'Spotify, or wherever you get your podcasts.'
        },
        {
          time: [43, 44.4],
          text: 'The Culture coming soon.'
        },
        {
          time: [44.5, 100],
          text: '[End]'
        }
      ]
    }
  },
  data() {
    return {
      current: 0
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'time/setCurrentTime') {
        const showCaptionIndex = this.captions.findIndex((caption) => {
          return state.time.currentTime > caption.time[0] && state.time.currentTime < caption.time[1]
        })

        if (showCaptionIndex !== -1) {
          this.current = showCaptionIndex
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.captions {
  position: fixed;
  bottom: 40px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 210;
  background: transparent !important;
  color:#ffd600;

  h3 {
    font-size: 3.8vw;
    font-family: helvetica, sans-serif;
  }

  @supports (-webkit-text-stroke: black) {
    h3 {
      -webkit-text-stroke: 1px black;
      -webkit-text-fill-color: #ffd600;
    }
  }
}
</style>
