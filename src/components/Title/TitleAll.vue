<template>
 <div id="TitleAll">

    <div class="title-all-block d-flex">

       <div class="icon-block p-4">
         <img src="/src/assets/Mail.png" alt="logo" width="50" height="50" />
       </div>
       <div class="text-block">
          <Title :title="item.text"
                  v-for="item in titles"
                  :key="item.id"
          ></Title>
       </div>


    </div>

 </div>
</template>

<script lang="ts">
import Title from "./Title.vue";

export default {
  name: "TitleAll",
  data() {
    let string

    return {
      titles: [] = [
        {
          id: 1,
          text: string = "Ми відправили на ваш email лист з посиланням для підтвердження вашого email"
        },
        {
          id: 2,
          text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          link: true,
          text: string = "Відправити повторно..."
        }
      ]
    }
  },

  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>

 .icon-block {
   display: flex;
   align-items: center;
 }
</style>
