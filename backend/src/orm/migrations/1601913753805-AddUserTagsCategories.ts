import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserTagsCategories1601913753805 implements MigrationInterface {
    name = 'AddUserTagsCategories1601913753805'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user_categories_category` (`userId` int NOT NULL, `userUuid` varchar(36) NOT NULL, `categoryId` int NOT NULL, INDEX `IDX_ed54d92d0c851ef71878e8229b` (`userId`, `userUuid`), INDEX `IDX_936afd72159ca6d1143ab3d66a` (`categoryId`), PRIMARY KEY (`userId`, `userUuid`, `categoryId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_tags_tag` (`userId` int NOT NULL, `userUuid` varchar(36) NOT NULL, `tagId` int NOT NULL, INDEX `IDX_8d78557b514c163db99b5d062a` (`userId`, `userUuid`), INDEX `IDX_ff76db199db490dda3ed74231e` (`tagId`), PRIMARY KEY (`userId`, `userUuid`, `tagId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user_categories_category` ADD CONSTRAINT `FK_ed54d92d0c851ef71878e8229b2` FOREIGN KEY (`userId`, `userUuid`) REFERENCES `user`(`id`,`uuid`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_categories_category` ADD CONSTRAINT `FK_936afd72159ca6d1143ab3d66af` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_tags_tag` ADD CONSTRAINT `FK_8d78557b514c163db99b5d062a6` FOREIGN KEY (`userId`, `userUuid`) REFERENCES `user`(`id`,`uuid`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_tags_tag` ADD CONSTRAINT `FK_ff76db199db490dda3ed74231e8` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_tags_tag` DROP FOREIGN KEY `FK_ff76db199db490dda3ed74231e8`");
        await queryRunner.query("ALTER TABLE `user_tags_tag` DROP FOREIGN KEY `FK_8d78557b514c163db99b5d062a6`");
        await queryRunner.query("ALTER TABLE `user_categories_category` DROP FOREIGN KEY `FK_936afd72159ca6d1143ab3d66af`");
        await queryRunner.query("ALTER TABLE `user_categories_category` DROP FOREIGN KEY `FK_ed54d92d0c851ef71878e8229b2`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL");
        await queryRunner.query("DROP INDEX `IDX_ff76db199db490dda3ed74231e` ON `user_tags_tag`");
        await queryRunner.query("DROP INDEX `IDX_8d78557b514c163db99b5d062a` ON `user_tags_tag`");
        await queryRunner.query("DROP TABLE `user_tags_tag`");
        await queryRunner.query("DROP INDEX `IDX_936afd72159ca6d1143ab3d66a` ON `user_categories_category`");
        await queryRunner.query("DROP INDEX `IDX_ed54d92d0c851ef71878e8229b` ON `user_categories_category`");
        await queryRunner.query("DROP TABLE `user_categories_category`");
    }

}
