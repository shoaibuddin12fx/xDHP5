import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { Users } from "./users";

@Entity("followers")
export class Followers {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "int",
    nullable: false,
  })
  public followeeId: number;

  @Column({
    type: "int",
    nullable: false,
  })
  public followerId: number;

  @ManyToMany(() => Users)
  @JoinColumn({ name: "followeeId" })
  public followee: Users;

  @ManyToMany(() => Users)
  @JoinColumn({ name: "followerId" })
  public follower: Users;

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
}
