<template>
  <nav class="nav">
    <transition name="nav" appear appear-class="nav-circle-appear">
      <div class="nav-inner" @click="$emit('update:showMore', !showMore)">
        <transition name="scale" mode="out-in">
          <svg v-if="showMore" height="100%" width="100%" viewBox="0 0 24 24">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
          <span v-else>more</span>
        </transition>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  props: {
    showMore: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="postcss">
.nav {
  background-color: var(--nav-bg, transparent);
  width: 100%;
  position: absolute;
  left: 0;
  top: 3vh;
  display: flex;
  justify-content: center;
}
.nav-inner {
  --font-size: 30px;
  cursor: pointer;
  padding: 8px 20px;
  backface-visibility: hidden;
  transform-origin: center;
  color: var(--welcome-accent);
  font-size: var(--font-size);
  transition: all 0.3s;
  & span {
    display: inline-block;
  }
  & svg {
    width: var(--font-size);
    height: var(--font-size);
    fill: var(--show-more-accent);
  }
  & > span,
  & > svg {
    transition: 0.4s;
  }
  &:hover {
    & span {
      color: var(--show-more-accent);
    }
    & svg {
      fill: var(--welcome-accent);
    }
  }
  &:active {
    transform: scale(0.9);
  }
}
.nav-inner-appear {
  transform: scale(0.7);
  opacity: 0;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>
