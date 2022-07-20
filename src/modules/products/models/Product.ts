interface ProductProps {
  readonly id: string;
  readonly name: string;
  readonly cost: number;
  readonly category: string;
  readonly img: {
    url: string;
    hdUrl: string;
  };
}

export class Product {
  id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };

  constructor(props: ProductProps) {
    this.category = props.category;
    this.cost = props.cost;
    this.id = props.id;
    this.img = props.img;
    this.name = props.name;
  }
}
