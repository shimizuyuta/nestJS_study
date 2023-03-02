import { IsString, MinLength, MaxLength, IsNumber } from 'class-validator';
export class createUserDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username!: string;

  @IsString()
  description: string;

  @IsString()
  price: string;
}
