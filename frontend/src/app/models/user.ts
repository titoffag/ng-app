interface IUserName {
  firstName: string;
  lastName: string;
}

export interface IUser {
  id: number;
  token: string,
  name: IUserName;
  login: string;
  password: string;
}

export class User implements IUser {
  constructor(
    public id: number,
    public token: string,
    public name: IUserName,
    public login: string,
    public password: string,
  ) {}
}
