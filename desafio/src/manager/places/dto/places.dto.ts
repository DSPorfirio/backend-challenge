import { IsNotEmpty, IsOptional } from 'class-validator';

export class baseDto {
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  place: string;

  @IsNotEmpty()
  meta: string;

  @IsNotEmpty()
  urlFlag: string;
}

export class placesUpdateDto {
  @IsNotEmpty()
  id: number;

  @IsOptional()
  place: string;

  @IsOptional()
  meta: string;
}

export class placesInsertDto extends baseDto {}
