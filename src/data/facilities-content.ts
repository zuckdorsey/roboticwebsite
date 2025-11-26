export interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'lab' | 'workshop' | 'studio' | 'equipment';
  features: string[];
}

export const facilitiesContent = {
  title: "World-Class Facilities",
  subtitle: "Innovation Through Advanced Infrastructure",
  description: "Our state-of-the-art facilities provide students with hands-on experience using cutting-edge robotics technology and industry-standard equipment.",
  
  facilities: [
    {
      id: 1,
      name: "Robotics Laboratory",
      description: "Advanced laboratory equipped with industrial-grade robots, sensors, and control systems for comprehensive robotics research and development.",
      image: "/images/facilities/image.png",
      category: "lab" as const,
      features: [
        "Industrial Robot Arms (ABB, FANUC, KUKA)",
        "Collaborative Robots (Universal Robots)",
        "Motion Capture System",
        "Real-time Control Systems",
        "Advanced Sensor Arrays"
      ]
    },
    {
      id: 2,
      name: "AI & Computer Vision Lab",
      description: "Dedicated space for artificial intelligence research, machine learning experiments, and computer vision development with high-performance computing resources.",
      image: "/images/facilities/ai-lab.jpg",
      category: "lab" as const,
      features: [
        "GPU Computing Clusters",
        "Deep Learning Workstations",
        "High-Resolution Cameras",
        "3D Imaging Systems",
        "Edge AI Devices"
      ]
    },
    {
      id: 3,
      name: "Mechanical Workshop",
      description: "Fully-equipped workshop for fabricating robot components, prototypes, and mechanical assemblies with precision machinery.",
      image: "/images/facilities/workshop.jpg",
      category: "workshop" as const,
      features: [
        "CNC Machining Centers",
        "3D Printing Farm",
        "Laser Cutting Machines",
        "Welding Stations",
        "Precision Measurement Tools"
      ]
    },
    {
      id: 4,
      name: "Electronics Lab",
      description: "Modern electronics laboratory for circuit design, PCB fabrication, and embedded systems development.",
      image: "/images/facilities/electronics-lab.jpg",
      category: "lab" as const,
      features: [
        "PCB Design Stations",
        "Soldering & Assembly Tools",
        "Oscilloscopes & Analyzers",
        "Power Supply Units",
        "Embedded Development Kits"
      ]
    },
    {
      id: 5,
      name: "Autonomous Systems Arena",
      description: "Large testing arena for autonomous robots, drones, and mobile platforms with motion tracking and obstacle courses.",
      image: "/images/facilities/arena.jpg",
      category: "studio" as const,
      features: [
        "Indoor Flight Testing Area",
        "Autonomous Navigation Tracks",
        "Motion Capture Coverage",
        "Adjustable Obstacle Courses",
        "Multi-Robot Coordination Zone"
      ]
    },
    {
      id: 6,
      name: "Design Studio",
      description: "Creative workspace for CAD modeling, simulation, and collaborative design projects with industry-standard software.",
      image: "/images/facilities/design-studio.jpg",
      category: "studio" as const,
      features: [
        "High-Performance Workstations",
        "CAD/CAM Software Suite",
        "Simulation Environments",
        "Large Format Displays",
        "Collaboration Spaces"
      ]
    },
    {
      id: 7,
      name: "Mobile Robotics Lab",
      description: "Specialized laboratory for developing and testing mobile robots, AGVs, and autonomous vehicles.",
      image: "/images/facilities/mobile-lab.jpg",
      category: "lab" as const,
      features: [
        "AGV Platforms",
        "LiDAR & SLAM Systems",
        "Navigation Sensors",
        "Mobile Manipulation Units",
        "Outdoor Testing Ground"
      ]
    },
    {
      id: 8,
      name: "Advanced Equipment",
      description: "Collection of specialized robotics equipment and tools available for student projects and research.",
      image: "/images/facilities/equipment.jpg",
      category: "equipment" as const,
      features: [
        "Robotic Grippers & End Effectors",
        "Force/Torque Sensors",
        "Vision Systems",
        "Haptic Devices",
        "IoT & Connectivity Modules"
      ]
    }
  ]
};
