<template>
  <div @click="updateActiveValue" class="bac-card" :style="setBackground(background)" :class="[(this.activeValue == this.valueName) ? 'border-blue-600' : 'border-gray-300', this.item.disabled ? 'filter-disabled' : '' ]" @keydown.space="updateActiveValue">
    <span>{{this.valueName}}</span>
  </div>
</template>

<script>
// v-if="this.activeValue === this.valueName"
export default {
  model: {
    prop: 'activeValue',
    event: 'onUpdateValue'
  },
  props: {
    valueName: {
      type: String,
      required: true
    },
    activeValue: {
      type: String,
      required: true
    },
    background: {
      type: Object
    },
    options: {
      type: Object
    },
    item: {
      type: Object
    }


  },
    mounted() {
    console.log(this.item);
    // console.log(this.valueName);

  },
  methods: {
    updateActiveValue() {
      if (!this.item.disabled) {

        console.log("radioUpdate")
        this.$emit('onUpdateValue', this.valueName)
      }
    },
    setBackground(bg) {
      if (bg.type === 'image') {
        return {background : url(bg.image)}
      }
      return {background: bg.color}
    }
  }
}
</script>
