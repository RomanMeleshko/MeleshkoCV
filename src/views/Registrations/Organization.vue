<template>
 <div id="Organization">
    <div class="container-fluid p-0">
       <div class="container-fluid-wrapper">

          <div class="organization-block p-2">

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <TitleBlock :show_icon="false"
                   ></TitleBlock>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <TitleImage :title="title"
                               :small_title="true"
                               :image="image"
                               :show_image="true"
                   ></TitleImage>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0">

                   <Title :title="text"
                   ></Title>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0">

                   <Input :title="title_input"
                          :small_text="small_text"
                   ></Input>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 pt-3">

                   <InputArea :title="title_area"
                   ></InputArea>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 pt-4">

                   <Title :title="text_organization"
                   ></Title>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 pt-4">

                   <ButtonBlock :name="name_button"
                                :class_name="simple"
                   ></ButtonBlock>

                </div>
             </div>

          </div>

         </div>
      </div>

 </div>
</template>

<script lang="ts">
import TitleBlock from "../../components/Title/TitleBlock.vue";
import TitleImage from "../../components/Title/TitleImage.vue";
import Title from "../../components/Title/Title.vue";
import Input from "../../components/Input/Input.vue";
import InputArea from "../../components/Input/InputArea.vue";
import ButtonBlock from "../../components/Button/ButtonBlock.vue";

export default {
  name: "Organization",
  data() {
    let string;

    return {
      title: string = "Створіть свою першу організацію",
      image: string = "src/assets/Organization.png",
      title_input: string = "Назва організації",
      title_area: string = "Короткий опис",
      small_text: string = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.",
      text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      text_organization: string = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name_button: string = "Створити",
      simple: string = "simple"
    }
  },

  components: {
    TitleBlock,
    TitleImage,
    Title,
    Input,
    InputArea,
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

 .organization-block {
   top: 80px;
   max-width: 600px;
   margin: auto;
   position: relative;
 }

 .max-width-col {
   max-width: 400px;
 }
</style>
