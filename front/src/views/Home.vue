<template>
  <div class="main">
    <div class="main__wrapper">
      <div class="main__inner">
        <h2 class="title">Телефонная книжка</h2>
        <!-- <div class="divider"></div> -->
        <hr />
        <div class="phonebook">
          <div v-if="$store.state.model.items.length" class="main-app">
            <table>
              <tr>
                <th>Имя</th>
                <th>Адрес</th>
                <th>Номер телефона</th>
              </tr>
              <record
                v-for="item in $store.state.model.items"
                v-bind:key="item.id"
                v-bind:record="item"
              />
            </table>
          </div>
          <h1 v-else>Записей нет</h1>
          <form>
            <div class="buttons">
              <router-link
                to="/add"
                type="button"
                id="add"
                class="btn btn-dark"
              >
                Добавить
              </router-link>
              <button
                @click="deleteItems()"
                type="button"
                id="delete"
                class="btn btn-dark"
              >
                Удалить
              </button>
            </div>
          </form>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import record from "../components/record.vue";
export default {
  name: "Home",
  components: {
    record,
  },
  methods: {
    deleteItems() {
      this.$store.commit("DELETE");
    },
  },
  created() {
    this.$store.commit("LOAD");
  },
};
</script>
