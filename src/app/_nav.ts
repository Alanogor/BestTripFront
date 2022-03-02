import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Laissez vous guider',
    url: '/base',
    icon: 'cil-wallpaper',
    children: [
      {
        name: 'Tous',
        url: '/base/user',
        icon: 'cil-map'
      },
      {
        name:"France",
        url:'/base/roles',
        icon: "cif-fr"
      },
      {
        name:"Belgique",
        url:'/base/roles',
        icon: "cif-be"
      },
      {
        name:"Espagne",
        url:'/base/roles',
        icon: "cil-es"
      } 
    ]
  },
  {
    name:"On vous recommande",
    url:"/buttons",
    icon:"cil-thumb-up",
    children:[
      {
        name:"Tout",
        url:"experience"
        //icon:
      },
      {
        name:"pays"
        //url:
        //icon:
      },
      {
        name:"Aerien"
        //url:
        //icon:
      },{
        name:"Maritime",
        //url:
        icon:"cil-boat-alt",
      },
    ]
  },
  {
    name:"On vous raconte",
    //url:
    icon:"cil-speak",
    children:[
      {
        name:"Restautent",
        //url:
        icon:"cil-house",
      },
      {
        name:"Hotel"
        //url:
        //icon:
      }
    ]
  },
  {
    name:"Vos récits",
    //url:
    icon:"cil-pen-nib"
  },
  {
    name:"Vos voyages",
    //url:
    icon:"cil-truck",
  },
  {
    name:"Vos conseils"
    //url:
    //icon:
  },
  {
    name:"Gestion",
    //url:
    //icon:
    children:[
      {
        name:"pays"
        //url:
        //icon:
      },
      {
        name:"Aerien"
        //url:
        //icon:
      },{
        name:"Maritime"
        //url:
        //icon:
      },
    ]
  },
];
