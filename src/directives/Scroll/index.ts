export default {
    mounted( el: Object, binding: any ) {

    let scroll = function ( evt: any ): void {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', scroll);
      }
    }
    window.addEventListener('scroll', scroll);

    },

    unmounted( el: any ) {
        el.onscroll = null;
    }

}
