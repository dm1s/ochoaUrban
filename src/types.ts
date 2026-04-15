export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  authorTitle: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}
