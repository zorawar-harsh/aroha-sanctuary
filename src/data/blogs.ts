import blog1Img from "../assets/blog.jpeg";
import blog2Img from "../assets/blog-anger.png";

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  quote?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
}

export const blogs: BlogItem[] = [
  {
    id: "1",
    slug: "feeling-stuck-in-life",
    title: "Feeling Stuck in Life? Here's Where to Begin",
    excerpt: "There are phases in life when, even though you're trying your best, nothing seems to move. Learn how to navigate the space between 'now' and 'next' with intention.",
    quote: "There are phases in life when, even though you're trying your best, nothing seems to move.",
    author: "POONAM DIWAN",
    date: "August 2024",
    readTime: "5 min read",
    category: "Life Transitions",
    coverImage: blog1Img,
  },
  {
    id: "2",
    slug: "when-someone-elses-anger-becomes-your-emotional-environment",
    title: "When Someone Else's Anger Becomes Your Emotional Environment",
    excerpt: "Have you ever noticed how one person's anger can change the entire atmosphere around them? Learn how to distinguish what is yours to handle, set boundaries, and protect your peace.",
    quote: "Someone else's emotional storm doesn't have to become your weather.",
    author: "POONAM DIWAN",
    date: "September 2024",
    readTime: "6 min read",
    category: "Emotional Boundaries",
    coverImage: blog2Img,
  },
];
