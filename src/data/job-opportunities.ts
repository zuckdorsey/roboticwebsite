import { IconType } from 'react-icons';
import { HiGlobeAlt, HiDocumentText, HiChip, HiCog } from 'react-icons/hi';

export interface JobOpportunity {
    title: string;
    icon: IconType;
    duties: string[];
}

export const jobOpportunities: JobOpportunity[] = [
    {
        title: "Robotics Engineer",
        icon: HiGlobeAlt,
        duties: [
            "Design and develop robot prototypes.",
            "Build, configure, test, and debug robots and robotic system.",
            "Install, operate, calibrate and maintain the robot.",
            "Ensure robotic machines operate safely, reliably and precisely, identify and implement modifications.",
            "Process or interpret signals or sensor data.",
            "Integrating robots with devices such as welders, controllers or other equipment.",
            "Document robot creation, maintenance or changes.",
            "Providing technical support for robot systems that have been created.",
            "Supervise other technicians or engineers."
        ]
    },
    {
        title: "Robotics Designer",
        icon: HiDocumentText,
        duties: [
            "Designing an automated robotic system used to upgrade production and precision levels in specific industries.",
            "Select the technology and components to be used accordingly system design.",
            "Design software to control robotic systems.",
            "Conduct design reviews and approve cost estimates.",
            "Analyze and evaluate prototypes and robotic systems made."
        ]
    },
    
    //     title: "Robotics Automation Software Engineer",
    //     icon: HiChip,
    //     duties: [
    //         "Designing robot movements and kinematics.",
    //         "Developing algorithms for robot path planning and navigation.",
    //         "Implementing control systems for robotic manipulators.",
    //         "Integrating vision systems for object recognition and tracking.",
    //         "Optimizing code for real-time performance and reliability."
    //     ]
    // },
    // {
    //     title: "Product Development Engineer",
    //     icon: HiCog,
    //     duties: [
    //         "Manage design, prototype and test development product.",
    //         "Conduct market research to identify customer needs and trends.",
    //         "Develop product concepts and detailed design specifications.",
    //         "Collaborate with cross-functional teams to bring products to market.",
    //         "Ensure products meet quality, safety, and regulatory standards."
    //     ]
    // }
];
