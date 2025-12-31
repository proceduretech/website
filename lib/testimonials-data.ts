export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "What started with one engineer nearly three years ago has grown into a team of five, each fully owning their deliverables. They've taken on critical core roles across teams. We're extremely pleased with the commitment and engagement they bring.",
    author: "Shrivatsa Swadi",
    role: "Director of Engineering",
    company: "Setu",
    logo: "/logos/client/setu.svg",
    image: "/testimonials/shrivatsa.jpg",
  },
  {
    quote:
      "We've worked with Procedure across our portfolio, and the experience has been exceptional. They consistently deliver on every promise and adapt quickly to shifting project needs. We wholeheartedly recommend them for anyone seeking a reliable development partner.",
    author: "Chad Laurans",
    role: "Managing Partner",
    company: "Workshop Ventures",
    logo: "/logos/client/workshopventure.svg",
    image: "/testimonials/chad.jpg",
  },
  {
    quote:
      "Procedure has been our partner from inception through rapid growth. Their engineers are exceptionally talented and have proven essential to building out our engineering capacity. The leadership have been thought partners on key engineering decisions. Couldn't recommend them more highly!",
    author: "Faisal Anwar",
    role: "CTO",
    company: "Timely",
    logo: "/logos/client/timely.svg",
    image: "/testimonials/faisal.jpg",
  },
  {
    quote:
      "Their clear communication and expertise made them feel like part of our team. They built and launched our app in just 12 weeks, helping us reach 1000+ paying users in the first 6 months. We're excited to keep building with them!",
    author: "Eid AlMujaibel",
    role: "CEO",
    company: "Tenmeya",
    logo: "/logos/client/tenmeya.svg",
    image: "/testimonials/eid.jpg",
  },
];
