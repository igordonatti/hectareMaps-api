import { Role } from 'src/models/auth/enums/role.enum';

export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  role: Role[];
  status: string;
}
