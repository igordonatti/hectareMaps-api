import { Request } from 'express';
import { User } from 'src/models/user/entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
