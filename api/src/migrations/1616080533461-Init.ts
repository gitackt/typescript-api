import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1616080533461 implements MigrationInterface {
    name = 'Init1616080533461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `category` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `topic` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `content` longtext NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `topic_categories_category` (`topicId` int NOT NULL, `categoryId` int NOT NULL, INDEX `IDX_39eb83aae217809d75fefcab8d` (`topicId`), INDEX `IDX_494f8755978aef52c77411e365` (`categoryId`), PRIMARY KEY (`topicId`, `categoryId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `topic` ADD CONSTRAINT `FK_106101142fbf646320c4d7ae231` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `topic_categories_category` ADD CONSTRAINT `FK_39eb83aae217809d75fefcab8de` FOREIGN KEY (`topicId`) REFERENCES `topic`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `topic_categories_category` ADD CONSTRAINT `FK_494f8755978aef52c77411e3650` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `topic_categories_category` DROP FOREIGN KEY `FK_494f8755978aef52c77411e3650`");
        await queryRunner.query("ALTER TABLE `topic_categories_category` DROP FOREIGN KEY `FK_39eb83aae217809d75fefcab8de`");
        await queryRunner.query("ALTER TABLE `topic` DROP FOREIGN KEY `FK_106101142fbf646320c4d7ae231`");
        await queryRunner.query("DROP INDEX `IDX_494f8755978aef52c77411e365` ON `topic_categories_category`");
        await queryRunner.query("DROP INDEX `IDX_39eb83aae217809d75fefcab8d` ON `topic_categories_category`");
        await queryRunner.query("DROP TABLE `topic_categories_category`");
        await queryRunner.query("DROP TABLE `topic`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `category`");
    }

}
