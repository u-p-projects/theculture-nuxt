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
            href="https://podcasts.apple.com/us/podcast/the-culture/id1566825258"
            target="_blank"
            rel="noopener noreferrer">
            Apple Podcasts
          </a>
        </li>
        <li class="link">
          <a
            href="https://open.spotify.com/show/4Byp0KBg4kyyCkk7CNgyW3"
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
          border-bottom: 2px solid transparent;
          &:hover {
            border-bottom-color: #fff;
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
    background: #ffd600;
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
    color: black;

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
    padding: 10px 0 0 0;
    min-height: 100vh;
    overflow: scroll;

    .top {
      ul {
        padding: 10px;
        li {
          display: none !important;

          &:first-child, &.menu {
            display: flex !important;
          }

          &.menu {
            padding: 10px;
            min-width: unset;
          }
        }
      }
    }
    .body {
      display: inline-block;
      padding: 12px 12px 20px 12px;
      margin: 10px 10px 120px 10px;
      .row {
        &--information {
          flex-direction: column;
          margin: 0 0 20px 0;

          .links {
            width: 100%;
            font-size: 27px;
            line-height: 29px;
            display: block;
            margin: 0 0 20px 0;

            li {
              width: 100%;
              text-align: center;

              &:first-child {
                text-align: left;
                margin: 0 0 20px 0;
              }

              a {
                display: inline-block;
                margin: 10px;
                margin-bottom: calc(5vh - 10px);
                padding: 20px;
                border: 2px solid #000;
                border-radius: 50px;
              }
            }
          }
        }

        &--desktop {
          .links {
            display: none;
          }
        }

        .description {
          font-size: 19px;
          line-height: 21px;
          padding: 0 0;
        }
      }
    }
  }
}
</style>
