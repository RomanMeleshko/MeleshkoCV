<template>
 <div id="Registration">
    <div class="container-fluid p-0">
       <div class="container-fluid-wrapper">

          <div class="registration-block">

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <TitleBlock :title="title"></TitleBlock>

                </div>
             </div>

             <form id="form" action="" method="post">

                <div class="row justify-content-center mx-0">
                   <div class="col px-0 mx-2 min-width-col" v-for="item in names" :key="item.id">

                      <Input :title="item.name"
                            :class_name="simple"
                            @getValue="text"
                      ></Input>

                   </div>
                </div>

                <div class="row justify-content-center mx-0">
                   <div class="col px-0 mx-2">

                      <InputEmail :title="label_email"
                                   :class_name="regular"
                                   @getValue="email"
                       ></InputEmail>

                   </div>
                </div>

                <div class="row justify-content-center mx-0">
                   <div class="col px-0 mx-2">

                      <InputSelect :title="label_select"
                                   :class_name="simple"
                                   @getValue="select"
                      ></InputSelect>

                   </div>
                </div>

                <div class="row justify-content-center mx-0" v-for="item in names_password" :key="item.id">
                   <div class="col px-0 mx-2">

                      <InputPassword :title="item.name"
                                     :class_name="regular"
                                     @getValue="password"
                       ></InputPassword>

                   </div>
                </div>

                <div class="row justify-content-center mx-0">
                   <div class="col px-0 mx-2 my-4">

                      <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                         <span class="form-check-label pl-2" for="flexCheckDefault">
                            I agree with the
                            <router-link to="" target="_blank">
                             <span>Private Policy</span>
                            </router-link>
                            and
                            <router-link to="" target="_blank">
                             <span>Terms & Conditions</span>
                            </router-link>
                         </span>
                      </div>

                   </div>
                </div>

                <div class="row justify-content-center mx-0">
                   <div class="col px-0 mx-2">

                      <ButtonBlock :name="name_button"
                                   :class_name="simple"
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
import Input from "../../components/Input/Input.vue";
import InputEmail from "../../components/Input/InputEmail.vue";
import InputSelect from "../../components/Input/InputSelect.vue";
import InputPassword from "../../components/Input/InputPassword.vue";
import ButtonBlock from "../../components/Button/ButtonBlock.vue";

export default {
  name: "Registration",
  data() {
    let string;

    return {
      title: string = "Sing Up",
      name_button: "Sing Up",
      names: [] = [
        { id: 1, name: "Призвіще" },
        { id: 2, name: "Ім'я" },
        { id: 3, name: "Побатькові" }
      ],
      first_name: string = "",
      last_name: string = "",
      surname: string = "",
      simple: string = "simple",
      regular: string = "regular",
      label_email: string = "Email",
      label_select: string = "Номер телефона",
      names_password: [] = [
          { id: 1, name: "Пароль" },
          { id: 2, name: "Повторіть пароль" }
      ]
    }
  },

  methods: {
    text( value: string ) {
      console.log( value );
    },

    email( value: string ) {
      console.log( value );
    },

    select( value: string ) {
      console.log( value );
    },

    password( value: string ) {
      console.log( value );
    }
  },

  components: {
    TitleBlock,
    Input,
    InputEmail,
    InputSelect,
    InputPassword,
    ButtonBlock
  }
}
</script>

<style lang="scss" scoped>

 .container-fluid {
   height: 100%;
   position: absolute;
   background: #F8F9FA;
 }

.registration-block {
   top: 80px;
   max-width: 600px;
   margin: auto;
   position: relative;
 }

 .min-width-col {
   min-width: 180px;
 }

</style>
