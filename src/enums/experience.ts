interface Experience {
    title: string;
    dateStart: string;
    dateEnd: string;
    description: string[];
}

export const PROJECTS: Experience[] = [
{
        dateStart: '2022-06-12',
        dateEnd: 'Actualmente',
        title: 'RSI',
        description: [
            'Desarrollo del frontend de proyectos de las diferentes aplicaciones de RSI con el Framework Vue, tanto maqueta como JavaScript.',
            'Desarrollo de un plan de onboarding sobre cómo se trabaja en el equipo de front de RSI, con el fin de formar a los nuevos perfiles.'
        ]
    },
    {
        dateStart: '2021-09-01',
        dateEnd: '2022-06-01',
        title: 'UVa - UID',
        description: [
            'Realizando una tesis con Inteligencia Artificial sobre un clasificador de semillas.',
            'Realizando en paralelo, como trabajo, proyectos de front dentro del laboratorio para diferentes clientes con Angular, Ionic y desarrollo web nativo.'
        ]
    },
    {
        dateStart: '2021-02-01',
        dateEnd: '2021-09-01',
        title: 'Deloitte',
        description: [
            'Realizando tareas de back con JSP y empleando el CMS Oracle WebCenter Sites, creando múltiples páginas web',
            'Realizando tareas de front nativo bajo demanda de los diferentes clientes.'
        ]
    },
    {
        dateStart: '2019-02-01',
        dateEnd: '2019-06-01',
        title: 'Enagas',
        description: [
            'Instrumentación y comunicaciones Gasoducto Tendrara en Marruecos.',
            'Actualización Maqueta de instrumentación y comunicaciones en Zaragoza'
        ]
    }
];