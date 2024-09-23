<template>
  <section class="main">
    <!-- Tarjeta de inicio de sesión -->
    <pv-card class="login-card" style="width: 500px">
      <template #header>
        <figure class="main_figure">
          <img src="\img\inicio.webp" class="main_img" alt="Inicio de sesión" />
        </figure>
      </template>

      <template #title>
        <h2 class="main_title">Formulario de Inicio de Sesión</h2>
      </template>

      <template #subtitle>
        <p class="main_paragraph">Bienvenido a Flora y Fauna</p>
      </template>

      <template #content>
        <form @submit.prevent="validateUser" class="main_form">
          <input type="text" placeholder="Ingrese Usuario" class="main_input" v-model="username" />
          <input type="password" placeholder="Ingrese Contraseña" class="main_input" v-model="password" />
          <input type="submit" value="Inicio Sesion" class="main_input main_input--send" />
        </form>
      </template>
    </pv-card>
  </section>
</template>

<script>
import { UsersService } from "../services/users.service.js";

export default {
  name: 'login-component',
  data() {
    return {
      username: '',
      password: '',
      usersService: new UsersService(),  // Servicio de usuarios
    };
  },
  methods: {
    validateUser() {
      let user = {
        username: this.username,
        password: this.password
      };

      this.usersService.getUsers().then(response => {
        const users = response.data;

        // Encuentra si hay un usuario que coincida con username y password
        const validUser = users.find(element =>
            element.username === user.username && element.username === user.password
        );

        if (validUser) {
          // Redirigir al home si es válido
          this.$router.push('/home');
        } else {
          // Mostrar alerta si el usuario o contraseña no son válidos
          alert('Usuario o contraseña incorrectos');
        }
      }).catch(error => {
        console.error("Error al obtener usuarios: ", error);
        alert('Error en la autenticación, intenta más tarde.');
      });
    }
  }
};
</script>

<style scoped>
/* Estilos de la página de inicio de sesión */
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f4f6; /* Fondo claro para resaltar la tarjeta */
}

.login-card {
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.main_figure {
  margin-bottom: 1rem;
  text-align: center;
}

.main_img {
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
}

.main_title {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}

.main_paragraph {
  text-align: center;
  margin-bottom: 20px;
}

.main_form {
  display: flex;
  flex-direction: column;
}

.main_input {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.main_input--send {
  background-color: #059669;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.main_input--send:hover {
  background-color: #047857;
}
</style>
