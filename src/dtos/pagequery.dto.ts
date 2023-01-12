import { IsNumber, IsPositive } from "class-validator";

export class PageQuery {
  @IsNumber()
  page: number;

  @IsPositive()
  size: number;
}
