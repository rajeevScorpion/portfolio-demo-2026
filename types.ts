
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
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
