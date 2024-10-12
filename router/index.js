const router = createRouter ({
  routes: [
    {
        path: '/', 
        name: 'home', 
        meta: {
          title: 'Stella Ylenia Potfolio'
        }
},

    
    { 
      name: 'not-found', 
      component: NotFound, 
      meta: {
        title: 'Erreur 404'
      }
    },
  ],
})