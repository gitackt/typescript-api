import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddTopic1600785381843 implements MigrationInterface {
  name = 'AddTopic1600785381843'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `category` (`id` int NOT NULL AUTO_INCREMENT, `createUserId` int NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'CREATE TABLE `tag` (`id` int NOT NULL AUTO_INCREMENT, `createUserId` int NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'CREATE TABLE `topic` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NOT NULL, `title` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `tumbnailUrl` varchar(255) NOT NULL, `isDraft` tinyint NOT NULL, `isArchived` tinyint NOT NULL, `userUuid` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'CREATE TABLE `topic_categories_category` (`topicId` int NOT NULL, `categoryId` int NOT NULL, INDEX `IDX_39eb83aae217809d75fefcab8d` (`topicId`), INDEX `IDX_494f8755978aef52c77411e365` (`categoryId`), PRIMARY KEY (`topicId`, `categoryId`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'CREATE TABLE `topic_tags_tag` (`topicId` int NOT NULL, `tagId` int NOT NULL, INDEX `IDX_fc99a50df02ce10245930b49a7` (`topicId`), INDEX `IDX_145ef0e1181c6ce11b45a1f179` (`tagId`), PRIMARY KEY (`topicId`, `tagId`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'ALTER TABLE `topic` ADD CONSTRAINT `FK_31bba1305269decaa75a06dd058` FOREIGN KEY (`userId`, `userUuid`) REFERENCES `user`(`id`,`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    )
    await queryRunner.query(
      'ALTER TABLE `topic_categories_category` ADD CONSTRAINT `FK_39eb83aae217809d75fefcab8de` FOREIGN KEY (`topicId`) REFERENCES `topic`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    )
    await queryRunner.query(
      'ALTER TABLE `topic_categories_category` ADD CONSTRAINT `FK_494f8755978aef52c77411e3650` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    )
    await queryRunner.query(
      'ALTER TABLE `topic_tags_tag` ADD CONSTRAINT `FK_fc99a50df02ce10245930b49a7e` FOREIGN KEY (`topicId`) REFERENCES `topic`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    )
    await queryRunner.query(
      'ALTER TABLE `topic_tags_tag` ADD CONSTRAINT `FK_145ef0e1181c6ce11b45a1f1792` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `topic_tags_tag` DROP FOREIGN KEY `FK_145ef0e1181c6ce11b45a1f1792`',
    )
    await queryRunner.query(
      'ALTER TABLE `topic_tags_tag` DROP FOREIGN KEY `FK_fc99a50df02ce10245930b49a7e`',
    )
    await queryRunner.query(
      'ALTER TABLE `topic_categories_category` DROP FOREIGN KEY `FK_494f8755978aef52c77411e3650`',
    )
    await queryRunner.query(
      'ALTER TABLE `topic_categories_category` DROP FOREIGN KEY `FK_39eb83aae217809d75fefcab8de`',
    )
    await queryRunner.query('ALTER TABLE `topic` DROP FOREIGN KEY `FK_31bba1305269decaa75a06dd058`')
    await queryRunner.query('DROP INDEX `IDX_145ef0e1181c6ce11b45a1f179` ON `topic_tags_tag`')
    await queryRunner.query('DROP INDEX `IDX_fc99a50df02ce10245930b49a7` ON `topic_tags_tag`')
    await queryRunner.query('DROP TABLE `topic_tags_tag`')
    await queryRunner.query(
      'DROP INDEX `IDX_494f8755978aef52c77411e365` ON `topic_categories_category`',
    )
    await queryRunner.query(
      'DROP INDEX `IDX_39eb83aae217809d75fefcab8d` ON `topic_categories_category`',
    )
    await queryRunner.query('DROP TABLE `topic_categories_category`')
    await queryRunner.query('DROP TABLE `topic`')
    await queryRunner.query('DROP TABLE `tag`')
    await queryRunner.query('DROP TABLE `category`')
  }
}
