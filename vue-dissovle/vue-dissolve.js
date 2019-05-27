// Vue v-reveal component
// Uses Vue.js and Animate.css
Vue.component('v-reveal', {
  props: ["delay", "isReset"],
  data: function () {
    return {
      isRevealed: false,
      isAnimationDone: false,
    }
  },
  template: `
      <div 
        @click="reveal"
        @animationend="endAnimation" 
        class="v-reveal" 
        :class="[{revealed : isRevealed && isReset}, {fadeOut : !isReset}, {animated : !isAnimationDone}, delay]">
        <slot></slot>
      </div>
      `,
  methods: {
    reveal: function () {
      this.isRevealed = true;
      this.$emit('reset', true);
    },
    endAnimation: function () {
      this.isAnimationDone = true;
    }
  },
  watch: {
    isReset: {
      handler() {
        this.isAnimationDone = false;
        if (!this.isReset) {
          this.isRevealed = false;
        }
      },
    }
  },
});

// Vue application
var poem = new Vue({
  el: '#app',
  data: {
    isReset: false,
  },
  methods: {
    reset: function (value) {
      this.isReset = value;
    }
  }
});