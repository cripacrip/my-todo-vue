<template>
  <button
    :style="{ color: color }"
    @click="$emit('action')"
    :aria-label="label">
    <span class="material-icons md-36" aria-hidden="true">
      {{ type }}
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
    color: String,
    label: String
  }
}
</script>