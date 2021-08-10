export const config = {
  BASE_API: "https://my-json-server.typicode.com/rishabhkanojiya/data_Cloud/",

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
