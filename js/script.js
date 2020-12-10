var nav = new Vue({

el:"#nav_links",
data:{
    links:[
      "HOME",
      "ABOUT",
      "SERVICES",
      "PROCESS",
      "TESTIMONIALS"
    ],
    logo:"img/fake_logo.png",
  },
methods:{


  }

});


var foot = new Vue({

el:"#foot_links",
data:{
    foot_index:0,
    footer_links:[
    {
      links:
      [
      "The Company",
      "Institutional",
      "Social & Events",
      "Innovation",
      "Environment",
      "Technology"
      ]
    },

    {
      links:
      [
      "Industrialized",
      "chemicals",
      "packaged Liquids",
      "Construction",
      "Laminated Xood",
      "And Others"
      ]
    },

    {
      links:
      [
      "Responsibility",
      "Term of Use",
      "About Cookies",
      "Privacy Policy",
      "Accessibility",
      "Information"
      ]
    }

    ]

  },
methods:{


  }

})
