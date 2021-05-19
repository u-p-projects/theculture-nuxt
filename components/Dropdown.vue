<template>
  <aside
    class="dropdown"
    :class="{
      'dropdown--active': active
    }">
    <header class="top">
      <ul>
        <li>
          <p>The Culture</p>
        </li>
        <li class="link">
          <a
            href="https://podcasts.apple.com/au/podcast/7am/id1461999702"
            target="_blank"
            rel="noopener noreferrer">
            Apple Podcasts
          </a>
        </li>
        <li class="link">
          <a
            href="https://podcasts.apple.com/au/podcast/7am/id1461999702"
            target="_blank"
            rel="noopener noreferrer">
            Spotify
          </a>
        </li>
        <li></li>
        <li class="link menu">
          <TCMenuButton
            :active="active"
            @toggle="(state) => $emit('toggle', state)" />
        </li>
      </ul>
    </header>
    <main class="body">
      <div class="row row--information">
        <ul class="links">
          <li>
            <p class="listen">Listen on</p>
          </li>
          <li>
            <a href="http://hyperurl.co/nnxbd8">Apple podcasts</a>
          </li>
          <li>
            <a href="http://hyperurl.co/nnxbd8">Spotify</a>
          </li>
          <li>
            <a href="http://hyperurl.co/nnxbd8">Google podcasts</a>
          </li>
        </ul>
        <div class="description">
          <p>
            The Culture is a weekly show focusing on film, music, TV, streaming, books and art. Each episode takes a deep dive into a work, artist or area where culture and society collide.
            <br>
            Hosted by Osman Faruqi, the editor of 7am, the show will feature conversations with critics from The Saturday Paper and The Monthly, and interviews with local and international musicians, filmmakers, writers, and other artists.
          </p>
        </div>
      </div>
      <div class="row row--links">
        <ul class="links">
          <li>
            <a
              href="https://7ampodcast.com.au/"
              target="_blank">
              7am
            </a>
          </li>
          <li>
            <a
              href="https://www.thesaturdaypaper.com.au/"
              target="_blank">
              The Saturday Paper
            </a>
          </li>
          <li class="break">
            <a
              href="https://www.themonthly.com.au/"
              target="_blank">
              The Monthly
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/theculture.pod/"
              target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:contact@theculturepodcast.com.au">
              Email
            </a>
          </li>
          <!-- <li>
            <div class="caption">
              Immersive Video concept originally designed and development by Gabe Ferreira. Adapted for Schwartz Media by U-P.
            </div>
          </li> -->
        </ul>
      </div>
    </main>
  </aside>
</template>

<script>
import TCMenuButton from '@/components/TCMenuButton'
export default {
  name: 'Dropdown',
  components: {
    TCMenuButton
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  cursor: default;
  font-size: 1.5rem;

  &--active {
    display: flex;
  }

  .top {
    width: 100%;
    ul {
      display: flex;
      width: calc(100% - 120px);
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      text-transform: uppercase;

      li {
        display: flex;
        // justify-content: center;

        &:first-child {
          // justify-content: flex-start;
        }

        a {
          &:hover {
            border-bottom: 2px solid;
          }
        }
        &.menu {
          position: absolute;
          right: 0;
          top: 0;
          padding: 20px;
          // width: 25%;
          justify-content: flex-end;

          &::v-deep {
            .menu-btn {
              span, &:before, &:after {
                background: #fff;
              }
            }
          }
        }
      }
    }
  }

  .body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    .row {
      &--information {
        flex: 1 1 auto;
        display: flex;
        align-items: center;

        .links {
          display: none;
        }
      }

      &--links {
        .links {
          a {
            line-height: 34px;
            border-bottom: 2px solid;
          }
        }
      }

      .links {
        .break {
          margin: 0 0 1.675rem 0;
        }
      }

      .description {
        padding: 0 25% 0 0;
      }
    }
  }

  @include mobile {
    .body {
      .row {
        &--mobile {
          .links {
            display: block;
          }
        }

        &--desktop {
          .links {
            display: none;
          }
        }
      }
    }
  }
}
</style>
