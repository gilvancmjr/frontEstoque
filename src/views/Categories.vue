<template>
  <div>
    <div class="categories">
      <h1>Categorias</h1>
      <div class="list" v-for="category in categories" :key="category.id">
        <div class="dados">{{ category.id }}</div>
        <div class="dados">{{ category.name }}</div>
      </div>
    </div>
    <div class="vuex">
      {{ count }}
      <button v-on:click="increments">+</button>
    </div>
    <hr />
    <div class="produtos">
      {{ products }}
      <input v-model="produtos" type="text" />
      <button v-on:click="addProducts(produtos)" class="btn btn-primary mt-4">+</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      categories: {},
      produtos: "",
    };
  },
  methods: {
    getCategories() {
      axios.get("http://localhost:8081/categories").then((resp) => {
        this.categories = resp.data;
      });
    },
    ...mapMutations(["increments"]),
    ...mapActions(["addProducts"]),
  },
  created() {
    this.getCategories();
  },
  computed: {
    //    contador() {
    //      return this.$store.state.count;
    //    },
    ...mapState(["count", "products"]),
  },
};
</script>

<style lang="scss" scoped>
.categories {
  align-items: center;
  text-align: center;
  .list {
    width: 50%;
    margin-left: 22.5%;
    align-items: center;
    padding: 1%;
    display: flex;
    justify-content: center;
    border: 1px solid grey;
    .dados {
      padding: 0.7%;
    }
  }
}
.vuex {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 900;
  align-items: center;
}
.produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    border-bottom: solid 1px black;
  }
}
</style>