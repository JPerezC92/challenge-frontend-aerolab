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
}
