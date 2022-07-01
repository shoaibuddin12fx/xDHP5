import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./users";

@Entity("posts")
export class Posts {
  // @PrimaryGeneratedColumn("uuid")
  // public id: string;

  @PrimaryGeneratedColumn({
    type: "int",
  })
  public id: number;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public description: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public type: string;

  @Column({
    type: "int",
    nullable: true,
  })
  public userId: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "timestamp", nullable: false, default: null })
  public createdDate: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;

  @Column({ type: "boolean", default: false })
  public isGroupPost: boolean;

  @Column({ type: "int", nullable: true })
  public groupId: string;

  @Column({ type: "boolean", default: false })
  public isSharedPost: boolean;

  @Column({ type: "int", nullable: true })
  public sharedBy: number;

  @Column({ type: "varchar", nullable: true })
  public sharedDescription: string;

  @Column({ type: "int", nullable: true, default: null })
  public groupPostApproved: number;

  @Column({ type: "timestamp", nullable: false, default: null })
  public sharedPostDate: Date;

  @Column({ type: "int", nullable: true, default: null })
  public parentPostId: string;
}
