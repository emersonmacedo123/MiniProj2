<template>
  
    <section class="page-section">
      <b-container>
        <HeaderPage title="Adicionar Especialista"/>
       
        <!--FORM-->
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="8">
            <form @submit.prevent="add">
              
                <div class="form-group">
                <input
                  v-model="specialista_name"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtSpecialistName"
                  placeholder="Nome do especialista"
                  required
                />
              </div>
              
              <div class="form-group">
              <select id="sltType" class="form-control form-control-lg" v-model="type" required>
                <option value>-- SELECIONA TIPO --</option>
                <option value="mamiferos">ESP. EM MAMIFEROS</option>
                <option value="anfibios">ESP. EM ANFIBIOS</option>
                <option value="insetos">ESP. EM INSETOS</option>
              </select>
            </div>


              <div class="form-group">
                <input
                  v-model="especialist_person_email"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtSpecialistEmail"
                  placeholder="Email de contato"
                  required
                />
              </div>
              
              <div class="form-group">
              <input
                v-model="birth_date"
                type="text"
                onmouseenter="(this.type='date')"
                onmouseleave="(this.type='text')"
                class="form-control form-control-lg"
                id="txtBirthDate"
                placeholder="Incluir data de nascimento"
                required
              />
              </div>
              <div class="form-group">
                <textarea
                  id="txtEspecialistaDescription"
                  class="form-control form-control-lg"
                  placeholder="Breve descrição"
                  cols="30"
                  rows="10"
                  v-model="specialist_description"
                  
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  v-model="location.city"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtSpecCity"
                  placeholder="Cidade de residencia"
                  
                />
              </div>
              <div class="form-group">
                <input
                  v-model="location.country"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtCountryCompany"
                  placeholder="País de residencia"
                  
                />
              </div>
              
              <div class="form-group">
                <input
                  v-model="auth.username"
                  type="text"
                  value="user@gmail.com"
                  class="form-control form-control-lg"
                  id="txtEmail"
                  placeholder="escreve username"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  v-model="auth.password"
                  type="password"
                  class="form-control form-control-lg"
                  id="txtPassword"
                  placeholder="escreve password"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="txtConfirmPassword"
                  placeholder="confirma password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-outline-success btn-lg mr-2">
                <i class="fas fa-plus-square"></i> CADASTRAR
              </button>
              <router-link
                :to="{name: 'listSpecialists'}"
                tag="button"
                class="btn btn-outline-danger btn-lg"
              >
              <i class="fas fa-window-close"></i> CANCELAR
              </router-link>
            </form>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-container>
    </section>
  </template>
  
  <script>
  import { ADD_SPECIALIST } from "@/store/users/user.constants";
  import HeaderPage from "@/components/HeaderPage.vue"
  import router from "@/router";
  import { mapGetters } from "vuex";
  
  export default {
    name: "AddSpecialist",
     components: {
      HeaderPage
    },
    data: () => {
      return {
        location: { city: "", country: "" },
        auth: { username: "", password: "" },
        active: true,
        specialista_name: "",
        especialist_person_email: "",
        birth_date: "",
        type: "",
        specialist_description: ""
      };
    },
    computed: {
       ...mapGetters("user", ["getMessage"]),
    },
    methods: {
      add() {
        if (
          document.querySelector("#txtPassword").value !==
          document.querySelector("#txtConfirmPassword").value
        ) {
          this.$alert(
            "Campos password não coincidem",
            "Erro de validação do formulário",
            "error"
          );
        } else {
          this.$store.dispatch(`specialist/${ADD_SPECIALIST}`, this.$data).then(
            () => {
              this.$alert(
                this.getMessage,
                "Utilizador adicionado!",
                "success"
              );
              router.push({name: 'listUsers'});
            },
            err => {
              this.$alert(`${err.message}`, "Erro", "error");
            }
          );
        }
      }
    }
  };
  </script>