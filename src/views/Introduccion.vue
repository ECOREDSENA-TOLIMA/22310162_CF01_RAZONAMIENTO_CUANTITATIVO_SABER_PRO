<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p El componente formativo, Comprensión y uso de operaciones matemáticas, está diseñado para que los aprendices adquieran y apliquen conocimientos matemáticos esenciales en contextos tanto cotidianos como profesionales. Este componente abarca desde la interpretación y el análisis de información presentada en diversos formatos hasta la aplicación de estrategias y métodos cuantitativos para resolver problemas específicos.
        p Su objetivo principal es desarrollar en los aprendices la capacidad de abordar problemas matemáticos de manera crítica y efectiva, fortaleciendo sus competencias en la organización y tratamiento de la información, así como en la elección y justificación de las mejores alternativas para la solución de problemas.
        p A lo largo del curso, los aprendices serán guiados en el proceso de construcción de estrategias matemáticas, desde la comprensión de los conceptos básicos hasta la resolución de problemas complejos, mediante un enfoque práctico que integra teoría y práctica. De esta manera, se busca que los participantes no solo dominen las operaciones matemáticas básicas, sino que también sean capaces de aplicarlas de forma efectiva en la toma de decisiones y en la resolución de situaciones reales.
          
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0wvJ1TD2w8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
