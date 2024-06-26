import { User } from '../entities/user.entity';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  cpf: string;

  @IsString()
  phone: string;
}
