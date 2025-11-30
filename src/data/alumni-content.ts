export interface AlumniStory {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  tags: string[];
  graduationYear: string;
}

export const alumniContent = {
  title: "Lorem Ipsum Dolor",
  subtitle: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
  stories: [
    {
      id: 1,
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      company: "Consectetur",
      image: "/images/alumni/sarah.jpg",
      quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5,
      tags: ["Lorem", "Ipsum", "Dolor"],
      graduationYear: "2019"
    },
    {
      id: 2,
      name: "Amet Consectetur",
      role: "Adipiscing Elit",
      company: "Eiusmod Tempore",
      image: "/images/alumni/michael.jpg",
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      rating: 5,
      tags: ["Sit", "Amet", "Elit"],
      graduationYear: "2020"
    },
    {
      id: 3,
      name: "Magna Aliqua",
      role: "Minim Veniam",
      company: "Ullamco Laboris",
      image: "/images/alumni/jessica.jpg",
      quote: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      rating: 5,
      tags: ["Quis", "Nostrud", "Exercitation"],
      graduationYear: "2018"
    },
    {
      id: 4,
      name: "Voluptate Velit",
      role: "Cillum Dolore",
      company: "Excepteur Sint",
      image: "/images/alumni/david.jpg",
      quote: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      rating: 5,
      tags: ["Fugiat", "Nulla", "Pariatur"],
      graduationYear: "2017"
    },
    {
      id: 5,
      name: "Est Laborum",
      role: "Officia Deserunt",
      company: "Mollit Anim",
      image: "/images/alumni/emily.jpg",
      quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      rating: 5,
      tags: ["Ipsam", "Voluptatem", "Aspernatur"],
      graduationYear: "2021"
    }
  ]
};