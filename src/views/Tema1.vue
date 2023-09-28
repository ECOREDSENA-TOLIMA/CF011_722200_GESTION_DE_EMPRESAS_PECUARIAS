<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Empresa
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="")
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            p Para comprender el concepto de empresa es importante entender que debe existir la iniciativa de desarrollar una actividad económica por una o más personas que, de manera organizada, distribuyen actividades y responsabilidades. Lo anterior para obtener un beneficio económico traducido en utilidad que puede generar una nueva inversión o aportes a la sociedad.
        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-primario.p-4.mb-4              
              p La empresa se debe concebir, entonces, como un miembro de gran importancia activo de la sociedad, dado que está creada para responder a las necesidades de la misma desde el sector público y privado; así mismo, aporta a la dinámica económica de un país a partir de la generación de empleo y el mejoramiento de la calidad de vida de los miembros que la constituyen.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el entorno económico del país la empresa se reconoce como persona jurídica con deberes y derechos dentro del entorno donde desarrolle su actividad, es regulada por entes del Estado como las superintendencias y se reconoce en el Código de Comercio (1971) como:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-secundario.p-4.mb-4
          p #[strong Empresa - Concepto.] Se entenderá por empresa toda actividad económica organizada para la producción, transformación, circulación, administración o custodia de bienes, o para la prestación de servicios. Dicha actividad se realizará a través de uno o más establecimientos de comercio (Artículo 25).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img2.svg", alt="")
      .col-lg-8
        p A lo largo de la historia las empresas han evolucionado en una forma acelerada, enfrentándose a:
        ul.lista-ul
          li
            i.fas.fa-check
            | Los cambios de la economía.
          li
            i.fas.fa-check
            | Los comportamientos del mercado.
          li
            i.fas.fa-check
            | El impacto ambiental.
          li
            i.fas.fa-check
            | Las tendencias administrativas y de dirección.
          li
            i.fas.fa-check
            | La llegada de la tecnología y su era digital.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p En consecuencia, han nacido diferentes escuelas administrativas que ayudan a las organizaciones en el proceso de adaptación a cada uno de estos cambios; por ello, se hace indispensable la manera de administrar, ya que juega un papel importante y se encarga de que las empresas puedan lograr los objetivos trazados al inicio de sus actividades sin importar los cambios que surjan en medio de su funcionamiento.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/temas/tema1/img3.png", alt="")
        .col-lg-8
          p Dadas estas situaciones se hace necesario planear actividades, delegar responsables, definir las etapas del proceso y herramientas de control y evaluación para cumplir con lo planeado desde el inicio y superar cada una de las etapas del ciclo de vida de las empresas sin salir del mercado. 
          p Las empresas generan, a lo largo del desarrollo de sus actividades, un estilo administrativo y una identidad corporativa que les permite madurar y fortalecerse frente a sus competidores y el mercado, por eso es necesario conocer las fases en el ciclo de vida de estas y, para ello, a continuación, se realiza una descripción de las características de las fases del ciclo de vida de las empresas:

      .tarjeta.tarjeta--amarilla.p-4(style="background-color:#DBF9BD")
        SlyderA(tipo="b")          
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                h3 Inicial
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Sus accionistas están dedicados ciento por ciento al desarrollo de las actividades de la organización. 
                  li
                    i.fas.fa-angle-right
                    | Existe incertidumbre, ansiedad y miedo a los retos futuros.
                  li
                    i.fas.fa-angle-right
                    | No se tiene una estructura organizacional establecida.
                  li
                    i.fas.fa-angle-right
                    | Desorden administrativo, sueldos bajos, crisis de liderazgo.
                  li
                    i.fas.fa-angle-right
                    | La creatividad está en aumento y la comunicación fluye de manera rápida.
                  li
                    i.fas.fa-angle-right
                    | Mayor eficiencia que eficacia.
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img4.svg', alt='Inicial')
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                h3 Formal
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Se incrementa el número de colaboradores.
                  li
                    i.fas.fa-angle-right
                    | Se planea la sistematización de la organización.
                  li
                    i.fas.fa-angle-right
                    | Se presenta necesidades de dirección, pero existe un temor a delegar funciones.
                  li
                    i.fas.fa-angle-right
                    | La toma de decisiones se hace más lenta dado que la comunicación se vuelve más formal.
                  li
                    i.fas.fa-angle-right
                    | Los procesos se enfocan en la eficacia.

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img5.svg', alt='Formal')
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                h3 Motivacional
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Se desarrolla una estructura organizacional, existe un aumento de operaciones y se establece una planeación a largo plazo.
                  li
                    i.fas.fa-angle-right
                    | Aumenta la motivación de los colaboradores y existe una respuesta rápida al cambio.
                  li
                    i.fas.fa-angle-right
                    | Se delegan actividades y responsables de procesos, pero se genera crisis de control.

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img6.svg', alt='Motivacional')
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                h3 Relacional
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Se crean equipos de trabajo e incrementa el flujo de información dentro de la organización.
                  li
                    i.fas.fa-angle-right
                    | Se generan sistemas de control y evaluación.
                  li
                    i.fas.fa-angle-right
                    | Se genera una cultura y crecimiento organizacional.
                  li
                    i.fas.fa-angle-right
                    | Aumenta las reuniones de equipo y se generan crisis de burocracia.
            
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img7.svg', alt='Relacional')
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                h3 Matricial
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | La organización ha alcanzado su punto más alto de madurez trabajando en la solución conjunta de problemas.
                  li
                    i.fas.fa-angle-right
                    | Los colaboradores y directivos crean lazos fuertes de trabajo, aumentando los equipos de trabajo, la colaboración y el autocontrol.
                  li
                    i.fas.fa-angle-right
                    | Se generan crisis de reconocimiento.
            
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img8.svg', alt='Matricial')
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
