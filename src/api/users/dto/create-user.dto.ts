import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;
}
