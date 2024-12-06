import { Activity, Clock, Lock, Rocket, Workflow, Zap } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    label: "Features",
    link: "/features",
  },

  {
    id: 2,
    label: "How it Works",
    link: "/working",
  },

  {
    id: 3,
    label: "Testimonial",
    link: "/testimonial",
  },

  {
    id: 4,
    label: "Pricing",
    link: "/pricing",
  },
];

export const featuresAvailable = [
  {
    title: "Custom Triggers",
    description:
      "Set up triggers from any supported app or service to start your automation workflow",
    icon: Zap,
  },
  {
    title: "Multiple Actions",
    description:
      "Chain multiple actions together to create complex automation workflows",
    icon: Workflow,
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Monitor your workflows in real-time and get instant notifications",
    icon: Activity,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
    icon: Lock,
  },
  {
    title: "Quick Setup",
    description:
      "Get started in minutes with our intuitive interface and templates",
    icon: Rocket,
  },
  {
    title: "24/7 Automation",
    description:
      "Your workflows run automatically, 24/7, without any manual intervention",
    icon: Clock,
  },
];
