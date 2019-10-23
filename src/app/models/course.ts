export interface ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

export class Course implements ICourse {
  constructor(
    public creationDate: string,
    public description: string,
    public duration: number,
    public id: string,
    public title: string,
  ) {}
}
