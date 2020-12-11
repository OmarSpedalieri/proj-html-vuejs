
var nav = new Vue({

el:"#nav_links",
data:{
    links:[
      "HOME",
      "ABOUT",
      "SERVICES",
      "PROCESS",
      "TESTIMONIALS"
    ]
  },
methods:{


  }

});

var foot = new Vue({

el:"#foot_links",
data:{
    desc:"A functional HTML template for Corporate & Business",
    footer_contacts:[
      {icon:'fas fa-phone-alt',text:'+1 (305) 1234-5678'},
      {icon:'fas fa-envelope',text:'hello@example.com'},
      {icon:'fas fa-map-marker-alt',text:'Main Avenue, 987'}

    ],
    footer_links:
    [
      {
        title:'About',
        links:
        [
          {name:"The Company", link:"https://www.gazzetta.it"},
          {name:"Institutional", link:"https://www.google.com"},
          {name:"Social & Events", link:"https://www.google.com"},
          {name:"Innovation", link:"https://www.google.com"},
          {name:"Environment", link:"https://www.google.com"},
          {name:"Technology", link:"https://www.google.com"},
        ]
      },

      {
        title:'Transport',
        links:
        [
          {name:"Industrialized", link:"https://www.google.com"},
          {name:"Chemicals", link:"https://www.google.com"},
          {name:"Packaged Liquids", link:"https://www.google.com"},
          {name:"Construction", link:"https://www.google.com"},
          {name:"Laminated Wood", link:"https://www.google.com"},
          {name:"And Others", link:"https://www.google.com"},
        ]
      },

      {
        title:'Support',
        links:
        [
          {name:"Responsibility", link:"https://www.google.com"},
          {name:"Term of Use", link:"https://www.google.com"},
          {name:"About Cookies", link:"https://www.google.com"},
          {name:"Privacy Policy", link:"https://www.google.com"},
          {name:"Accessibility", link:"https://www.google.com"},
          {name:"Information", link:"https://www.google.com"},
        ]
      }

    ]

  },
methods:{


  }

})
