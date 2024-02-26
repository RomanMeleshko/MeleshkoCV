import { Tooltip } from "bootstrap";

export default {
    mounted( el: any, binding: any ) {

        new Tooltip(el, {
            placement: binding.arg || 'top',
            title: binding.value,
        });

    },

    unmounted( el: any ) {
        el.onmouseenter = null;
    }

}
