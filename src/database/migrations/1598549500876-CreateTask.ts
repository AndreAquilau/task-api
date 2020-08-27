import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTask1598549500876 implements MigrationInterface {
  name = 'CreateTask1598549500876';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "descricao" character varying(255) NOT NULL, "estado" boolean NOT NULL DEFAULT false, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_e6163605a8426183431d88d6642" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "pkey_task" ON "public"."task" ("id") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."pkey_task"`);
    await queryRunner.query(`DROP TABLE "public"."task"`);
  }
}
