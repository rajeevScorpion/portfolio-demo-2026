
export interface CaseStudySection {
  title: string;
  content: string;
  image?: string;
}

export interface GalleryItem {
  url: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  caseStudy?: {
    overview: string;
    sections: CaseStudySection[];
    gallery: GalleryItem[];
  };
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
