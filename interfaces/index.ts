export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
  reviews: any[];
}

export interface PillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}
