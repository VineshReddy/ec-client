
export const footerList = [
  {
    label: 'Customer Services',
    subitems: [
      {
        label: 'Contact Us',
        external: false,
        url: '/contactus'
      },
      {
        label: 'Submit a Query',
        external: false,
        url: '/'
      },
      {
        label: 'Customer Care',
        external: false,
        url: '/'
      }
    ]
  },
  {
    label: 'About',
    subitems: [
      {
        label: 'About Us',
        external: false,
        url: '/'
      },
      {
        label: 'Press',
        external: true,
        url: 'https://www.adsfas.com'
      }
    ]
  },
  {
    label: 'Other Services',
    subitems: [
      {
        label: 'Become an Affilate',
        external: false,
        url: '/'
      },
      {
        label: 'Advertise',
        external: false,
        url: '/'
      }
    ]
  },
]
export const social = {
  facebook: 'https://www.fb.com',
  twitter: 'fb.com',
  instagram: 'fb.com',
  pinterest: 'pin.com',
  youtube: 'yt.com'
}

export const drawerMenu = [
  {
    label:'Account',
    icon: 'AccountBoxIcon',
    url:'/',
    sublabels: [
      {
        label:'Login',
        icon: 'LockOpenIcon',
        url:'/'
      },
      {
        label:'Register',
        icon: 'VpnKeyIcon',
        url:'/'
      },
  ]
  },
  {
    label:'Orders',
    icon: 'ViewListIcon',
    url:'/'
  },
  {
    label:'WishList',
    icon: 'StarsIcon',
    url:'/'
  },
  {
    label:'Notifications',
    icon: 'NotificationsIcon',
    url:'/'
  },
  {
    label:'Messages',
    icon: 'MessageIcon',
    url:'/'
  },
  {
    label:'Logout',
    icon: 'ExitToAppIcon',
    url:'/'
  },
]

export const accountMenu = [
  {
    label:'Account',
    icon: 'AccountBoxIcon',
    url:'/',
    sublabels: [
      {
        label:'Login',
        icon: 'LockOpenIcon',
        url:'/'
      },
      {
        label:'Register',
        icon: 'VpnKeyIcon',
        url:'/'
      },
  ]
  },
  {
    label:'Orders',
    icon: 'ViewListIcon',
    url:'/'
  },
  {
    label:'WishList',
    icon: 'StarsIcon',
    url:'/'
  },
  {
    label:'Notifications',
    icon: 'NotificationsIcon',
    url:'/'
  },
  {
    label:'Messages',
    icon: 'MessageIcon',
    url:'/'
  },
  {
    label:'Logout',
    icon: 'ExitToAppIcon',
    url:'/'
  },
]

export const Menu = [
  {
    id: 'categories',
    label: 'Categories',
    component: 'CategoriesComponent'
  },
  {
    id: 'offers',
    label: 'Offers',
    component: 'OffersComponent'
  },
  {
    id: 'help',
    label: 'Help',
    component: 'HelpComponent'
  }
]



export const categories = [
  {
    id: 'groceries',
    label: 'Groceries',
  },
  {
    id: 'personalcare',
    label: 'Personal Care'
  },
  {
    id: 'householditems',
    label: 'Household Items'
  },
  {
    id: 'babycare',
    label: 'Baby Care'
  },
  {
    id:'petfood',
    label: 'Pet Food'
  }
] 


export const groceries = [
  {
    id: 'pulses',
    label: 'Pulses'
  },
  {
    id: 'flours',
    label: 'Flours'  
  },
  {
    id: 'nuts',
    label: 'Nuts'
  },
  {
    id: 'dryfruits',
    label: 'Dry Fruits'
  },
  {
    id: 'edibleoils',
    label: 'Edible Oils'
  },
  {
    id: 'spices',
    label: 'Spices'
  },
  {
    id: 'saltsugar',
    label: 'Salt & Sugar'
  },
  {
    id: 'organicgroceries',
    label: 'Organic Groceries'
  }
]


export const palette = {
    "common": {
        "black": "#000",
        "white": "#fff"
    },
    "background": {
        "paper": "#fff",
        "default": "#fafafa"
    },
    "primary": {
        "light": "#7986cb",
        "main": "#3f51b5",
        "dark": "#303f9f",
        "contrastText": "#fff"
    },
    "secondary": {
        "light": "#ff4081",
        "main": "#f50057",
        "dark": "#c51162",
        "contrastText": "#fff"
    },
    "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
    },
    "text": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
    }
}
