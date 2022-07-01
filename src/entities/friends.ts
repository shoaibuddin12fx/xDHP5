import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { Users } from "./users";

@Entity("friends")
export class Friends {
  // @PrimaryGeneratedColumn("uuid")
  // public id: string;

  @PrimaryGeneratedColumn({
    type: "int",
  })
  public id: number;
  
  @Column({
    type: "int",
    nullable: false,
  })
  public userId: number;

  @Column({
    type: "int",
    nullable: false,
  })
  public friendId: number;

  @ManyToMany(() => Users)
  @JoinColumn({ name: "userId" })
  public user: Users;

  @ManyToMany(() => Users)
  @JoinColumn({ name: "friendId" })
  public friend: Users;

  @Column({
    type: "boolean",
    default: true,
  })
  public isFreind: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  public isFollow: boolean;

  @Column({ type: "timestamp", nullable: true, default: null })
  public addedDate: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  public isRequest: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  public isDeclined: boolean;
}
