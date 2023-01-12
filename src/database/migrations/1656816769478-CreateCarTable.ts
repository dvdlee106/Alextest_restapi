import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCarTable1656816769478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS cars (
      id varchar(36) NOT NULL,
      vin varchar(17) NOT NULL,
      license_plate varchar(15) NOT NULL,
      regi_state varchar(5) NOT NULL,
      regi_expiration timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
      regi_name varchar(30) NOT NULL,
      car_value int(11) NOT NULL COMMENT 'unit: cent',
      current_mileage int(11) NOT NULL DEFAULT 0 COMMENT 'unit: meter',
      description text NOT NULL DEFAULT '',
      color varchar(7) NOT NULL DEFAULT '#000000',
      regi varchar(30) NOT NULL,
      year int(4) NOT NULL,
      make varchar(20) NOT NULL,
      model varchar(20) NOT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY IDX_1a56deecb54b4ed4917445f49e (vin),
      UNIQUE KEY IDX_97deb66a03be534e7c02d9add0 (license_plate)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS cars`);
  }
}
