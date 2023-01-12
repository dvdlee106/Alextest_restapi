import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "vin", unique: true, length: 17 })
  vin: string;

  @Column({ name: "license_plate", unique: true, length: 15 })
  licensePlate: string;

  @Column({ name: "regi", length: 30 })
  regi: string;

  @Column({ name: "regi_state", length: 5 })
  regiState: string;

  @Column("timestamp", { name: "regi_expiration" })
  regiExp: Date;

  @Column({ name: "regi_name", length: 30 })
  regiName: string;

  @Column({ name: "car_value", type: "integer", comment: "unit: cent" })
  carValue: number;

  @Column({ name: "current_mileage", type: "integer", default: 0, comment: "unit: meter" })
  currentMileage: number;

  @Column({ name: "description", type: "text", default: "" })
  description: string;

  @Column({ name: "color", length: 7, default: "#000000" })
  color: string;

  @Column({ name: "year", type: "int" })
  year: number;

  @Column({ name: "make", length: 20 })
  make: string;

  @Column({ name: "model", length: 20 })
  model: string;
}
