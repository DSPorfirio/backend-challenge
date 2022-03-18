import {MigrationInterface, QueryRunner} from "typeorm";

export class places1647207102862 implements MigrationInterface {
    name = 'places1647207102862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "places" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "place" character varying NOT NULL, "meta" character varying NOT NULL, "urlFlag" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "places"`);
    }

}
