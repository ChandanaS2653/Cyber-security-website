/**
 * Core Values Data
 * Contains all the core values information displayed on the Core Values page
 */

export interface CoreValue {
  id: number;
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Honesty Over Hype",
    description:
      "We believe in transparent guidance. Cybersecurity is challenging, and we don't sell shortcuts or false promises. Every roadmap, routine, and recommendation reflects real industry expectations.",
  },
  {
    id: 2,
    title: "Discipline Builds Careers",
    description:
      "Consistency matters more than talent. Our daily routines and 6-month plans are built to develop focus, habits, and resilience—the traits cybersecurity professionals need to succeed.",
  },
  {
    id: 3,
    title: "Accessibility for All",
    description:
      "Quality cybersecurity guidance should not depend on money or connections. We are committed to providing free, high-value resources and expert insights to every motivated graduate.",
  },
  {
    id: 4,
    title: "Practical, Industry-Relevant Learning",
    description:
      "We prioritize hands-on skills over theory. Everything we teach is aligned with real-world cybersecurity roles, tools, and hiring requirements.",
  },
  {
    id: 5,
    title: "Guided, Not Overwhelming",
    description:
      "Cybersecurity is vast. We break it down into clear, achievable steps so learners can progress with confidence instead of confusion.",
  },
  {
    id: 6,
    title: "Community Over Competition",
    description:
      "We foster a supportive learning community where students grow together, share knowledge, and help each other succeed—because cybersecurity thrives on collaboration.",
  },
  {
    id: 7,
    title: "Ethics First",
    description:
      "We promote responsible, legal, and ethical cybersecurity practices. Skill without integrity has no place in our mission.",
  },
  {
    id: 8,
    title: "Continuous Improvement",
    description:
      "Cybersecurity evolves daily, and so do we. Our routines, content, and guidance are continuously refined to stay current with industry trends and threats.",
  },
];

