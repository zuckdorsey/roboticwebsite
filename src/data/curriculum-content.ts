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

export const curriculumContent = {
  title: "Curriculum Structure",
  subtitle: "Comprehensive 8-Semester Program",
  description: "Our curriculum is designed to provide a solid foundation in robotics engineering technology, combining theoretical knowledge with practical skills.",
  
  semesters: [
    {
      semester: 1,
      courses: [
        {
          code: "RTI101",
          name: "Introduction to Robotics",
          credits: 3,
          description: "This course introduces students to the fundamental concepts of robotics, including robot anatomy, kinematics, and basic programming. Students will learn about different types of robots, their applications in various industries, and the historical development of robotics technology. The course also covers ethical considerations in robotics and future trends in the field.",
          type: "mandatory" as const
        },
        {
          code: "MTH101",
          name: "Calculus I",
          credits: 4,
          description: "A comprehensive introduction to differential and integral calculus. Topics include limits, continuity, derivatives, applications of derivatives, definite and indefinite integrals, and fundamental theorem of calculus. Students will develop problem-solving skills essential for engineering applications and learn to apply calculus concepts to real-world robotics problems.",
          type: "mandatory" as const
        },
        {
          code: "PHY101",
          name: "Physics for Engineers I",
          credits: 3,
          description: "Foundation course covering classical mechanics including kinematics, Newton's laws of motion, work and energy, momentum, rotational motion, and gravitation. Laboratory sessions provide hands-on experience with physical principles that are fundamental to robotics systems. Students will understand how physical laws govern robot motion and interaction with the environment.",
          type: "mandatory" as const
        },
        {
          code: "PRG101",
          name: "Programming Fundamentals",
          credits: 3,
          description: "Introduction to programming using Python and C++. Topics include variables, data types, control structures, functions, arrays, and basic object-oriented programming. Students will learn algorithm design, debugging techniques, and best coding practices. The course emphasizes programming skills necessary for robot control and automation systems.",
          type: "mandatory" as const
        },
        {
          code: "ENG101",
          name: "English for Academic Purposes",
          credits: 2,
          description: "Development of English language skills for academic and professional contexts. Focus on technical writing, presentation skills, reading comprehension of technical documents, and effective communication in engineering settings. Students will learn to write technical reports and deliver professional presentations.",
          type: "mandatory" as const
        }
      ]
    },
    {
      semester: 2,
      courses: [
        {
          code: "ELC201",
          name: "Electronics Engineering",
          credits: 4,
          description: "Comprehensive study of electronic components, circuit analysis, and design. Topics include diodes, transistors, operational amplifiers, digital logic gates, and integrated circuits. Laboratory work involves building and testing electronic circuits used in robotic systems. Students will gain practical skills in circuit design and troubleshooting.",
          type: "mandatory" as const
        },
        {
          code: "MTH201",
          name: "Linear Algebra",
          credits: 3,
          description: "Study of vectors, matrices, linear transformations, eigenvalues, and eigenvectors. Applications to robotics include transformation matrices for robot kinematics, computer graphics, and machine learning algorithms. Students will develop mathematical foundation essential for advanced robotics concepts.",
          type: "mandatory" as const
        },
        {
          code: "MCH201",
          name: "Mechanics and Materials",
          credits: 3,
          description: "Introduction to strength of materials, stress-strain relationships, mechanical properties of engineering materials, and structural analysis. Topics relevant to robot design include material selection, load analysis, and mechanical component design. Students will learn to design robust mechanical structures for robotic applications.",
          type: "mandatory" as const
        },
        {
          code: "CAD201",
          name: "Computer-Aided Design",
          credits: 3,
          description: "Practical training in 3D modeling and CAD software for engineering design. Students will learn to create detailed robot component designs, assemblies, and technical drawings. The course covers parametric modeling, simulation, and design optimization using industry-standard CAD tools like SolidWorks or Fusion 360.",
          type: "mandatory" as const
        },
        {
          code: "COM201",
          name: "Digital Communication",
          credits: 2,
          description: "Study of digital communication systems, protocols, and networking fundamentals. Topics include serial communication, wireless protocols, network topologies, and data transmission in robotics systems. Students will learn to implement communication between robot components and external systems.",
          type: "mandatory" as const
        }
      ]
    },
    {
      semester: 3,
      courses: [
        {
          code: "MCT301",
          name: "Microcontroller Systems",
          credits: 4,
          description: "In-depth study of microcontroller architecture, programming, and interfacing. Focus on ARM Cortex and AVR microcontrollers commonly used in robotics. Topics include I/O programming, interrupts, timers, ADC/DAC, and peripheral interfacing. Extensive laboratory work with real-world robotic applications and sensor integration.",
          type: "mandatory" as const
        },
        {
          code: "SNS301",
          name: "Sensors and Actuators",
          credits: 4,
          description: "Comprehensive coverage of sensors (ultrasonic, infrared, encoders, IMU, vision) and actuators (DC motors, servo motors, stepper motors, pneumatics) used in robotics. Students will learn sensor calibration, signal conditioning, motor control techniques, and how to select appropriate sensors and actuators for specific applications.",
          type: "mandatory" as const
        },
        {
          code: "CTR301",
          name: "Control Systems",
          credits: 3,
          description: "Introduction to feedback control theory including PID control, transfer functions, system stability, and frequency response. Applications to robot motion control, trajectory planning, and system optimization. Students will design and implement control systems for various robotic mechanisms.",
          type: "mandatory" as const
        },
        {
          code: "SIG301",
          name: "Signal Processing",
          credits: 3,
          description: "Fundamentals of analog and digital signal processing. Topics include sampling, filtering, Fourier transforms, and signal analysis techniques. Applications in robotics include sensor signal processing, noise reduction, and feature extraction for robot perception systems.",
          type: "mandatory" as const
        },
        {
          code: "PRO301",
          name: "Project Management",
          credits: 2,
          description: "Introduction to project management methodologies, planning, scheduling, budgeting, and team coordination. Students will learn Agile and Waterfall methodologies, risk management, and documentation practices essential for managing robotics development projects.",
          type: "mandatory" as const
        }
      ]
    },
    {
      semester: 4,
      courses: [
        {
          code: "KIN401",
          name: "Robot Kinematics",
          credits: 4,
          description: "Advanced study of robot kinematics including forward kinematics, inverse kinematics, Denavit-Hartenberg notation, and Jacobian matrices. Students will analyze and simulate various robot configurations including articulated arms, SCARA robots, and parallel manipulators. Extensive use of mathematical tools and simulation software.",
          type: "mandatory" as const
        },
        {
          code: "EMB401",
          name: "Embedded Systems",
          credits: 4,
          description: "Design and development of embedded systems for robotics applications. Topics include real-time operating systems (RTOS), embedded Linux, device drivers, and system integration. Students will develop complete embedded solutions for autonomous robots with multiple sensors and actuators.",
          type: "mandatory" as const
        },
        {
          code: "PWR401",
          name: "Power Electronics",
          credits: 3,
          description: "Study of power conversion, motor drives, and power management for robotic systems. Topics include DC-DC converters, inverters, motor control circuits, and battery management systems. Laboratory work involves designing and testing power electronics circuits for various robot applications.",
          type: "mandatory" as const
        },
        {
          code: "VIS401",
          name: "Computer Vision",
          credits: 3,
          description: "Introduction to image processing and computer vision for robotics. Topics include image filtering, edge detection, object recognition, feature extraction, and camera calibration. Students will implement vision systems using OpenCV and apply them to robot navigation and object manipulation tasks.",
          type: "mandatory" as const
        },
        {
          code: "ETH401",
          name: "Engineering Ethics",
          credits: 2,
          description: "Study of ethical issues in engineering practice, professional responsibility, and societal impact of technology. Focus on ethical considerations in robotics development including safety, privacy, autonomous systems, and AI ethics.",
          type: "mandatory" as const
        }
      ]
    },
    {
      semester: 5,
      courses: [
        {
          code: "AUT501",
          name: "Autonomous Systems",
          credits: 4,
          description: "Design and development of autonomous mobile robots. Topics include path planning, obstacle avoidance, localization, SLAM (Simultaneous Localization and Mapping), and navigation algorithms. Students will implement autonomous behaviors using ROS (Robot Operating System) and work with real mobile robot platforms.",
          type: "mandatory" as const
        },
        {
          code: "AIR501",
          name: "Artificial Intelligence for Robotics",
          credits: 4,
          description: "Application of AI techniques to robotics problems. Topics include machine learning, neural networks, reinforcement learning, decision trees, and genetic algorithms. Students will implement intelligent behaviors for robots including learning from experience, pattern recognition, and adaptive control.",
          type: "mandatory" as const
        },
        {
          code: "MAN501",
          name: "Robot Manipulation",
          credits: 3,
          description: "Study of robotic manipulation including grasp planning, force control, compliance, and dexterous manipulation. Topics include end-effector design, trajectory generation, and object recognition for manipulation. Students will program industrial robots for pick-and-place and assembly tasks.",
          type: "mandatory" as const
        },
        {
          code: "IND501",
          name: "Industrial Automation",
          credits: 3,
          description: "Introduction to industrial automation systems including PLCs, SCADA, manufacturing execution systems, and Industry 4.0 concepts. Students will learn to program PLCs, design automated production lines, and integrate robots into manufacturing processes.",
          type: "mandatory" as const
        },
        {
          code: "RES501",
          name: "Research Methodology",
          credits: 2,
          description: "Introduction to research methods in engineering. Topics include literature review, research design, data collection and analysis, technical writing, and presentation of research findings. Preparation for final year project and academic research.",
          type: "mandatory" as const
        }
      ]
    },
    {
      semester: 6,
      courses: [
        {
          code: "DLN601",
          name: "Deep Learning",
          credits: 4,
          description: "Advanced study of deep neural networks and their applications in robotics. Topics include CNNs for vision, RNNs for sequence learning, GANs for data generation, and transfer learning. Students will implement deep learning models for robot perception, object detection, and autonomous decision-making using TensorFlow and PyTorch.",
          type: "mandatory" as const
        },
        {
          code: "HRI601",
          name: "Human-Robot Interaction",
          credits: 3,
          description: "Study of interaction between humans and robots including natural language processing, gesture recognition, social robotics, and collaborative robots (cobots). Topics include safety in HRI, user interface design, and emotion recognition. Students will develop interactive robot systems.",
          type: "mandatory" as const
        },
        {
          code: "SWM601",
          name: "Swarm Robotics",
          credits: 3,
          description: "Introduction to multi-robot systems and swarm intelligence. Topics include distributed control, collective behavior, coordination algorithms, and applications in search and rescue, surveillance, and environmental monitoring. Students will simulate and implement swarm robotics algorithms.",
          type: "elective" as const
        },
        {
          code: "MED601",
          name: "Medical Robotics",
          credits: 3,
          description: "Study of robotics applications in healthcare including surgical robots, rehabilitation robots, prosthetics, and assistive devices. Topics include safety standards, precision control, haptic feedback, and medical imaging integration. Overview of current medical robotics technologies and future trends.",
          type: "elective" as const
        },
        {
          code: "INT601",
          name: "Industrial Internship",
          credits: 4,
          description: "Practical work experience in industry or research institution. Students will apply their knowledge and skills in real-world robotics projects, gain professional experience, and develop industry connections. Internship report and presentation required.",
          type: "mandatory" as const
        }
      ]
    },
    {
      semester: 7,
      courses: [
        {
          code: "PRJ701",
          name: "Capstone Project I",
          credits: 4,
          description: "First part of the final year project. Students will identify a robotics problem, conduct literature review, design a solution, and develop a project proposal. Work includes problem definition, system design, component selection, and preliminary implementation. Regular progress presentations and documentation required.",
          type: "mandatory" as const
        },
        {
          code: "AER701",
          name: "Aerial Robotics",
          credits: 3,
          description: "Study of unmanned aerial vehicles (UAVs) and drone technology. Topics include flight dynamics, stabilization, autonomous navigation, computer vision for drones, and applications in mapping, inspection, and delivery. Students will program and fly quadcopters in simulation and real environments.",
          type: "elective" as const
        },
        {
          code: "BIO701",
          name: "Bioinspired Robotics",
          credits: 3,
          description: "Exploration of robots inspired by biological systems. Topics include legged locomotion, soft robotics, artificial muscles, bio-inspired sensing, and evolutionary robotics. Students will study nature's solutions to engineering problems and apply biomimicry principles to robot design.",
          type: "elective" as const
        },
        {
          code: "IOT701",
          name: "IoT and Cloud Robotics",
          credits: 3,
          description: "Integration of robotics with Internet of Things and cloud computing. Topics include cloud-based robot services, distributed sensing and computing, fog robotics, and robot fleet management. Students will develop IoT-enabled robots with cloud connectivity for data processing and storage.",
          type: "elective" as const
        },
        {
          code: "ENT701",
          name: "Entrepreneurship in Tech",
          credits: 2,
          description: "Introduction to technology entrepreneurship and startup development. Topics include business model canvas, market analysis, funding strategies, intellectual property, and pitching. Students will develop business plans for robotics startups and learn to commercialize technology innovations.",
          type: "elective" as const
        }
      ]
    },
    {
      semester: 8,
      courses: [
        {
          code: "PRJ801",
          name: "Capstone Project II",
          credits: 6,
          description: "Continuation and completion of the final year project. Students will implement, test, and refine their robotics system. Work includes hardware/software integration, system testing, performance evaluation, and comprehensive documentation. Final presentation and demonstration to industry panel required.",
          type: "mandatory" as const
        },
        {
          code: "ADV801",
          name: "Advanced Topics in Robotics",
          credits: 3,
          description: "Study of cutting-edge topics in robotics research including quantum robotics, neuromorphic computing for robots, advanced AI techniques, and emerging applications. Seminar-style course with guest lectures from industry experts and researchers. Students will present on recent robotics innovations.",
          type: "elective" as const
        },
        {
          code: "SPC801",
          name: "Space Robotics",
          credits: 3,
          description: "Introduction to robotics for space exploration. Topics include space environment challenges, satellite robotics, planetary rovers, orbital manipulation, and future of space automation. Students will study case studies of successful space missions and design concepts for space robotics applications.",
          type: "elective" as const
        },
        {
          code: "SEC801",
          name: "Cybersecurity for Robotics",
          credits: 3,
          description: "Study of security threats and protection methods for robotic systems. Topics include secure communication, authentication, encryption, vulnerability assessment, and safety-critical systems. Students will learn to identify and mitigate security risks in connected and autonomous robots.",
          type: "elective" as const
        }
      ]
    }
  ]
};
