<template>
 <div id="Success">
    <div class="container-fluid p-0">
       <div class="container-fluid-wrapper">

          <div class="success-block p-3">

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <TitleBlock :show_icon="false"
                   ></TitleBlock>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <TitleImage :title="title"
                               :large_title="true"
                               :image="image"
                               :show_image="true"
                   ></TitleImage>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 max-width-col">

                   <Title :title="text"></Title>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 py-3 max-width-col">

                   <TitleAll></TitleAll>

                </div>
             </div>

             <div class="row justify-content-center mx-0">
                <div class="col px-0 py-3 max-width-col">

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
import Title from "../../components/Title/Title.vue";
import TitleAll from "../../components/Title/TitleAll.vue";
import ButtonBlock from "../../components/Button/ButtonBlock.vue";
import TitleImage from "../../components/Title/TitleImage.vue";

export default {
  name: "Success",
  data() {
    let string

    return {
      title: string = "Well Done!",
      image: string = "src/assets/Mark.png",
      text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name_button: string = "Далі",
      simple: string = "simple",
    }
  },

  components: {
    TitleBlock,
    Title,
    TitleAll,
    ButtonBlock,
    TitleImage
  }
}
</script>

<style lang="scss" scoped>

 .success-block {
   top: 109px;
   position: relative;
   max-width: 600px;
   margin: auto;
 }

 .container-fluid {
   height: 100%;
   position: absolute;
   background: #F8F9FA;
 }

</style>
