export default {
    mounted( el, binding ) {

    let scroll = function (evt) {
      if (binding.value(evt, el)) {
        document.body.removeEventListener('scroll', scroll);
      }
    }
    document.body.addEventListener('scroll', scroll);

    },

    unmounted( el ) {
        el.onscroll = null;
        console.log( "unmounted scroll", el );
    }

}
