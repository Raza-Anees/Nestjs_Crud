import { IsInt, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;
  @IsString()
  // @Length(2, 10, { groups: ['create'] })
  description: string;
  @IsInt()
  price: number;
}
