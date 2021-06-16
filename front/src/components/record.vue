<template>
  <tr @click="choose()" class="chosedd" v-if="record.chosed">
    <td>{{ record.name }}</td>
    <td>{{ record.adress }}</td>
    <td>{{ record.tel }}</td>
  </tr>
  <tr @click="choose()" class="item" v-else>
    <td>{{ record.name }}</td>
    <td>{{ record.adress }}</td>
    <td>{{ record.tel }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    record: {
      type: Object,
    },
  },
  methods: {
    choose() {
      //console.log(this.record.id);
      this.$store.commit("CHOOSE", this.record.id);
    },
  },
};
</script>

<style scoped>
.chosedd {
  background-color: rgb(218, 128, 128);
}
.chosedd:hover {
  background-color: rgb(221, 103, 103);
}
</style>