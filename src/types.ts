export type URL = {
  regular: string;
  small: string;
};

export interface Image {
  id: string;
  user: {
    name: string;
  };
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}
