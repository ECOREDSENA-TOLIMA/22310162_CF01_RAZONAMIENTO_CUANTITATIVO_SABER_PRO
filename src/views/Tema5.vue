<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Solución de problemas de matemáticas básicas y propiedades
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La solución de problemas es una habilidad fundamental en la vida cotidiana y en el ámbito profesional. Dada su relevancia, es esencial estudiar y comprender diferentes enfoques que potencien las habilidades matemáticas. Se subraya la importancia de caracterizar y analizar situaciones problemáticas, así como de comprender las propiedades inherentes a los sistemas numéricos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p El desarrollo de la competencia para resolver problemas matemáticos básicos y el conocimiento de las propiedades matemáticas presentadas en esta sección contribuirán a fortalecer la capacidad de aplicar estas herramientas en contextos diversos. Es crucial abordar estos conceptos con dedicación y esfuerzo, pues el dominio de estas habilidades tendrá un impacto positivo en los resultados.
        p Antes de proceder, se recomienda reflexionar sobre qué es un problema y explicarlo en términos personales para luego compartirlo con compañeros e instructores.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-3
          p Una perspectiva de solución: un problema es una situación que presenta un reto o una pregunta que necesita ser resuelta, y en su solución, se debe determinar el método más adecuado para alcanzar la respuesta deseada.
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_5_1.h2 5.1 Orientación para resolver problemas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p La solución de problemas es una competencia clave que se aplica en múltiples ámbitos, desde lo cotidiano hasta lo profesional. En matemáticas, resolver problemas no solo mejora las habilidades lógicas y analíticas, sino que también desarrolla la capacidad de tomar decisiones informadas basadas en razonamientos cuantitativos.
    
    .tarjeta.tarjeta--azul.bg-img.p-4.mb-5(data-aos="zoom-in")
        SlyderA(tipo='b')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Comprensión del problema
              p El primer paso esencial en la resolución de problemas es una comprensión clara y precisa del problema planteado. Esto implica leer detenidamente el enunciado, identificar los datos relevantes, y entender lo que se solicita. Es útil parafrasear el problema o explicarlo en palabras propias para asegurar su comprensión.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img2.png', alt='')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Planificación de la solución
              p Una vez que se entiende el problema, es necesario desarrollar un plan de acción. Este plan puede involucrar la selección de las operaciones matemáticas adecuadas, la creación de diagramas o gráficos, o la descomposición del problema en pasos más pequeños y manejables. Aquí se utilizan los conocimientos previos para formular una estrategia de resolución.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img3.png', alt='')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Ejecución del plan
              p con el plan en mente, el siguiente paso es ponerlo en práctica. Este proceso incluye realizar los cálculos necesarios, aplicar fórmulas, y utilizar herramientas matemáticas. Es importante proceder con cuidado para evitar errores y revisar cada paso del proceso.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Verificación de la solución
              p después de haber obtenido una solución, es crucial verificarla. Esto puede implicar revisar los cálculos, considerar si la respuesta tiene sentido en el contexto del problema, o comprobar si se han seguido correctamente todos los pasos del plan inicial. En algunos casos, es útil resolver el problema por un método diferente para confirmar la exactitud del resultado.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img5.png', alt='')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Reflexión y mejora
              p finalmente, es beneficioso reflexionar sobre el proceso utilizado para resolver el problema. ¿Qué pasos fueron efectivos?, y ¿Dónde hubo dificultades? Reflexionar sobre estas preguntas permite mejorar las habilidades de resolución de problemas y aplicar estos aprendizajes en futuras situaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img6.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Además, es importante recordar que la práctica constante y la exposición a una variedad de problemas son fundamentales para desarrollar y perfeccionar esta competencia. La habilidad para resolver problemas matemáticos es un proceso que se fortalece con la experiencia y la reflexión continua.
        
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_5_2.h2 5.2 Características de los problemas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Los problemas matemáticos, en su amplia diversidad, comparten ciertas características que son cruciales para su comprensión y resolución. Identificar y entender estas características es fundamental para abordar cualquier problema de manera efectiva. A continuación, se presentan y desarrollan las seis características comunes de los problemas matemáticos:
    
    .tarjeta.tarjeta--gris.bg-img.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-secundario(text-small)
        .row(titulo="a")
          .col-md-6.mb-4.mb-md-0
            h4 Un problema no es una adivinanza
            p A diferencia de las adivinanzas, los problemas matemáticos requieren un enfoque lógico y estructurado. No se trata de hacer conjeturas o suposiciones al azar, sino de aplicar un razonamiento cuidadoso y utilizar el conocimiento previo para encontrar una solución precisa. Este aspecto resalta la importancia del pensamiento crítico y analítico en la resolución de problemas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
        .row(titulo="b")
          .col-md-6.mb-4.mb-md-0
            h4 Aplicación del conocimiento matemático
            p todo problema matemático tiene un campo específico de aplicación, ya sea en álgebra, geometría, aritmética, o cualquier otra rama de las matemáticas. Este campo define los conceptos y principios que se deben utilizar para resolver el problema. La correcta identificación de estos conceptos es crucial para seleccionar los métodos y herramientas adecuados, como el uso de algoritmos, fórmulas, o procedimientos específicos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
        .row(titulo="c")
          .col-md-6.mb-4.mb-md-0
            h4 Fomento de capacidades cognitivas
            P Resolver un problema matemático implica un desafío que estimula el desarrollo de diversas capacidades cognitivas. Estas incluyen la capacidad de razonamiento lógico, la habilidad para pensar abstractamente, y la competencia para establecer conexiones entre diferentes conceptos matemáticos. Este reto no solo fortalece el conocimiento matemático, sino que también promueve habilidades de pensamiento crítico y resolución de problemas en general.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen decorativa')
        .row(titulo="d")
          .col-md-6.mb-4.mb-md-0
            h4 Atracción y motivación
            p Un buen problema matemático suele tener un atractivo intrínseco que motiva a los estudiantes a enfrentarlo. Este atractivo puede surgir de la curiosidad que genera el planteamiento del problema, la relevancia que tiene para el contexto del estudiante, o la satisfacción que proviene de encontrar una solución correcta. Esta motivación es esencial para mantener el interés y el compromiso durante el proceso de resolución.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Imagen decorativa')
        .row(titulo="e")
          .col-md-6.mb-4.mb-md-0desde la primera lectura, un problema matemático suele revelar su nivel de dificultad, lo que permite al estudiante anticipar los desafíos que enfrentará. Este compromiso inicial ayuda a preparar una estrategia adecuada, determinar los recursos necesarios y gestionar el tiempo y esfuerzo que se invertirá en la solución. Comprender el nivel de dificultad también es útil para ajustar las expectativas y evitar la frustración.
            h4 Compromiso con el nivel de dificultad
            p Desde la primera lectura, un problema matemático suele revelar su nivel de dificultad, lo que permite al estudiante anticipar los desafíos que enfrentará. Este compromiso inicial ayuda a preparar una estrategia adecuada, determinar los recursos necesarios y gestionar el tiempo y esfuerzo que se invertirá en la solución. Comprender el nivel de dificultad también es útil para ajustar las expectativas y evitar la frustración.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')
        .row(titulo="f")
          .col-md-6.mb-4.mb-md-0
            h4 Satisfacción al resolverlo
            p Uno de los aspectos más gratificantes de resolver un problema matemático es la sensación de logro que se experimenta al llegar a una solución correcta. Esta satisfacción no solo refuerza el aprendizaje, sino que también aumenta la confianza del estudiante en sus habilidades matemáticas. Además, resolver problemas exitosamente puede inspirar a los estudiantes a enfrentar nuevos desafíos con una actitud positiva y proactiva. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Es importante reconocer que los problemas matemáticos, en muchos casos, no tienen una única solución correcta. La exploración de diferentes enfoques y la consideración de múltiples perspectivas enriquecen el proceso de aprendizaje y permiten desarrollar una comprensión más profunda y flexible de los conceptos matemáticos. Asimismo, algunos problemas pueden requerir la aplicación de habilidades interdisciplinares, combinando matemáticas con otras áreas del conocimiento.
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_5_3.h2 5.3 Propiedades de las operaciones matemáticas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Las operaciones matemáticas básicas, como la suma, la multiplicación, y la división, tienen propiedades fundamentales que facilitan su uso y comprensión. Conocer estas propiedades es esencial para resolver problemas de manera eficiente y para manipular expresiones matemáticas con mayor soltura. A continuación, se presentan y explican las propiedades más relevantes de las operaciones matemáticas:
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Suma

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img13.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Propiedad conmutativa]
        p La propiedad conmutativa establece que el orden de los sumandos no altera el resultado de la suma. Es decir, al sumar dos o más números, se puede cambiar su orden sin que cambie el total.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 5 + 7 = 7 + 5 = 12]
        p.mb-5 Esta propiedad es especialmente útil al simplificar expresiones matemáticas y al realizar cálculos mentales, ya que permite reorganizar los números de manera conveniente.
        listul.lista-ul
          li 
            | #[b Propiedad asociativa]
        p La propiedad asociativa indica que cuando se suman tres o más números, la forma en que se agrupan no afecta el resultado. Esto significa que se pueden agrupar los sumandos de diferentes maneras para facilitar el cálculo.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: (5 + 7) + 3 = 5 + (7 + 3) = 15]
        p.mb-5 Esta propiedad permite que los números se agrupen de la forma más conveniente para simplificar las operaciones, especialmente en sumas largas o complejas.
        listul.lista-ul
          li 
            | #[b Propiedad neutra o del elemento neutro]
        p El elemento neutro de la suma es el cero. La propiedad neutra establece que cualquier número sumado a cero permanece igual.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 8 + 0 = 8]
        p Esta propiedad es fundamental en álgebra y en la resolución de ecuaciones, donde el cero juega un papel crucial. 

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Multiplicación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img14.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Propiedad conmutativa]
        p Al igual que en la suma, la propiedad conmutativa de la multiplicación establece que el orden de los factores no altera el producto. Esto significa que se pueden cambiar de lugar los números que se multiplican sin que el resultado cambie.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 4 × 6 = 6 × 4 = 24]
        p.mb-5 Esta propiedad es útil para reorganizar factores en multiplicaciones complejas y para facilitar la comprensión de los conceptos de multiplicación.
        listul.lista-ul
          li 
            | #[b Propiedad asociativa]
        p La propiedad asociativa de la multiplicación establece que cuando se multiplican tres o más números, la forma en que se agrupan no afecta el producto.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: (2 × 3) × 4 = 2 × (3 × 4) = 24]
        p.mb-5 Esta propiedad facilita el cálculo de productos más largos, permitiendo agrupar factores de manera que se simplifiquen los cálculos.
        listul.lista-ul
          li 
            | #[b Propiedad distributiva]
        p La propiedad distributiva relaciona la suma con la multiplicación y establece que multiplicar un número por una suma es lo mismo que multiplicar ese número por cada uno de los sumandos y luego sumar los productos obtenidos.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-5
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 3 × (4 + 5) = (3 × 4) + (3 × 5) = 12 + 15 = 27 ]
        p.mb-5 Esta propiedad es fundamental en la resolución de ecuaciones y en la simplificación de expresiones algebraicas.
        listul.lista-ul
          li 
            | #[b Propiedad neutra o del elemento neutro]
        p El elemento neutro de la multiplicación es el uno. La propiedad neutra establece que cualquier número multiplicado por uno permanece igual.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 9 × 1 = 9 ]
        p.mb-5 Esta propiedad es clave en muchos contextos matemáticos, especialmente en la simplificación de expresiones y en la resolución de ecuaciones.
        listul.lista-ul
          li 
            | #[b Propiedad del cero]
        p Cualquier número multiplicado por cero da como resultado cero. Esta es una propiedad exclusiva de la multiplicación.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 7 × 0 = 0]
        p.mb-5 Esta propiedad es fundamental en álgebra y en la comprensión de las funciones matemáticas, ya que establece una relación directa con el concepto de identidad y valores nulos. 
        

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 División

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img14.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Propiedad de la inversa]
        p La división se puede entender como la operación inversa de la multiplicación. Dividir un número por otro es equivalente a multiplicarlo por el inverso del divisor.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 12 / 4 = 12 x 1 / 4 = 3]
        p.mb-5 Esta propiedad es esencial para resolver ecuaciones que involucran fracciones y para comprender la relación entre multiplicación y división.
        listul.lista-ul
          li 
            | #[b Propiedad del cociente]
        p La propiedad del cociente establece que el cociente de un número dividido por uno es el propio número. Además, cualquier número dividido por sí mismo es uno.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b Ejemplo: 8 / 1 = 8 y 8 / 8 = 1]
        p.mb-5 Esta propiedad refuerza la idea del uno como el elemento neutro en la división y subraya la identidad de los números bajo ciertas operaciones.

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
