import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTumbnailUrlToNullable1602345660149 implements MigrationInterface {
    name = 'ChangeTumbnailUrlToNullable1602345660149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `topic` CHANGE `tumbnailUrl` `tumbnailUrl` varchar(255) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `topic` CHANGE `tumbnailUrl` `tumbnailUrl` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL");
    }

}
