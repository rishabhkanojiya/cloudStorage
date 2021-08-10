interface configType {}

export const config = {
  routes: {
    home: "/home",
    onBoard: "/onBoard",
    localstorage: "/localstorage",
    management: "/management",
    notifications: "/notifications",
    profile: "/profile",
  },

  routesClass: [
    {
      name: "home",
      classN: "fa fa-cloud",
      isSpecial: false,
    },
    {
      name: "localstorage",
      classN: "fa fa-check",
      isSpecial: false,
    },
    {
      name: "management",
      classN: "fa fa-plus",
      isSpecial: true,
    },
    {
      name: "notifications",
      classN: "fa fa-bell",
      isSpecial: false,
    },
    {
      name: "profile",
      classN: "fa fa-user",
      isSpecial: false,
    },
  ],
};
