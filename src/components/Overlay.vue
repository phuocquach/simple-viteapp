<template>
    <div>
       <ProgressSpinner/>
    </div>
</template>
<script>
import ProgressSpinner from 'primevue/progressspinner';

export default {
    name: "Overlay",
    props:{

    },
    data(){
      return {
          size: 64,
          overlay: false
      }
    },
    methods: {
        created(){

        },
        mounted() {
            this.overlay = true;
            //setTimeout(2000, () => this.overlay = false);
        },
    }
}
</script>