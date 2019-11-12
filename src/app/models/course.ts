export interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export class Course implements ICourse {
  constructor(
    public creationDate: Date,
    public description: string,
    public duration: number,
    public id: string,
    public title: string,
    public topRated: boolean
  ) {}
}
