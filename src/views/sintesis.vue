<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe una visión general del componente formativo Comprensión y uso de operaciones matemáticas. Este componente desarrolla habilidades en la interpretación, análisis y organización de información para la resolución efectiva de problemas. Inicia con la Interpretación de la información y el Planteamiento de soluciones, abordando la comprensión de datos y la interpretación de resultados. Continúa con la Elección de alternativa, seguida de un Ejemplo práctico que ilustra el proceso. Luego, se exploran las Propiedades de las operaciones matemáticas y se construyen Estrategias para resolver problemas, incluyendo métodos cuantitativos y geométricos. Finalmente, se presentan ejemplos de Solución de problemas matemáticos y geométricos que consolidan lo aprendido 

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Comprensión y uso de operaciones matemáticas, se describe una visión general de la interpretación, análisis y organización de información para la resolución efectiva de problemas.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
