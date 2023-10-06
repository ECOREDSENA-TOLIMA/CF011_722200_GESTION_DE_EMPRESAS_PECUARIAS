export default {
  global: {
    componenteFormativo: 'Planeación estratégica organizacional',
    descripcionCurso:
      'La planeación estratégica permite definir la cultura organizacional, diseñar estrategias, promover el trabajo en equipo y marcar la ruta para cumplir con los objetivos y metas que, desde la dirección, se plantean para posicionar la empresa en el mercado, lograr madurez empresarial y ser competitiva en el sector económico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Empresa',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Planeación estratégica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Proceso de planeación estratégic',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructura organizacional',
            hash: 't_2_3',
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
      tema: 'Planeación',
      referencia:
        'Ingenio Empresa. (2019). <em>Cómo definir MISIÓN, VISIÓN y VALORES organizacionales PASO a PASO paso a paso.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/RV9YrstWny0',
    },
    {
      tema: 'Planeación estratégica',
      referencia:
        'StraTgia - Planeamiento Estratégico. (2017). <em>Proceso de Planificación Estratégica- Planeamiento Estratégico.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UCFaXHPqynI',
    },
  ],
  glosario: [
    {
      termino: 'Análisis FODA',
      significado:
        'análisis de cuatro variables (oportunidades, amenazas, fortalezas y debilidades). Permite analizar las características de la empresa en relación con el medio que la envuelve, compensando las oportunidades con las amenazas y las fortalezas con las debilidades.',
    },
    {
      termino: 'Estrategia organizacional',
      significado:
        'Diseño e implementación de decisiones por el equipo de trabajo para alcanzar los objetivos definidos dentro de una organización.',
    },
    {
      termino: 'Grupos de interés',
      significado:
        'Personas u organizaciones involucradas de manera directa con la organización e impactan o son impactados por las decisiones que se toman dentro de esta.',
    },
    {
      termino: 'Mercado',
      significado:
        'Espacio y/o lugar físico donde se realiza el intercambio monetario de productos y servicios entre individuos y organizaciones.',
    },
    {
      termino: 'Planeación',
      significado:
        'Herramienta por la cual la organización establece objetivos, define equipos y asigna recursos para alcanzar las metas de la dirección. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Presidencia de la República. Ministerio de Justicia. (1971). Decreto 410 de 27 de marzo de 1971. (Ley 57 de 1971).',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'González, J., y Rodríguez, M. (2020). Manual práctico de planeación estratégica. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Ingenio Empresa. (2019). Cómo definir MISIÓN, VISIÓN y VALORES organizacionales PASO a PASO [Video].',
      link: 'https://youtu.be/RV9YrstWny0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ocampo Henao',
          cargo: 'Experta temática',
          centro: 'Regional Tolima - Centro Agropecuario La Granja ',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional distrito Capital -  Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
