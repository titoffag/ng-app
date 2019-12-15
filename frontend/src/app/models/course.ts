export interface ICourse {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
}

export class Course implements ICourse {
  constructor(
    public date: Date,
    public description: string,
    public length: number,
    public id: number,
    public name: string,
    public isTopRated: boolean
  ) {}
}
