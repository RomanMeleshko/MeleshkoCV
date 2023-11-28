<template>
  <div id="Login">
     <div class="welcome-page">
        <div class="welcome-page-wrapper">

           <div class="login-block">

             <TitleBlock :title="title"
                         :show_image="false"
             ></TitleBlock>

             <TitleImage :title="title"
             ></TitleImage>

              <form id="form" action="" method="post" @submit="checkForm">

                 <div class="row justify-content-center">
                    <div class="col max-width-col">

                       <InputEmail :title="label_email"
                                   :class_name="simple"
                                   @getValue="email"
                       ></InputEmail>

                    </div>
                 </div>

                 <div class="row mx-0 justify-content-center">
                    <div class="col max-width-col">

                       <InputPassword :title="label_password"
                                      :class_name="simple"
                                      @getValue="password"
                       ></InputPassword>

                    </div>
                 </div>

                 <div class="row justify-content-center">
                    <div class="col py-3 text-end max-width-col">

                       <div class="forgot-block">
                          <div class="forgot-wrapper-block">
                             <span>{{ forgot_name }}</span>
                                <router-link to="/password" target="_blank">
                                  <span>{{ remind_name }}</span>
                                </router-link>
                          </div>
                       </div>

                    </div>
                 </div>

                 <div class="row justify-content-center">
                    <div class="col px-0 max-width-col">

                       <ButtonBlock :name="name"
                       ></ButtonBlock>

                    </div>
                 </div>

              </form>

           </div>

        </div>
     </div>
  </div>
</template>

<script lang="ts">
import TitleBlock from "../../components/Title/TitleBlock.vue";
import InputEmail from "../../components/Input/InputEmail.vue";
import InputPassword from "../../components/Input/InputPassword.vue";
import ButtonBlock from "../../components/Button/ButtonBlock.vue";
import TitleImage from "../../components/Title/TitleImage.vue";

export default {
  name: "Login",
  data() {
    let string;

    return {
       title: string = "Вход",
       name: string = "Войти",

       simple: string = "simple",
       hard: string = "hard",

       label_email: string = "Email",
       label_password: string = "Password",

       forgot_name: string = "Забыли пароль?",
       remind_name: string = "Напомнить?"

    }
  },

  methods: {

    email( value: string ) {
      console.log( value );
    },

    password( value: string ) {
      console.log( value );
    },

     checkForm( e: object ) {

       // console.log( this.email );
       // console.log( this.check_password );


        // fetch("http://localhost:8001/rpc", {
        //   method: "POST",
        //   headers: {
        //        "Content-Type": "application/json",
        //      },
        //   body: JSON.stringify ({
        //     "jsonrpc": "2.0",
        //     "id": "39dd6dbe-7a69-4741-a06a-526ceaccae45",
        //     "method": "AuthProcedure@login",
        //      "params": {
        //         "email": this.email,
        //         "password": this.check_password
        //      }
        //   })
        // }).then( response => {
        //     return response.json();
        //
        // }).then( res => {
        //
        //   alert( res.result.message );
        //
        //   this.$router.push('/home');
        //
        // });


       // e.preventDefault();
     }
  },
  components: {
    TitleBlock,
    InputEmail,
    InputPassword,
    ButtonBlock,
    TitleImage
  }
}

</script>

<style lang="scss" scoped>

 .login-block {
   top: 109px;
   max-width: 600px;
   margin: auto;
   position: relative;
 }

 .max-width-col {
   max-width: 370px;
 }

</style>
