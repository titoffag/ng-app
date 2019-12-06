// TODO: server return id as number

export interface ICourse {
  id: string;
  // TODO: rename title to name
  title: string;
  // TODO: rename creationDate to date
  creationDate: Date;
  // TODO: duration -> length
  duration: number;
  description: string;
  // TODO: topRated -> isTopRated
  topRated: boolean;
  // authors: IAuthor[],
}

export class Course implements ICourse {
  constructor(
    public creationDate: Date,
    public description: string,
    public duration: number,
    public id: string,
    public title: string,
    public topRated: boolean,
    // public authors: IAuthor[],
  ) {}
}
