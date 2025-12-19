/*
╭──────────────────────────────────────────────────────────────────╮
│                        PORTFOLIO PROJECT                          │
╰──────────────────────────────────────────────────────────────────╯

Project : Polibatam Robotic Major Website
Author  : zuckdorsey
Website : https://ababil.is-not-a.dev
GitHub  : zuckdorsey
Year    : 2025

This project showcases my technical skills and coding style.
Feel free to explore and provide feedback!
*/

export interface Course {
  code: string;
  name: string;
  credits: number;
  description: string;
  type: 'mandatory' | 'elective';
}

export interface Semester {
  semester: number;
  courses: Course[];
}

export const curriculumContent: {
  title: string;
  subtitle: string;
  description: string;
  semesters: Semester[];
} = {
  title: "Curriculum Structure",
  subtitle: "Comprehensive 8-Semester Program",
  description:
    "Our curriculum is designed to provide a solid foundation in robotics engineering technology, combining theoretical knowledge with practical skills.",

  semesters: [
    {
      semester: 1,
      courses: [
        {
          code: "RE101",
          name: "Introduction to Robotics Engineering",
          credits: 3,
          description:
            "This course introduces students to the fundamental concepts of robotics, including robot anatomy, kinematics, and basic programming. Students will learn about different types of robots, their applications in various industries, and the historical development of robotics technology. The course also covers ethical considerations in robotics and future trends in the field.",
          type: "mandatory",
        },
        {
          code: "RE102",
          name: "Procedural Programming",
          credits: 3,
          description:
            "Introduction to programming using Python and C++. Topics include variables, data types, control structures, functions, arrays, and basic object-oriented programming. Students will learn algorithm design, debugging techniques, and best coding practices. The course emphasizes programming skills necessary for robot control and automation systems.",
          type: "mandatory",
        },
        {
          code: "RE103",
          name: "Principles of Electrical and Electronics Engineering",
          credits: 3,
          description:
            "Introduction to fundamental electrical and electronic concepts, including voltage, current, resistance, circuits, power, and semiconductor basics. Students will learn to analyze simple circuits and understand how electronic components are used in robotic systems.",
          type: "mandatory",
        },
        {
          code: "RE104",
          name: "Computer Aided Design and Drafting",
          credits: 3,
          description:
            "Covers the principles of technical drawing and 3D modeling using CAD software. Students will learn to create engineering drawings, assemblies, and digital prototypes used in robot design and manufacturing.",
          type: "mandatory",
        },
        {
          code: "RE105",
          name: "Machine Tools Lab",
          credits: 3,
          description:
            "Hands-on laboratory course introducing machining tools such as lathes, milling machines, and drilling equipment. Students practice basic fabrication techniques essential for building mechanical components of robots.",
          type: "mandatory",
        },
        {
          code: "RE106",
          name: "Applied Calculus",
          credits: 3,
          description:
            "A comprehensive introduction to differential and integral calculus. Topics include limits, continuity, derivatives, applications of derivatives, definite and indefinite integrals, and fundamental theorem of calculus. Students will develop problem-solving skills essential for engineering applications and learn to apply calculus concepts to real-world robotics problems.",
          type: "mandatory",
        },
        {
          code: "RE107",
          name: "Work Health and Safety",
          credits: 2,
          description:
            "Study of workplace safety regulations, risk assessment, personal protective equipment, and emergency procedures. Emphasizes safe practices in laboratories and industrial environments involving robotics and machinery.",
          type: "mandatory",
        },
        {
          code: "RE108",
          name: "Physics and Chemistry",
          credits: 3,
          description:
            "Foundation course covering classical mechanics including kinematics, Newton's laws of motion, work and energy, momentum, rotational motion, and gravitation. Laboratory sessions provide hands-on experience with physical principles that are fundamental to robotics systems. Students will understand how physical laws govern robot motion and interaction with the environment.",
          type: "mandatory",
        },
      ],
    },

    {
      semester: 2,
      courses: [
        {
          code: "RE201",
          name: "Rapid Prototyping Project",
          credits: 3,
          description:
            "Project-based course focusing on rapid fabrication techniques including 3D printing, laser cutting, and CNC prototyping. Students collaborate to design, build, and iterate functional prototypes for robotic applications.",
          type: "mandatory",
        },
        {
          code: "RE202",
          name: "Object Oriented Programming",
          credits: 3,
          description:
            "Introduction to programming using Python and C++. Topics include variables, data types, control structures, functions, arrays, and basic object-oriented programming. Students will learn algorithm design, debugging techniques, and best coding practices. The course emphasizes programming skills necessary for robot control and automation systems.",
          type: "mandatory",
        },
        {
          code: "RE203",
          name: "Actuators and Drive Sytems",
          credits: 3,
          description:
            "Introduction to the mechanisms that generate robot motion, including DC motors, servo motors, stepper motors, pneumatic systems, and mechanical drive trains. Students learn selection criteria and control strategies for various actuators.",
          type: "mandatory",
        },
        {
          code: "RE204",
          name: "Statics and Dynamics",
          credits: 3,
          description:
            "Covers forces, equilibrium, motion, and energy in mechanical systems. Students develop analytical skills to understand the behavior of robotic components under different mechanical loads.",
          type: "mandatory",
        },
        {
          code: "RE205",
          name: "Engineering Math",
          credits: 3,
          description:
            "Study of vectors, matrices, linear transformations, eigenvalues, and eigenvectors. Applications to robotics include transformation matrices for robot kinematics, computer graphics, and machine learning algorithms. Students will develop mathematical foundation essential for advanced robotics concepts.",
          type: "mandatory",
        },
        {
          code: "RE206",
          name: "Electronics Systems",
          credits: 3,
          description:
            "Comprehensive study of electronic components, circuit analysis, and design. Topics include diodes, transistors, operational amplifiers, digital logic gates, and integrated circuits. Laboratory work involves building and testing electronic circuits used in robotic systems. Students will gain practical skills in circuit design and troubleshooting.",
          type: "mandatory",
        },
        {
          code: "RE207",
          name: "Design Thinking",
          credits: 2,
          description:
            "Explores user-centered design frameworks including empathy, ideation, prototyping, and testing. Students learn creative problem-solving strategies commonly used in robotics product development.",
          type: "mandatory",
        },
      ],
    },

    {
      semester: 3,
      courses: [
        {
          code: "RE301",
          name: "Robotics Design and Fabrication",
          credits: 3,
          description:
            "Study of mechanical design principles for robotic systems, including materials selection, structural analysis, and fabrication techniques. Students design mechanical assemblies and build functional robot components.",
          type: "mandatory",
        },
        {
          code: "RE302",
          name: "Introduction to Robotics",
          credits: 3,
          description:
            "This course introduces students to the fundamental concepts of robotics, including robot anatomy, kinematics, and basic programming. Students will learn about different types of robots, their applications in various industries, and the historical development of robotics technology. The course also covers ethical considerations in robotics and future trends in the field.",
          type: "mandatory",
        },
        {
          code: "RE303",
          name: "Design and Simulation",
          credits: 3,
          description:
            "Introduction to engineering simulation tools for analyzing mechanical and robotic systems. Students use CAD/CAE software to simulate movement, stress, and performance before physical fabrication.",
          type: "mandatory",
        },
        {
          code: "RE304",
          name: "Computer Aided Manufacturing",
          credits: 3,
          description:
            "Covers CNC machining concepts, toolpath generation, and CAM workflows. Students learn how digital designs are translated into automated manufacturing processes.",
          type: "mandatory",
        },
        {
          code: "RE305",
          name: "Control System",
          credits: 3,
          description:
            "Introduction to feedback control theory including PID control, transfer functions, system stability, and frequency response. Applications to robot motion control, trajectory planning, and system optimization. Students will design and implement control systems for various robotic mechanisms.",
          type: "mandatory",
        },
        {
          code: "RE306",
          name: "Engineering Project Management",
          credits: 2,
          description:
            "Introduction to project management methodologies, planning, scheduling, budgeting, and team coordination. Students will learn Agile and Waterfall methodologies, risk management, and documentation practices essential for managing robotics development projects.",
          type: "mandatory",
        },
        {
          code: "PK4RE",
          name: "Indonesian",
          credits: 2,
          description:
            "Course focusing on Indonesian language skills for academic and professional communication, emphasizing clarity, structure, and technical writing fundamentals.",
          type: "mandatory",
        },
      ],
    },

    {
      semester: 4,
      courses: [
        {
          code: "RE401",
          name: "Agile Innovation Project",
          credits: 3,
          description:
            "Team-based project using Agile methodologies to design and implement innovative robotics solutions. Students practice sprints, backlog planning, and iterative development.",
          type: "mandatory",
        },
        {
          code: "RE402",
          name: "Robot Operating System (ROS)",
          credits: 3,
          description:
            "Design and development of autonomous mobile robots. Topics include path planning, obstacle avoidance, localization, SLAM, and navigation algorithms. Students will implement autonomous behaviors using ROS and work with real mobile robot platforms.",
          type: "mandatory",
        },
        {
          code: "RE403",
          name: "Programmable Logic Controllers",
          credits: 3,
          description:
            "Study of PLC architecture, ladder logic programming, and industrial automation systems. Students design control logic to operate robotic and manufacturing processes.",
          type: "mandatory",
        },
        {
          code: "RE404",
          name: "Sensor and Data Acquisition",
          credits: 3,
          description:
            "Comprehensive coverage of sensors and actuators used in robotics. Students learn sensor calibration, signal conditioning, motor control techniques, and selection of appropriate components for specific applications.",
          type: "mandatory",
        },
        {
          code: "RE405",
          name: "Cloud Robotics",
          credits: 3,
          description:
            "Explores cloud-based robotic systems, remote computation, data streaming, and distributed control. Students learn how robotics can leverage cloud infrastructure for scalability and real-time processing.",
          type: "mandatory",
        },
        {
          code: "RE406",
          name: "English for Written Communication",
          credits: 2,
          description:
            "Development of professional technical writing skills in English, including reports, documentation, and academic communication tailored to engineering contexts.",
          type: "mandatory",
        },
        {
          code: "RE407",
          name: "Technical Writing",
          credits: 2,
          description:
            "Focuses on clear, structured, and precise writing for engineering purposes, such as manuals, specifications, proposals, and research papers.",
          type: "mandatory",
        },
      ],
    },

    {
      semester: 5,
      courses: [
        {
          code: "RE501",
          name: "Application of Robotics",
          credits: 3,
          description:
            "Overview of real-world robotic applications across industries including manufacturing, healthcare, logistics, and service robotics. Students analyze case studies and system integration concepts.",
          type: "mandatory",
        },
        {
          code: "RE502",
          name: "Data Flow Programming",
          credits: 3,
          description:
            "Study of visual and node-based programming systems used in robotics, enabling students to design workflows, control pipelines, and develop modular automation logic.",
          type: "mandatory",
        },
        {
          code: "RE503",
          name: "Manipulator Robots",
          credits: 3,
          description:
            "Introduction to robotic arms, kinematics, workspace analysis, trajectory planning, and end-effector design. Students learn principles behind industrial manipulators and collaborative robots.",
          type: "mandatory",
        },
        {
          code: "RE504",
          name: "English for Presentation",
          credits: 2,
          description:
            "Training in delivering technical presentations, pitching engineering ideas, and communicating robotics concepts effectively to diverse audiences.",
          type: "mandatory",
        },
        {
          code: "RE505",
          name: "Quality Engineering Principles",
          credits: 2,
          description:
            "Covers quality control, process optimization, statistical analysis, and industry standards used in robotics manufacturing and system integration.",
          type: "mandatory",
        },
        {
          code: "RE506",
          name: "Elective Course 1",
          credits: 3,
          description:
            "Elective course allowing students to explore specialized robotics topics such as AI, embedded systems, or advanced fabrication based on interest and career goals.",
          type: "mandatory",
        },
        {
          code: "PK2RE",
          name: "Character Building: Pancasila",
          credits: 2,
          description:
            "Course discussing national values, ethics, and character development based on Pancasila principles.",
          type: "mandatory",
        },
      ],
    },

    {
      semester: 6,
      courses: [
        {
          code: "RE601",
          name: "Industrial Robotics Project",
          credits: 3,
          description:
            "Capstone project focused on designing and integrating industrial robotic systems. Students work on real-world problems involving automation cells and production workflows.",
          type: "mandatory",
        },
        {
          code: "RE602",
          name: "Industrial Data Communication",
          credits: 3,
          description:
            "Focuses on communication protocols used in industrial automation, such as Modbus, Profinet, CAN bus, and Ethernet/IP. Students learn how robots communicate within factory networks.",
          type: "mandatory",
        },
        {
          code: "RE603",
          name: "Machine Learning",
          credits: 3,
          description:
            "Application of AI techniques to robotics problems. Topics include machine learning, neural networks, reinforcement learning, decision trees, and genetic algorithms.",
          type: "mandatory",
        },
        {
          code: "RE604",
          name: "Computer Vision",
          credits: 3,
          description:
            "Introduction to image processing and computer vision for robotics. Topics include image filtering, edge detection, object recognition, feature extraction, and camera calibration.",
          type: "mandatory",
        },
        {
          code: "RE605",
          name: "Motion Planning",
          credits: 3,
          description:
            "Study of algorithms for robotic movement, including configuration spaces, graph-based planning, sampling techniques, and optimization-based planning.",
          type: "mandatory",
        },
        {
          code: "RE606",
          name: "Professional Skills and Attitudes",
          credits: 2,
          description:
            "Develops workplace professionalism, ethics, communication, and collaboration skills essential for engineering roles.",
          type: "mandatory",
        },
        {
          code: "RE607",
          name: "Elective Course 2",
          credits: 3,
          description:
            "Second elective slot enabling exploration of advanced robotics subfields aligned with student interests.",
          type: "mandatory",
        },
      ],
    },

    {
      semester: 7,
      courses: [
        {
          code: "RE701",
          name: "Final Project: Advanced Robotics",
          credits: 3,
          description:
            "Advanced capstone project focused on designing, building, and evaluating a complex robotics system. Students demonstrate technical mastery, innovation, and problem-solving.",
          type: "mandatory",
        },
        {
          code: "RE702",
          name: "Localization and Mapping",
          credits: 3,
          description:
            "Study of algorithms that enable robots to understand their environment, including SLAM, probabilistic mapping, and sensor fusion techniques.",
          type: "mandatory",
        },
        {
          code: "RE703",
          name: "Robotics Control",
          credits: 3,
          description:
            "Advanced control techniques for robotic systems, including nonlinear control, adaptive control, and real-time system optimization.",
          type: "mandatory",
        },
        {
          code: "RE704",
          name: "Entrepreneurship",
          credits: 2,
          description:
            "Introduction to technology entrepreneurship and startup development. Topics include business model canvas, market analysis, funding strategies, intellectual property, and pitching.",
          type: "mandatory",
        },
        {
          code: "PK1RE",
          name: "Character Building: Religion",
          credits: 2,
          description:
            "Study of religious values, ethics, and character development to support responsible professional behavior.",
          type: "mandatory",
        },
        {
          code: "PK3RE",
          name: "Character Building: Citizenship",
          credits: 2,
          description:
            "Course focusing on civic responsibility, national identity, and ethical participation in society.",
          type: "mandatory",
        },
      ],
    },

    {
      semester: 8,
      courses: [
        {
          code: "RE801",
          name: "Industrial Attachment",
          credits: 20,
          description:
            "Full-semester internship placing students in robotics-related industries. Students gain hands-on experience with real engineering processes, teamwork, and industrial practices.",
          type: "mandatory",
        },
      ],
    },
  ],
};
