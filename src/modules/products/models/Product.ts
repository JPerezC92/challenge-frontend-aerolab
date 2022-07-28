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

  public aditionalPointsNeeded(userPoints: number): number {
    const aditionalPointsNeeded = this.cost - userPoints;
    return aditionalPointsNeeded > 0 ? aditionalPointsNeeded : 0;
  }

  public static formatPoints(cost: number): string {
    return cost.toLocaleString().replace(',', '.');
  }
}
