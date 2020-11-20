import {MigrationInterface, QueryRunner} from "typeorm";

export class AddIsAdmin1602431922292 implements MigrationInterface {
    name = 'AddIsAdmin1602431922292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `isAdmin` tinyint NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `topic` CHANGE `tumbnailUrl` `tumbnailUrl` varchar(255) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `topic` CHANGE `tumbnailUrl` `tumbnailUrl` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `isAdmin`");
    }

}
