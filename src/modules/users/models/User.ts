interface UserProps {
  id: string;
  name: string;
  points: number;
  createdAt: Date;
}

export class User {
  readonly id: string;
  readonly name: string;
  readonly points: number;
  readonly createdAt: Date;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.points = props.points;
    this.createdAt = props.createdAt;
  }

  public hasEnoughPoints(productCost: number) {
    return this.points >= productCost;
  }

  public formatCreatedAt() {
    const month = (this.createdAt.getUTCMonth() + 1).toString();
    const monthFormat = month.length > 1 ? month : '0' + month;

    const year = this.createdAt.getUTCFullYear().toString();
    const yearlastTwoDigits = year.slice(-2);

    return `${monthFormat}/${yearlastTwoDigits}`;
  }
}
