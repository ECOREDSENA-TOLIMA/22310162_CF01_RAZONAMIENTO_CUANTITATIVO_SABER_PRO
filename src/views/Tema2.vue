<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planteamiento de soluciones
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        p(data-aos="fade-right") Después de interpretar la información mediante el tratamiento de los datos y su análisis, el siguiente paso en el proceso de resolución de problemas es el planteamiento de un esquema, modelo o plan para llegar a la respuesta correcta. Este proceso se desglosa en dos aspectos fundamentales: comprender la información proporcionada y luego interpretar los resultados desde una perspectiva aleatoria.
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_1.h2 2.1 Comprensión de la información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p La comprensión de la información es el primer paso en el planteamiento de soluciones. Una vez completado el tratamiento y análisis de los datos, es fundamental desarrollar una comprensión profunda del problema y formular un plan de acción detallado. Este plan debe integrar las operaciones, procedimientos y cálculos necesarios, estableciendo una secuencia lógica para abordar el problema.
        p Para lograr una comprensión efectiva de la información, se recomienda seguir estos pasos:

    .row.slyder-b-img.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-11(style="margin-top:50px;")
        SlyderB.mb-5(:datos="datosSlyder")
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_2.h2 2.2 Interpretación de resultados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p La interpretación de los resultados es una etapa esencial que sigue al planteamiento de soluciones. Esta fase tiene como objetivo evaluar la coherencia y validez de las respuestas obtenidas, asegurando que se alineen con las hipótesis iniciales y los principios teóricos relevantes.
        p Para interpretar los resultados de manera efectiva, se deben considerar los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Evaluar la coherencia de los resultados")
            .col-md-12.mb-4.mb-md-0
              p Comparar los resultados obtenidos con las expectativas y condiciones establecidas en el problema. Verificar que las respuestas sean consistentes con el modelo de solución y los datos disponibles.
                      
          .row(titulo="Analizar la validez de las soluciones")
            .col-md-12.mb-4.mb-md-0
              p Confirmar que las respuestas sean válidas dentro del contexto del problema. Esto incluye verificar que las soluciones satisfagan todos los requisitos y restricciones planteados.
                      
          .row(titulo="Reflexionar sobre las conclusiones")
            .col-md-12.mb-4.mb-md-0
              p Evaluar las conclusiones derivadas de los resultados y considerar su impacto en la solución del problema. Analizar si los resultados ofrecen una solución completa y adecuada o si se necesitan ajustes adicionales.
          
          .row(titulo="Validar con ejemplos y casos prácticos")
            .col-md-12.mb-4.mb-md-0
              p Probar las soluciones con casos adicionales o ejemplos similares para asegurar que la solución es robusta y aplicable en diferentes contextos. Esto ayuda a confirmar la validez y la utilidad de los resultados obtenidos.
          
          .row(titulo="Documentar y comunicar los resultados")
            .col-md-12.mb-4.mb-md-0
              p Registrar los hallazgos de manera clara y detallada, y comunicarlos efectivamente a las partes interesadas. Una presentación bien estructurada de los resultados puede facilitar la comprensión y la aplicación de las soluciones. 
          
      .col-lg-4.d-lg-flex.d-none(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p La interpretación precisa y detallada de los resultados garantiza que las soluciones sean no solo correctas, sino también relevantes y útiles para resolver el problema planteado de manera efectiva.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Revisar el esquema de resolución',
        texto:
          'Utilizar el plan preliminar creado durante la fase de análisis como referencia. Este esquema debe servir para estructurar los pasos a seguir y asegurar que todos los aspectos del problema se aborden adecuadamente.',
        imagen: require('@/assets/curso/temas/tema2/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Desarrollar una estrategia detallada',
        texto:
          'Definir un enfoque claro que incluya las operaciones matemáticas necesarias, así como los procedimientos a seguir. La estrategia debe ser específica y adaptada a las características del problema.',
        imagen: require('@/assets/curso/temas/tema2/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gestionar el tiempo de manera eficiente',
        texto:
          'Asignar un tiempo adecuado para la resolución del problema, evitando la prisa que pueda llevar a errores. Es importante equilibrar la rapidez con la precisión en la ejecución del plan.',
        imagen: require('@/assets/curso/temas/tema2/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Buscar apoyo y colaboración',
        texto:
          'Si surgen dificultades, consultar con colegas o expertos puede proporcionar nuevas perspectivas y soluciones alternativas. La colaboración y el intercambio de ideas pueden enriquecer el proceso de resolución.',
        imagen: require('@/assets/curso/temas/tema2/img5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Persistir y ajustar la estrategia',
        texto:
          'Reconocer que los primeros intentos pueden no ser exitosos es parte del proceso de resolución. Es crucial ajustar la estrategia y probar diferentes enfoques para encontrar la solución más efectiva.',
        imagen: require('@/assets/curso/temas/tema2/img6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
