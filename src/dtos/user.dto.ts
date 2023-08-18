export class UserDto {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  password_hash: string;
  cpf?: string;
  require_auth?: Date;
  phone: string;
  role?: string;
  password?: string;
  status?: string;
  access_At?: Date;
}
