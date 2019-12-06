export interface ILogin {
  login: string;
  password: string;
}

export class Login implements ILogin {
  constructor(
    public login: string,
    public password: string,
  ) {}
}

export interface IToken {
  token: string;
}

export class Token implements IToken {
  constructor(
    public token: string,
  ) {}
}
