export interface IUser {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  domain: string;
  company: { name: string };
}

export interface IUsersGetTypes {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}
