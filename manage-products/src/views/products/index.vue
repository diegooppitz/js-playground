<template>
  <div class="product-manager">
    <h1 class="product-title">Lista de Produtos</h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Buscar produtos..."
      class="search-input"
    />
    <ul class="product-list">
      <li
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-item"
      >
        <router-link :to="'/view/' + product.id">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Preço: R${{ product.price }}</p>
          <p>Empresa: {{ product.company }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '../../utils/constants';

export default {
  name: 'ProductList',
  data() {
    return {
      productsData: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredProducts() {
      const searchLower = this.searchQuery.toLowerCase();

      return this.productsData.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(searchLower);
        const descriptionMatch = product.description
          .toLowerCase()
          .includes(searchLower);
        const companyMatch = product.company
          .toLowerCase()
          .includes(searchLower);

        return nameMatch || descriptionMatch || companyMatch;
      });
    },
  },

  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(API_URL);
        this.productsData = response.data;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped lang="scss">
.product-manager {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}

.product-title {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.search-input {
  width: 95%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.product-list {
  list-style: none;
  width: 100%;
  padding: 0;
}

.product-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }
}

.product-item a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
}

h3 {
  margin: 0 0 5px 0;
}

p {
  margin: 5px 0;
}
</style>
