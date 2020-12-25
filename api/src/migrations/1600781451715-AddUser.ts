import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUser1600781451715 implements MigrationInterface {
  name = 'AddUser1600781451715'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `firebaseUuid` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `imageUrl` varchar(255) NOT NULL, `userName` varchar(255) NOT NULL, `discription` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, `isPremium` tinyint NOT NULL, PRIMARY KEY (`id`, `uuid`)) ENGINE=InnoDB',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user`')
  }
}
