<template>
  
    <section class="page-section">
      <b-container>
        <HeaderPage title="Adicionar Patrocinador"/>
       
        <!--FORM-->
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="8">
            <form @submit.prevent="add">
              
                <div class="form-group">
                <input
                  v-model="company_name"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtCompanyName"
                  placeholder="Nome da patrocinadora"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  v-model="responsible_person"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtResponsibleName"
                  placeholder="Principal contato"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  v-model="responsible_person_email"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtResponsibleEmail"
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
                  id="txtCoDescription"
                  class="form-control form-control-lg"
                  placeholder="Breve descrição da empresa"
                  cols="30"
                  rows="10"
                  v-model="company_description"
                  
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  v-model="location.city"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtCompanyCity"
                  placeholder="Cidade da empresa"
                  
                />
              </div>
              <div class="form-group">
                <input
                  v-model="location.country"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtCountryCompany"
                  placeholder="País da empresa"
                  
                />
              </div>
              
              <div class="form-group">
                <input
                  v-model="auth.sponsorusername"
                  type="text"
                  value="ricardo.queiros@gmail.com"
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
                :to="{name: 'listSponsor'}"
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
  import { ADD_SPONSOR } from "@/store/users/user.constants";
  import HeaderPage from "@/components/HeaderPage.vue"
  import router from "@/router";
  import { mapGetters } from "vuex";
  
  export default {
    name: "AddSponsor",
     components: {
      HeaderPage
    },
    data: () => {
      return {
        location: { city: "", country: "" },
        auth: { sponsorusername: "", password: "" },
        active: true,
        company_name: "",
        responsible_person: "",
		responsible_person_email: "",
        birth_date: "",
        company_description: ""
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
          this.$store.dispatch(`sponsor/${ADD_SPONSOR}`, this.$data).then(
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