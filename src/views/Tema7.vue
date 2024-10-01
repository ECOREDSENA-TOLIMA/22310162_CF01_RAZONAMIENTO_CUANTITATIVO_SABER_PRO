<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Solución de problemas matemáticos y geométricos
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_1.h2 7.1 Problema de probabilidad

      
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_2.h2 7.2 Problema cuantitativo de álgebra
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_3.h2 7.3 Problema cuantitativo

    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_3.h2 7.4 Problema de perímetro y área de figuras geométricas

    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_5.h2 7.5 Problema área y volumen de cuerpos 


</template>

<script>
export default {
  name: 'Tema3',
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
