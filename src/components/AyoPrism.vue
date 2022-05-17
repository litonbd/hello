<template>
  <div>
    <div
      class="code-wrapper"
      :class="{
        'code-wrapper--collapsed': hidden
      }"
      ref="codeWrapper"
    >
      <pre><code :class="language">{{code}}</code></pre>
    </div>
    <button
      class="show-hide-button mt-3"
      :class="{ 'show-hide-button--expanded': !hidden }"
      @click="hidden = !hidden"
    >
      <svg style="width: 18px; height: 18px" viewBox="3 3 18 18">
        <path
          fill="green"
          d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { highlightAll } from "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "../assets/css/prism-theme1.css";
// import "prismjs/themes/prism.css";

// import "prismjs/components/prism-markup.js";

export default {
  props: {
    language: {
      default: "language-markup"
    },
    code: {
      default: "<div></div>"
    }
  },
  data: () => ({
    hidden: false,
    realHeight: 0
  }),
  watch: {
    hidden: function (newValue) {
      if (!newValue) {
        this.$refs.codeWrapper.style.maxHeight = this.realHeight + "px";
      } else {
        this.$refs.codeWrapper.style.maxHeight = "0";
      }
    }
  },
  mounted() {
    highlightAll();
    this.realHeight = this.$refs.codeWrapper.clientHeight;
    this.hidden = true;
  }
};
</script>

<style>
.code-wrapper {
  overflow: hidden;
  transition: all 0.33s;
  transform: translateZ(0);
  margin-top: 0;
}
.code-wrapper:not(.code-wrapper--collapsed) {
  margin-top: 0.5rem;
}

.show-hide-button {
  padding: 0;
  border: none;
  background: #cdeedf;
  cursor: pointer;
  width: 100%;
  padding: 2px 0;
}
.show-hide-button > svg {
  transition: all 0.33s;
}
.show-hide-button--expanded > svg {
  transform: rotate(180deg);
}

.show-hide-button:hover {
  color: rgb(151, 0, 114);
}
</style>
