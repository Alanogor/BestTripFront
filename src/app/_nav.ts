import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Accueil',
        url: '/base/home',
        icon: 'cil-flight-takeoff'
      },
      {
        name:"Les guides",
        url:'/base/guides',
        icon:"cil-book"
      },
      {
        name:"Les experiences",
        url:"/base/experiences",
        icon:"cil-camera"
      }

      ,
      {
        name:"recommandation",
        url:'/base/recommandation',
        icon: "cil-lightbulb ampoule"
      },
      {
        name: 'Les utilisateurs',
        url: '/base/users',
        icon: 'icon-user'
      },
      {
        name:"Les roles",
        url:'/base/roles',
        icon: "cil-sitemap"
      },

    ]
  }
];
