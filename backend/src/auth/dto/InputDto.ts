import { IsString } from 'class-validator';

export class InputDto {
  @IsString()
  password: string;

  @IsString()
  mode: string;
}
