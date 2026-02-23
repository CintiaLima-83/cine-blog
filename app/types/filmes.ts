export interface Filme {
  slug: string;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  rating: number;
  genres?: string[];
  trailerUrl?: string;
  content: string;
}
