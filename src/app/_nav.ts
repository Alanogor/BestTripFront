import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
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
        name:"Les experience",
        url:"/base/experiences"
      }
    ]
  }
];
