import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class AllUserRelatedTables1636789447149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "userTypes",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "deletedDate",
            type: "TimeStamp",
            default: null,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "roles",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "userTypeId",
            type: "int",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "deletedDate",
            type: "timestamp",
            default: null,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "roles",
      new TableForeignKey({
        columnNames: ["userTypeId"],
        referencedColumnNames: ["id"],
        referencedTableName: "userTypes",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "permissions",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "url",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "rolePermissions",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "roleId",
            type: "int",
            isNullable: false,
          },
          {
            name: "permissionId",
            type: "int",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "rolePermissions",
      new TableForeignKey({
        columnNames: ["permissionId"],
        referencedColumnNames: ["id"],
        referencedTableName: "permissions",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "rolePermissions",
      new TableForeignKey({
        columnNames: ["roleId"],
        referencedColumnNames: ["id"],
        referencedTableName: "roles",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "languages",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "code",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
          {
            name: "deletedDate",
            type: "timestamp",
            default: null,
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "languageData",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "value",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
          {
            name: "deletedDate",
            type: "timestamp",
            default: null,
          },
          {
            name: "listOfValuesId",
            type: "int",
            isNullable: true,
          },
          {
            name: "languageId",
            type: "int",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "languageData",
      new TableForeignKey({
        columnNames: ["languageId"],
        referencedColumnNames: ["id"],
        referencedTableName: "languages",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "listOfValues",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "key",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
          {
            name: "deletedDate",
            type: "timestamp",
            default: null,
          },
          {
            name: "parentId",
            type: "int",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "languageData",
      new TableForeignKey({
        columnNames: ["listOfValuesId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "listOfValues",
      new TableForeignKey({
        columnNames: ["parentId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "usersSocialLogins",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "googleId",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "facebookId",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "userTypeId",
            type: "int",
            isNullable: false,
          },
          {
            name: "firstName",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "lastName",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "dateOfBirth",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
          {
            name: "contactNo",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "genderId",
            type: "int",
            isNullable: true,
          },
          {
            name: "countryId",
            type: "int",
            isNullable: true,
          },
          {
            name: "cityId",
            type: "int",
            isNullable: true,
          },
          {
            name: "stateId",
            type: "int",
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "accountVerificationHash",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "forgotPasswordHash",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "password",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "socialLoginId",
            type: "int",
            isNullable: true,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
          {
            name: "isLocked",
            type: "boolean",
            default: false,
          },
          {
            name: "isVerified",
            type: "boolean",
            default: false,
          },
          {
            name: "lockedReason",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "timezoneId",
            type: "int",
            isNullable: true,
          },
          {
            name: "currencyId",
            type: "int",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["userTypeId"],
        referencedColumnNames: ["id"],
        referencedTableName: "userTypes",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["genderId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["countryId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["cityId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["stateId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["timezoneId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["currencyId"],
        referencedColumnNames: ["id"],
        referencedTableName: "listOfValues",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["socialLoginId"],
        referencedColumnNames: ["id"],
        referencedTableName: "usersSocialLogins",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "hashing",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "type",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "hash",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "expiredAt",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
          {
            name: "createdAt",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
          {
            name: "updatedAt",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
          {
            name: "createdBy",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
          {
            name: "updatedBy",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("userTypes");
    await queryRunner.dropTable("roles");
    await queryRunner.dropTable("permissions");
    await queryRunner.dropTable("rolePermissions");
    await queryRunner.dropTable("languages");
    await queryRunner.dropTable("languageData");
    await queryRunner.dropTable("listOfValues");
    await queryRunner.dropTable("usersSocialLogins");
    await queryRunner.dropTable("users");
    await queryRunner.dropTable("hashingSchema");
  }
}
