import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddNullableFieldToUser1600787782990 implements MigrationInterface {
  name = 'AddNullableFieldToUser1600787782990'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NULL DEFAULT NULL',
    )
    await queryRunner.query(
      'ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NULL DEFAULT NULL',
    )
    await queryRunner.query(
      'ALTER TABLE `user` CHANGE `isActive` `isActive` tinyint NOT NULL DEFAULT 0',
    )
    await queryRunner.query(
      'ALTER TABLE `user` CHANGE `isPremium` `isPremium` tinyint NOT NULL DEFAULT 0',
    )
    await queryRunner.query(
      'ALTER TABLE `topic` CHANGE `isDraft` `isDraft` tinyint NOT NULL DEFAULT 0',
    )
    await queryRunner.query(
      'ALTER TABLE `topic` CHANGE `isArchived` `isArchived` tinyint NOT NULL DEFAULT 0',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `topic` CHANGE `isArchived` `isArchived` tinyint NOT NULL')
    await queryRunner.query('ALTER TABLE `topic` CHANGE `isDraft` `isDraft` tinyint NOT NULL')
    await queryRunner.query('ALTER TABLE `user` CHANGE `isPremium` `isPremium` tinyint NOT NULL')
    await queryRunner.query('ALTER TABLE `user` CHANGE `isActive` `isActive` tinyint NOT NULL')
    await queryRunner.query(
      'ALTER TABLE `user` CHANGE `discription` `discription` varchar(255) NOT NULL',
    )
    await queryRunner.query('ALTER TABLE `user` CHANGE `imageUrl` `imageUrl` varchar(255) NOT NULL')
  }
}
