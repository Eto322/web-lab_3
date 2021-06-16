<template>
  <div class="main">
    <div class="main__wrapper">
      <div class="main__inner">
        <h2 class="title">Добавить</h2>
        <!-- <div class="divider"></div> -->
        <hr />
        <div class="phonebook">
          <form>
            <div class="text">Введите имя:</div>
            <input
              v-model="name"
              type="text"
              class="form-control"
              placeholder="Имя"
              id="name"
            />
            <div class="text">Адрес:</div>
            <input
              v-model="adress"
              type="text"
              class="form-control"
              placeholder="Адрес"
              id="adress"
            />
            <div class="text">Номер телефона:</div>
            <input
              v-model="tel"
              type="text"
              class="form-control"
              placeholder="Телефон"
              id="tel"
            />
            <div class="buttons">
              <router-link
                to="/"
                @click="add()"
                type="button"
                id="add"
                class="btn btn-dark"
              >
                Добавить
              </router-link>
              <router-link
                to="/"
                type="button"
                id="delete"
                class="btn btn-dark"
              >
                Журнал
              </router-link>
            </div>
          </form>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tel: "",
      adress: "",
    };
  },
  methods: {
    add() {
      if (+this.tel && (this.tel.length == 12 || this.tel.length == 10)) {
        this.$store.commit("ADD", {
          name: this.name,
          tel: this.tel,
          adress: this.adress,
        });
      } else {
        alert("Неверный формат номера");
      }
    },
  },
};
</script>
