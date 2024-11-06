<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Solución de problemas matemáticos y geométricos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema7/img1.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center
      .col-lg-12
        p(data-aos="fade-right") En esta sección se abordará la solución de diversos problemas matemáticos que ejemplifican situaciones prácticas. Se presentarán problemas relacionados con probabilidad, álgebra, geometría y cálculo de áreas y volúmenes, utilizando métodos y fórmulas matemáticas esenciales para resolverlos. Cada problema incluirá un análisis detallado de los datos proporcionados y un enfoque paso a paso para llegar a la solución, facilitando la comprensión y aplicación de los conceptos matemáticos en contextos reales.
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_1.h2 7.1 Problema de probabilidad
    .row.bg--gradientBlue.mb-4
      .col-12
        .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema7/img2.png', alt='Imagen decorativa')
          .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    |#[b Pregunta:] ¿cuál es la probabilidad de que al tirar un dado se obtenga un 3?
                  li
                    i.fas.fa-angle-right
                    |#[b Solución:] como se trata de un caso de probabilidad simple, se debe aplicar la siguiente fórmula:
                    p 
                    .row.justify-content-center.align-items-center.mb-3
                      .col-lg-8
                        .tarjeta.p-3.divgeome
                          figure
                            img(src='@/assets/curso/temas/tema7/img3.svg', alt='Se presenta la probabilidad de que ocurra un evento, se calcula dividiendo el número de veces que dicho evento sucede entre el número total de resultados posibles. Esta fórmula expresa cómo se determina la posibilidad de un evento en función de los resultados favorables y los posibles resultados totales en un experimento aleatorio.')
                    p En este caso, el número total de posibles resultados al lanzar un dado es 6 (ya que el dado tiene 6 caras). El evento que estamos analizando es obtener un 3, que solo ocurre en una de las 6 caras.
                    p Entonces, la probabilidad es:
                    p 
                    .row.justify-content-center.align-items-center.mb-3
                      .col-lg-8
                        .tarjeta.p-3.divgeome
                          figure
                            img(src='@/assets/curso/temas/tema7/img4.svg', alt='Se presenta la probabilidad de que ocurra un evento con 1 de 6 resultados posibles es igual a 1/6, lo que se aproxima a 0.1667 o aproximadamente 16.67 %. Esto indica que, en un experimento con 6 resultados igualmente probables, la probabilidad de que ocurra uno específico es de 16.67 %')
                    p Por lo tanto, la probabilidad de obtener un 3 al lanzar un dado es 0.1667.

      
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_2.h2 7.2 Problema cuantitativo de álgebra
    .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
        .col-lg-12(data-aos="fade-right")
    ul.lista-ul
      li(data-aos="fade-right")
        i.fas.fa-angle-right(style="color:#6FD9FB")
        |#[b Pregunta:] si tenemos dos números tales que su suma es igual a 34, y el doble del mayor excede en 20 al menor, ¿cuáles son esos números?
      li(data-aos="fade-right")
        i.fas.fa-angle-right(style="color:#6FD9FB")
        |#[b Solución:] primero, se identifican las incógnitas del problema. Nos piden determinar dos números, uno mayor que el otro. Utilizaremos las letras a y b para representar las incógnitas, y como uno es mayor que el otro, diremos que a > b.

    .row.justify-content-center.align-items-center.mb-3.mt-4
      .col-lg-6
        .tarjeta.tarje-azul.p-4.mb-4
          p Se plantean dos ecuaciones a partir de la información dada:
          .row.justify-content-center.align-items-center
            .col-lg-10
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span a 
                | a + b = 34 (la suma de los dos números es 34).
                li
                .lista-ol--cuadro__vineta
                  span b
                | 2a = b + 20 (el doble del mayor excede en 20 al menor).
          p Ahora, se resuelve el sistema de ecuaciones usando el método de sustitución:
          li 
            | Despejamos b en la primera ecuación: b = 34 − a.
          li 
           | Sustituimos b = 34 − a en la segunda ecuación:
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8
              .tarjeta.p-1.divgeome
                p.mb-0.text-center #[b 2a = (34 − a) + 20]
          p Al resolver esta ecuación, se obtiene:
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8
              .tarjeta.p-1.divgeome
                p.mb-0.text-center #[b 2a + a = 54 lo que nos da 3a = 54]
          p Al despejar a:
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8
              .tarjeta.p-1.divgeome
                p.mb-0.text-center #[b a = 18]                
          p Finalmente, sustituyendo a = 18 en la ecuación b = 34 − a:
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8
              .tarjeta.p-1.divgeome
                p.mb-0.text-center #[b b = 16]
          p Por lo tanto, los números son a = 18 y b = 16.

      .col-lg-4.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema7/img5.svg', alt='Imagen decorativa')


    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_3.h2 7.3 Problema cuantitativo
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema7/img6.png', alt='Imagen decorativa')
      .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
        p #[b Pregunta:] un sistema de transporte urbano en una ciudad de Colombia utiliza dos tipos de buses. La tabla muestra la información del número de pasajeros que puede transportar cada tipo de bus. ¿Cuál es la expresión que permite determinar la capacidad máxima de pasajeros que pueden transportar la totalidad de buses?
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Tabla 2.
          span  #[i  Número de pasajeros según el bus ]
        .row.justify-content-center.align-items-center.mb-5
            .col-lg-6
            .tabla-a.color-acento-contenido
              table
                thead(style="background-color:#6FD9FB")
                  tr
                    th Bus tipo I
                    th Bus tipo II
                tbody
                  tr(style="background-color:#F6F6F6")
                    td Numero de sillas: 36
                    td Numero de sillas: 48
                  tr 
                    td Pasajeros de pie: 100
                    td Pasajeros de pie: 112
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-2
            p Opciones:
          .col-lg-5
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span a
              | [75 × (36 + 48)] + [60 × (100 + 112)]
              li
              .lista-ol--cuadro__vineta
                span b
              | (75 + 60) × (36 + 100 + 48 + 112)
          .col-lg-5
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span c
              | (75 + 60) + (36 + 100 + 48 + 112)
              li
              .lista-ol--cuadro__vineta
                span d
              | [75 × (36 + 100)] + [60 × (48 + 112)]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p #[b Solución:] La opción correcta es la D. Dado que el total de buses tipo I es 75 y la máxima cantidad de pasajeros por bus se describe mediante la suma del número de sillas con el número de pasajeros de pie (36 + 100), la expresión que calcula el total del máximo número de pasajeros en todos los buses tipo I será el producto de la suma:
        .row.justify-content-center.align-items-center.mb-3
            .col-lg-4
              .tarjeta.p-1.divgeomeverde
                p.mb-0.text-center #[b 75 × (36 + 100) + 60 × (48 + 112)]
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_3.h2 7.4 Problema de perímetro y área de figuras geométricas

    .row.bg--gradientBlue.mb-5
      .col-10
        .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema7/img8.svg', alt='Imagen decorativa')
          .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    |#[b Pregunta:] hallar la circunferencia y el área de un círculo de diámetro 6 cm.
                  li
                    i.fas.fa-angle-right
                    |#[b Solución:] la circunferencia de un círculo se calcula con la fórmula C = 𝜋 × d, donde d es el diámetro. Entonces, la circunferencia es:
                    p 
                    .row.justify-content-center.align-items-center.mb-3
                      .col-lg-4
                        .tarjeta.p-1.divgeomeverde
                          p.mb-0.text-center #[b C = 𝜋 × 6 cm = 6 𝜋 cm]
                    p El área del círculo se calcula con la fórmula A = 𝜋 × r#[sup 2], donde r es el radio. Como el diámetro es 6 cm, el radio es r = 3 cm:
                    p 
                    .row.justify-content-center.align-items-center.mb-3
                      .col-lg-4
                        .tarjeta.p-1.divgeomeverde
                          p.mb-0.text-center #[b A = 𝜋 × 3#[sup 2] = 9𝜋 cm#[sup 2]]
                    p Por lo tanto, la circunferencia es 6𝜋 cm y el área es 9𝜋 cm#[sup 2].


    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_7_5.h2 7.5 Problema área y volumen de cuerpos 
    
    .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
      .col-lg-12(data-aos="fade-right")
    ul.lista-ul
      li
        i.fas.fa-angle-right(style="color:#6FD9FB")
        |#[b Pregunta:] un cubo tiene una superficie total de 360 cm#[sup 2]. ¿Qué volumen tiene este cubo?
      li
        i.fas.fa-angle-right(style="color:#6FD9FB")
        |#[b Solución:] la superficie total del cubo es la suma de las áreas de sus seis caras, cada una de las cuales es un cuadrado. Si la longitud de un lado del cubo es x, entonces:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4
        
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-12
              .tarjeta.p-1.divgeomeverde
                p.mb-0.text-center #[b 6x#[sup 2] = 360 cm#[sup 2]]
          p.text-center Al dividir por 6:
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-12
              .tarjeta.p-1.divgeomeverde
                p.mb-0.text-center #[b x#[sup 2] = 60 cm#[sup 2]]                
          p.text-center Al tomar la raíz cuadrada de ambos lados:
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-12
              .tarjeta.p-1.divgeomeverde
                p.mb-0.text-center #[b x = 5 cm]
          p.text-center El volumen del cubo se calcula como:
          p
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-12
              .tarjeta.p-1.divgeomeverde
                p.mb-0.text-center #[b V = x#[sup 3] = 5#[sup 3] = 125 cm#[sup 3]]
          p.text-center Por lo tanto, el volumen del cubo es 125 cm#[sup 3].

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema7/img11.png', alt='Imagen decorativa')

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
