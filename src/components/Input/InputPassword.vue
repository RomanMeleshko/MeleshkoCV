<template>
  <div id="Input-password">

     <div class="password-block">

        <div class="text-password my-2 text-left">
           <label for="passwordInput">{{ title }}</label>
        </div>
        <div class="input-group" :class="class_name">
          <input id="passwordInput" v-model="password" name="password" :type="show_password" class="form-control" aria-label="Amount (to the nearest dollar)">
           <span class="input-group-text small-icon">
              <a @click="toggle" href="#" :class="password_view"></a>
           </span>
        </div>
        <div class="text-left">
          <span :class="indicator_color">{{ indicator }}</span>
        </div>

     </div>

  </div>
</template>

<script lang="ts">

export default {
  name: "Input-password",
  data() {
    let string;

    return {
      indicator: string = "",
      indicator_color: string = "",
      password: string = "",
      show_password: string = "password",
      password_view: string = "password_view",
    }
  },

  watch: {

     password( value ) {
       this.$emit( 'getValue', value );
     },

     check_password( value: string ) {

        if( value.length ) {
          this.indicator = "";
        }
        if( value.length > 5 ) {
           this.indicator = "низкий уровень пароля";
           this.indicator_color = "red";
        }
        if( value.length > 10 ) {
           this.indicator = 'средний уровень пароля';
           this.indicator_color = "orange";
        }
        if( value.length > 15 ) {
           this.indicator = 'высокий уровень пароля';
           this.indicator_color = "green";
        }

     }

  },

  methods: {
     toggle() {

        this.show_password = this.show_password === "password" ? "text" : "password";
        this.password_view = this.password_view === "password_view" ? "password_view_show" : "password_view"

     },
  },

  props: {
    title: {
      type: String
    },
    class_name: {
      type: String
    }
  }
}

</script>

<style lang="scss" scoped>

 .simple {
   height: 56px;
   outline: none;
   font-size: 16px;
   border: 1px solid #586C8C;
   border-radius: 8px;
 }

 .regular {
   height: 42px;
   border-radius: 8px;
   border: 1px solid #CCCCCC;
 }

 .small-icon {
   border-right: none;
   border-top: none;
   border-bottom: none;
   border-left: 2px solid #CCCCCC;
 }

 .form-control:not(:last-child) {
    border: none;
 }

 .password_view {
	 width: 20px;
	 height: 20px;
	 background: url("../../src/assets/view.svg") 0 0 no-repeat;
 }
 .password_view_show {
	 width: 20px;
	 height: 20px;
	 background: url("../../src/assets/no-view.svg") 0 0 no-repeat;
}

.red {
  color: red;
}
.orange {
  color: orange;
}
.green {
  color: green;
}

</style>
