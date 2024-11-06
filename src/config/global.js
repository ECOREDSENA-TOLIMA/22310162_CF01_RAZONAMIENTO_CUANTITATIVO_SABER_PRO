export default {
  global: {
    componenteFormativo: 'Comprensión y uso de operaciones matemáticas',
    descripcionCurso:
      'El componente formativo aborda la comprensión y uso de operaciones matemáticas para la solución de problemas, centrándose en la interpretación de situaciones a través de diversas representaciones numéricas y simbólicas. Se estudian conceptos básicos de álgebra, cálculo, probabilidad, estadística y geometría, aplicando estrategias y métodos cuantitativos en contextos cotidianos y profesionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Interpretación de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tratamiento de la información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis de la información',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planteamiento de soluciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Comprensión de la información',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Interpretación de resultados',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elección de alternativa',
        desarrolloContenidos: true,

        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concretar el resultado',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Organización de la información',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ejemplo práctico del proceso de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Solución de problemas de matemáticas básicas y propiedades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Orientación para resolver problemas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características de los problemas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Propiedades de las operaciones matemáticas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Construcción de estrategias para resolver problemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estrategias para la solución de problemas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Desarrollo de una estrategia para solucionar problemas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Método cuantitativo',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Áreas y perímetros de figuras geométricas',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Áreas y volúmenes de cuerpos geométricos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Solución de problemas matemáticos y geométricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Problema de probabilidad',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Problema cuantitativo de álgebra',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Problema cuantitativo',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Problema de perímetro y área de figuras geométricas',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Problema área y volumen de cuerpos',
            hash: 't_7_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_22310162_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4. Ejemplo práctico del proceso de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). SENA - La Regla de 3 [Proporcionalidad] - Fácil y Rápido [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jBy0s72XiAo',
    },
  ],
  glosario: [
    {
      termino: 'Álgebra',
      significado:
        'Rama de las matemáticas que estudia las relaciones estructuras y cantidades a través de símbolos y letras para representar números y operaciones.',
    },
    {
      termino: 'Análisis',
      significado:
        'Proceso de descomponer la información en partes más pequeñas para comprenderla mejor y encontrar relaciones entre los datos.',
    },
    {
      termino: 'Área',
      significado:
        'Medida de la superficie de una figura geométrica expresada en unidades cuadradas.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan o método diseñado para abordar y resolver problemas de manera eficiente y efectiva.',
    },
    {
      termino: 'Geometría',
      significado:
        'Rama de las matemáticas que estudia las propiedades y relaciones de los puntos, líneas, ángulos, superficies y sólidos.',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos organizados que tienen un significado y pueden ser utilizados para resolver problemas o tomar decisiones.',
    },
    {
      termino: 'Perímetro',
      significado: 'Longitud total del contorno de una figura geométrica.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'Medida de la posibilidad de que ocurra un evento expresada como un número entre 0 y 1.',
    },
    {
      termino: 'Resultado',
      significado:
        'Solución obtenida después de realizar cálculos o resolver un problema.',
    },
    {
      termino: 'Volumen',
      significado:
        'Medida del espacio tridimensional que ocupa un cuerpo expresada en unidades cúbicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco Nieto, L. J., Cárdenas Lizarazo, J. A., & Caballero Carrasco, A. (2015). La resolución de problemas de Matemáticas. Colección manuales UEX – 98. [PDF].',
      link: '',
    },
    {
      referencia: 'Escudero, J. (s.f.). Resolución de problemas.',
      link: '',
    },
    {
      referencia: 'Estrategia de estudio (Método POLYA). (n.d.). YouTube.',
      link: 'https://www.youtube.com/watch?v=919CQtH2H2w',
    },
    {
      referencia:
        'Fernández, S. (1992). Prensa y educación matemática. Madrid, España: Síntesis.',
      link: '',
    },
    {
      referencia:
        'Grupo Cero. (1984). De 12 a 16. Un currículum de Matemáticas. Valencia, España: Mestral Libros.',
      link: '',
    },
    {
      referencia:
        'Guzmán, M. (1984). Para pensar mejor. Barcelona, España: Labor.',
      link: '',
    },
    {
      referencia:
        'Hemmerling, E. (2002). Geometría elemental. México, D.F.: Limusa.',
      link: '',
    },
    {
      referencia:
        'Hofstadter, D. (1979). Gödel, Escher, Bach: Un eterno y grácil bucle. Nueva York, Estados Unidos: Basic Books.',
      link: '',
    },
    {
      referencia:
        'Icfes. (2013). Módulo de razonamiento cuantitativo SABER PRO 2013 - 1.',
      link:
        'http://www.tecnar.edu.co/sites/default/files/pdfs/M%C3%B3dulo-RAZONAMIENTO%20CUANTITATIVO.pdf ',
    },
    {
      referencia:
        'Módulo Razonamiento Cuantitativo. Niveles de desempeño. (2023).',
      link: '',
    },
    {
      referencia:
        'Polya, G. (1965). Cómo plantear y resolver problemas. México, D.F.: Trillas.',
      link: '',
    },
    {
      referencia:
        'Ruiz, J. (2019). Métodos cuantitativos para la toma de decisiones. Madrid: Ediciones Díaz de Santos.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hugo García Calderón',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño Tecnológico Industrial - Regional Valle',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
