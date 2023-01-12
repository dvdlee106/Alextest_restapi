import {
  IsAlpha,
  IsAlphanumeric,
  IsDateString,
  IsNumber,
  IsPositive,
  IsString,
} from "class-validator";

export class CarUpdateParam {
  @IsString()
  id: string;

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
  currentMileage: number;

  @IsString()
  description: string;

  @IsString()
  public color: string;
}
