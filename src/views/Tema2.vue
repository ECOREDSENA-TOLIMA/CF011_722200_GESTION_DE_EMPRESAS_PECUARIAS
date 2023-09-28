<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación

  
    Separador
      .row
        .col-xl-12       
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 2.1 Planeación estratégica

    Separador
      .row
        .col-xl-12       
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 2.2	 Proceso de planeación estratégica
        
    Separador
      .row
        .col-xl-12       
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 2.3	 Estructura organizacional

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
