<template>
 <div id="password">
    <div class="container-fluid">
       <div class="container-fluid-wrapper">

          <div class="password-block">

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <TitleBlock :show_icon="true"
                   ></TitleBlock>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <TitleImage :title="title"
                               :small_title="true"
                   ></TitleImage>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col text-center">

                   <Title :title="title_under"
                          :small_text="true"
                          :color_gray="true"
                   ></Title>

                </div>
             </div>

             <form id="form" action="" method="post">

                <div class="row justify-content-center">
                   <div class="col px-0 py-2 password max-width-col">

                      <InputEmail :title="label_email"
                                  :class_name="simple"
                                  @getValue="email"
                      ></InputEmail>

                   </div>
                </div>

                <div class="row justify-content-center">
                   <div class="col px-0 py-2 max-width-col">

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
import ButtonBlock from "../../components/Button/ButtonBlock.vue";
import Title from "../../components/Title/Title.vue";
import TitleImage from "../../components/Title/TitleImage.vue";

export default {
  name: "Password",
  data() {
    let string;
    return {
      title: string = "Востановление пароля",
      label_email: string = "Email",
      simple: string = "simple",
      title_under: string = "Пожалуйста, введите адресс електронной почты.\n" +
                            "Мы вышлем вам инструкцию по востановлению пароля.",
      name: string = "Отправить"
    }
  },
  methods: {
    email( value: string ) {
      console.log( value );
    }
  },
  components: {
    TitleBlock,
    InputEmail,
    ButtonBlock,
    Title,
    TitleImage
  }
}
</script>

<style scoped>

.password-block {
  top: 109px;
  position: relative;
}

.max-width-col {
  max-width: 370px;
}

</style>
