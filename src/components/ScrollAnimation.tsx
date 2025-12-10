"use client";

import { motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef } from "react";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "fade-in";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: AnimationType;
    duration?: number;
    delay?: number;
    viewport?: UseInViewOptions;
    once?: boolean;
}

const animations: Record<AnimationType, Variants> = {
    "fade-up": {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-left": {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

export default function ScrollAnimation({
    children,
    className = "",
    animation = "fade-up",
    duration = 0.5,
    delay = 0,
    viewport = { margin: "-100px" },
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, ...viewport });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animations[animation]}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
