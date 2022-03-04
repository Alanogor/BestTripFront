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
        icon: 'cil-home'
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
      {
        name:"Les guides",
        url:'/base/guides',
      },
      {
        name:"Les experience",
        url:"/base/experiences"
      }

      ,
      {
        name:"recommandation",
        url:'/base/recommandation',
        icon: "cil-sitemap"
      }
      

    ]
  }
];
