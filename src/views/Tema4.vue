<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ejemplo práctico del proceso de información
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p A continuación, se presentará un ejemplo práctico para aplicar los conceptos de elección de alternativa y demostrar cómo seleccionar el enfoque más adecuado para resolver un problema. Este ejemplo demostrará el proceso de interpretación de la información, el planteamiento de soluciones y la elección de la alternativa correcta, permitiendo una comprensión más clara y práctica de los procedimientos discutidos.

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Situación problema
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2
        .cajon.color-secundario.p-4.mb-4
          p Para pintar las paredes de una casa, se requiere 1 litro (L) de pintura por cada 6 m² de área de superficie. Las paredes de la casa tienen un área aproximada de 480 m². ¿Cuánta pintura se necesita para pintar todas las paredes?
          ol.lista-ol--cuadro
            li
            .lista-ol--cuadro__vineta
              span(style="color:black;") a
            | 40 L
            li
            .lista-ol--cuadro__vineta
              span(style="color:black;") b
            | 80 L
            li
            .lista-ol--cuadro__vineta
              span(style="color:black;") c
            | 100 L
            li
            .lista-ol--cuadro__vineta
              span(style="color:black;") d
            | 3000 L
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proceso de solución

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Paso 1
              p Se realiza la interpretación de la información, donde es necesario identificar y resumir los datos proporcionados:
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Se utiliza 1 litro de pintura para cubrir 6 metros cuadrados.
                li
                  i.fas.fa-angle-right
                  | El área total a pintar es de 480 metros cuadrados.
                  
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img3.svg' alt='AvatarTop')          
          .tarjeta.tarjeta--azul
            .p-4
              h4 Paso 2
              p Se realiza el planteamiento de soluciones, donde se organiza la información en una tabla para facilitar el cálculo:
              .titulo-sexto.color-acento-contenido.offset-0
                h5 Tabla 1.
                span  #[i  Casa pintada ]
              .row.justify-content-center.align-items-center.mb-5
                  .col-lg-6
                  .tabla.mb-5
                    table
                      thead
                        tr
                          th(style="background-color:#6FD9FB;").text-center Litros
                          td(style="background-color:#F6F6F6;border:solid 1px #AFAFAF").text-center 1
                          td(style="background-color:#F6F6F6;border:solid 1px #AFAFAF").text-center X
                      tbody
                        tr
                          th(style="background-color:#A8E8FC;").text-center Metros#[sup 2]
                          td(style="background-color:#ffffff;border:solid 1px #AFAFAF").text-center 6
                          td(style="background-color:#ffffff;border:solid 1px #AFAFAF").text-center 480
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Para determinar la cantidad de pintura necesaria, se realiza la siguiente operación:
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img5.svg', alt='Imagen decorativa')
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Paso 3
              p se realiza la #[b elección de alternativa], donde se elige la correcta basada en el cálculo realizado. La cantidad de pintura necesaria es 80 litros, que corresponde a la opción b. 80 L. Este resultado es consistente con los datos proporcionados y valida la solución propuesta.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Este ejemplo demuestra cómo aplicar los pasos de elección de alternativa para asegurar que la solución propuesta sea precisa y adecuada, confirmando así la efectividad del proceso de resolución de problemas.
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
