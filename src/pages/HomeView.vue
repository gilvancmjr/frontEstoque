<template>
  <div class="home">
    <img src="./../assets/trade.png" alt="Trade" />
    <div class="item">
      <div class="card text-white bg-info mb-3" style="max-width: 90%">
        <div class="card-header">Categorias</div>
        <div class="card-body">
          <h5 class="card-title">Categorias</h5>
          <p class="card-text">
            Os diversos tipos de Produtos são divididos em categorias
            especificas.
          </p>
        </div>
      </div>
      <div class="card bg-light mb-3" style="max-width: 90%">
        <div class="card-header">Produtos</div>
        <div class="card-body">
          <h5 class="card-title">Products</h5>
          <p class="card-text">
            Uma empresa compra uma quantidade específica de um produto, uma
            tonelada, por exemplo, e vende sua mercadoria aos poucos, até que o
            estoque seja zerado.
          </p>
        </div>
      </div>
      <hr />
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-around;
}
img {
  max-width: 49%;
  height: 450px;
}
.item {
  max-width: 50%;
}
</style>
