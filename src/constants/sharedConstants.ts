import { DashboardMenuType, OptionsType } from "types/sharedTypes";

export const menu: DashboardMenuType[] = [
    {
      name: 'Home',
      link: '/admin/home',
      icon: 'fas fa-home-lg-alt'
    },
    {
      name: 'Upload',
      link: '/admin/upload',
      icon: 'fas fa-cloud-upload'
    },
    {
      name: 'Movies',
      link: '/admin/movies',
      icon: 'fas fa-video'
    },
    {
      name: 'Users',
      link: '/admin/users',
      icon: 'fas fa-user'
    },
  ]

  export const options: OptionsType[] = [
    { label: "Drama", value: "drama" },
    { label: "Comedy", value: "comedy" },
    { label: "Anime", value: "Anime" },
  ];