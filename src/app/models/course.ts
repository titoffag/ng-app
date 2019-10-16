export interface ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

export class Course implements ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;

  constructor(
    creationDate: string,
    description: string,
    duration: number,
    id: string,
    title: string,
  ) {}
}
