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
        download: 'downloads/CF01_22310162_DU.pdf',
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
      tema: 'Ejemplo práctico del proceso de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). SENA - La Regla de 3 [Proporcionalidad] - Fácil y Rápido [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jBy0s72XiAo',
    },
    {
      tema: 'Solución de problemas matemáticos y geométricos',
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2023). Razonamiento Cuantitativo Saber Pro y Saber TyT [PDF].',
      tipo: 'Página web',
      link:
        'file:///E:/Nueva%20carpeta/Descargue%20AQU%C3%8D%20el%20marco%20de%20referencia%20-%20Razonamiento%20Cuantitativo%20Saber%20Pro%20(1).pdf',
    },
    {
      tema: 'Solución de problemas matemáticos y geométricos',
      referencia:
        'Guía de orientación Saber Pro. Módulo de competencias genéricas. (2024). Guía de orientación Saber Pro: Módulo de competencias genéricas.',
      tipo: 'Página web',
      link:
        'https://www.icfes.gov.co/documents/39286/1452156/26+Diciembre_GDO+Mo%CC%81dulos+Gene%CC%81ricos+Saber+Pro+2024-1.pdf',
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
        'Blanco Nieto, L. J., Cárdenas Lizarazo, J. A., & Caballero Carrasco, A. (2015). La resolución de problemas de Matemáticas.',
      link:
        'file:///E:/Nueva%20carpeta/La%20resoluci%C3%B3n%20de%20problemas%20de%20Matem%C3%A1ticas%20en%20la%20formaci%C3%B3n%20inicial%20de%20profesores%20de%20Primaria.pdf',
    },
    {
      referencia: 'Escudero, J. (s.f.). Resolución de problemas.',
      link: 'http://platea.pntic.mec.es/jescuder/prob_int.htm#0',
    },
    {
      referencia: 'Estrategia de estudio (Método POLYA). (n.d.).',
      link: 'https://www.youtube.com/watch?v=-919CQtH2H2w',
    },
    {
      referencia:
        'Grupo Cero. (1984). De 12 a 16. Un currículum de Matemáticas. Valencia España: Mestral Libros.',
      link: '',
    },
    {
      referencia:
        'Hofstadter, D. (1979). Gödel, Escher, Bach: Un eterno y grácil bucle. Nueva York, Estados Unidos: Basic Books.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
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
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
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
