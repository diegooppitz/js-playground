<template>
    <header class="app-header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Produtos</router-link>
        <router-link to="/create" class="nav-link">Criar Produto</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  };
  </script>
  
  <style scoped lang="scss">
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 50px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    .logo img {
      height: 60px;
    }
  
    .nav-links {
      display: flex;
      gap: 35px;
  
      .nav-link {
        text-decoration: none;
        color: #333;
        font-weight: 600;
        transition: color 0.3s;
  
        &:hover {
          color: #000;
          font-weight: 900;
        }
      }
    }
  }
  </style>
  