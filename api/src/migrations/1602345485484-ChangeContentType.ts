import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeContentType1602345485484 implements MigrationInterface {
    name = 'ChangeContentType1602345485484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `topic` DROP COLUMN `content`");
        await queryRunner.query("ALTER TABLE `topic` ADD `content` longtext NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `topic` DROP COLUMN `content`");
        await queryRunner.query("ALTER TABLE `topic` ADD `content` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL");
    }

}
