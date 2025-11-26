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
  title: "Our Success Stories",
  subtitle: "Real leaders share how they crushed dead-end leads and boosted sales with our game-changing AI solutions.", // I will adapt this text to be relevant to Robotics Alumni
  description: "Hear from our graduates who are now leading innovation in top technology companies around the world.",
  
  stories: [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Robotics Engineer",
      company: "Tesla",
      image: "/images/alumni/sarah.jpg",
      quote: "The hands-on experience at Polibatam gave me the confidence to tackle complex automation challenges. I'm now designing the next generation of assembly robots.",
      rating: 5,
      tags: ["Automation", "Industrial Robotics", "Control Systems"],
      graduationYear: "2019"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "AI Researcher",
      company: "Google DeepMind",
      image: "/images/alumni/michael.jpg",
      quote: "The curriculum's focus on both hardware and software was crucial. Understanding the physical constraints of robots helped me build better AI models.",
      rating: 5,
      tags: ["Artificial Intelligence", "Computer Vision", "Deep Learning"],
      graduationYear: "2020"
    },
    {
      id: 3,
      name: "Jessica Pratama",
      role: "System Architect",
      company: "Boston Dynamics",
      image: "/images/alumni/jessica.jpg",
      quote: "Polibatam didn't just teach me code; they taught me how to think like an engineer. The collaborative projects were exactly like what I do now in the industry.",
      rating: 5,
      tags: ["System Architecture", "Mobile Robots", "Team Leadership"],
      graduationYear: "2018"
    },
    {
      id: 4,
      name: "David Santoso",
      role: "Founder & CEO",
      company: "RoboTech Indonesia",
      image: "/images/alumni/david.jpg",
      quote: "Starting my own robotics company was a dream that started in the university labs. The mentorship from faculty was invaluable in my journey.",
      rating: 5,
      tags: ["Entrepreneurship", "IoT", "Product Design"],
      graduationYear: "2017"
    },
    {
      id: 5,
      name: "Emily Nguyen",
      role: "Operations Manager",
      company: "CloudSync Ltd.",
      image: "/images/alumni/emily.jpg",
      quote: "Manual tasks vanished overnight. AI automation saved us countless hours and revolutionized our entire workflow process!",
      rating: 5,
      tags: ["Operations", "Automation", "Efficiency"],
      graduationYear: "2021"
    }
  ]
};
