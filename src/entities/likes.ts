import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { Posts } from "./posts";
import { Users } from "./users";

@Entity("likes")
export class Likes {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "boolean",
    default: true,
  })
  public isLike: boolean;

  @Column({
    type: "int",
    nullable: false,
  })
  public userId: number;

  @ManyToMany(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({
    type: "int",
    nullable: false,
  })
  public postId: number;

  @ManyToMany(() => Posts)
  @JoinColumn({ name: "postId" })
  post: Posts;

  @Column({ type: "timestamp", nullable: false })
  public createdDate: Date;

  @Column({ type: "int", nullable: true })
  public commentId: number;
}
