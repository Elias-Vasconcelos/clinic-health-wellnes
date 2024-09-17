export interface Card {
  id: Number;
  title: string;
  description: string;
  image: string;
}

export interface Plan extends Card {
  Price: string;
  Benefits: string[];
}
