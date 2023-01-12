import {
  IsAlpha,
  IsAlphanumeric,
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";

export class CarInsertParam {
  @IsAlphanumeric()
  vin: string;

  @IsAlphanumeric()
  licensePlate: string;

  @IsAlpha()
  regi: string;

  @IsAlpha()
  regiState: string;

  @IsDateString()
  regiExp: Date;

  @IsAlpha()
  regiName: string;

  @IsPositive()
  carValue: number;

  @IsNumber()
  @IsOptional()
  currentMileage: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  color: string;
}
