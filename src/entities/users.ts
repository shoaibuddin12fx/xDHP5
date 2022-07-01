import { permissionTypeConstant } from "./../constants/permissionType";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ListOfValues } from "./list-of-values";
import { UsersSocialLogins } from "./users-social-logins";
import { UserTypes } from "./user-types";

@Entity("users")
export class Users {
  // @PrimaryGeneratedColumn("uuid")
  // public id: number;

  @PrimaryGeneratedColumn({
    type: "int",
  })
  public id: number;

  @Column({
    type: "int",
    nullable: false,
  })
  public userTypeId: number;

  @OneToOne(() => UserTypes)
  @JoinColumn({ name: "userTypeId" })
  usertypes: UserTypes;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public firstName: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public lastName: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public email: string;

  @Column({ type: "timestamp", nullable: true, default: null })
  public dateOfBirth: Date;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public contactNo: string;

  @Column({
    type: "int",
    nullable: true,
  })
  public genderId: number;

  @OneToOne(() => ListOfValues)
  @JoinColumn({ name: "genderId" })
  gender: ListOfValues;

  @Column({
    type: "int",
    nullable: true,
  })
  public countryId: number;

  @OneToOne(() => ListOfValues)
  @JoinColumn({ name: "countryId" })
  country: ListOfValues;

  @Column({
    type: "int",
    nullable: true,
  })
  public cityId: number;

  @OneToOne(() => ListOfValues)
  @JoinColumn({ name: "cityId" })
  city: ListOfValues;

  @Column({
    type: "int",
    nullable: true,
  })
  public stateId: number;

  @OneToOne(() => ListOfValues)
  @JoinColumn({ name: "stateId" })
  state: ListOfValues;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public address: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public accountVerificationHash: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public forgotPasswordHash: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public password: string;

  @Column({
    type: "int",
    nullable: true,
  })
  public socialLoginId: number;

  @OneToOne(() => UsersSocialLogins)
  @JoinColumn({ name: "socialLoginId" })
  social: UsersSocialLogins;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({
    type: "boolean",
    default: true,
  })
  public isLocked: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  public isVerified: boolean;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public lockedReason: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  public fullName: string;

  @Column({
    type: "int",
    nullable: true,
  })
  public timezoneId: number;

  @OneToOne(() => ListOfValues)
  @JoinColumn({ name: "timezoneId" })
  timezone: ListOfValues;

  @Column({ type: "int", nullable: true })
  public currencyId: number;

  @OneToOne(() => ListOfValues)
  @JoinColumn({ name: "currencyId" })
  currency: ListOfValues;

  @Column({
    type: "varchar",
    nullable: false,
    default: permissionTypeConstant.EVERYONE,
  })
  public originAddress: string;

  @Column({
    type: "varchar",
    nullable: false,
    default: permissionTypeConstant.EVERYONE,
  })
  public description: string;

  @Column({
    type: "varchar",
    nullable: false,
    default: permissionTypeConstant.EVERYONE,
  })
  public relationship: string;

  @Column({ type: "varchar", nullable: true })
  public bio: string;

  @Column({ type: "varchar", nullable: true })
  public profileImage: string;

  @Column({ type: "varchar", nullable: true })
  public coverImage: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public emailPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public dateOfBirthPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public contactNoPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public genderIdPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public countryIdPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public cityIdPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public stateIdPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public addressPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public originAddressPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public relationshipPermission: string;

  // @Column({ type: 'varchar', nullable: false, default: permissionTypeConstant.EVERYONE })
  // public descriptionPermission: string;
}
