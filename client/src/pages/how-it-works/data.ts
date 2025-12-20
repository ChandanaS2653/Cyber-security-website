/**
 * How It Works Data
 * Contains all the steps and process information displayed on the How It Works page
 */

import { User, Clock, Server, Lightbulb, Briefcase, LucideIcon } from "lucide-react";

export interface Step {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Commit to the Routine",
    icon: User,
    description: "Start your daily cybersecurity learning journey with structured routines and consistent practice.",
  },
  {
    id: 2,
    title: "Build Your Lab",
    icon: Clock,
    description: "Set up your hands-on practice environment to apply theoretical knowledge in real-world scenarios.",
  },
  {
    id: 3,
    title: "Practice Daily",
    icon: Server,
    description: "Engage with practical exercises, challenges, and real-world cybersecurity scenarios every day.",
  },
  {
    id: 4,
    title: "Learn from the Best",
    icon: Lightbulb,
    description: "Get expert mentorship, guidance, and insights from experienced cybersecurity professionals.",
  },
  {
    id: 5,
    title: "Get Hired",
    icon: Briefcase,
    description: "Land your first cybersecurity job with the skills, confidence, and portfolio you've built.",
  },
];

