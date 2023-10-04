<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2        
        figure
          img(src='@/assets/curso/temas/img1.svg', alt='')          
      .col-lg-10
        p Estimado aprendiz, la planificación estratégica se define como un proceso meticuloso de formulación y ejecución de planes destinados a lograr propósitos y objetivos específicos. Este enfoque estratégico se emplea principalmente en contextos militares y en el ámbito empresarial. Podrá conocer algo más a este respecto, en el siguiente vídeo:
  
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/L6-ljAzDw2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
