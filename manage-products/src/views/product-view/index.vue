<template>
  <div class="product-manager">
    <h1 class="product-title">Editar Produto</h1>
    <form class="product-form" @submit.prevent="updateProduct">
      <div class="input-wrapper">
        <label for="productName" class="input-label">Nome do Produto:</label>
        <input
          id="productName"
          class="input-field"
          v-model="product.name"
          type="text"
          required
        />
      </div>
      <div class="input-wrapper">
        <label for="productDescription" class="input-label"
          >Descrição do Produto:</label
        >
        <textarea
          id="productDescription"
          class="input-field"
          v-model="product.description"
          required
        ></textarea>
      </div>
      <div class="input-wrapper">
        <label for="productPrice" class="input-label">Preço:</label>
        <input
          id="productPrice"
          class="input-field"
          v-model="product.price"
          type="number"
          min="0"
          step="0.01"
          required
        />
      </div>
      <div class="input-wrapper">
        <label for="companyName" class="input-label">Nome da Empresa:</label>
        <input
          id="companyName"
          class="input-field"
          v-model="product.company"
          type="text"
          required
        />
      </div>
      <button type="submit" class="submit-button">Salvar Alterações</button>
      <button type="button" class="delete-button" @click="deleteProduct">
        Excluir Produto
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { API_URL } from '../../utils/constants';

export default {
  name: 'ViewProduct',
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: '',
        company: '',
      },
    };
  },
  methods: {
    async fetchProduct() {
      const toast = useToast();
      try {
        const response = await axios.get(`${API_URL}/${this.$route.params.id}`);
        this.product = response.data;
      } catch (error) {
        toast.error('Erro ao buscar o produto.');
      }
    },
    async updateProduct() {
      const toast = useToast();
      try {
        await axios.put(`${API_URL}/${this.$route.params.id}`, this.product);
        toast.success('Produto atualizado com sucesso!');
      } catch (error) {
        toast.error('Erro ao atualizar o produto.');
      }
    },
    async deleteProduct() {
      const toast = useToast();
      try {
        await axios.delete(`${API_URL}/${this.$route.params.id}`);
        toast.success('Produto excluído com sucesso!');
        this.$router.push('/');
      } catch (error) {
        toast.error('Erro ao excluir o produto.');
      }
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped lang="scss">
.product-manager {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
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

.product-form {
  width: 100%;
}

.input-wrapper {
  width: 95%;
}

.input-label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #666;
}

.input-field {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
}

.submit-button {
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #5C67F2;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a50e0;
  }
}

.delete-button {
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #FF4C4C;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #e04343;
  }
}
</style>
