export type URL = {
  regular: string;
  small: string;
};

export type Image = {
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
};
