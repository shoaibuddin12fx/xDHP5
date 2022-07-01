import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { Posts } from "./posts";
import { Users } from "./users";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public description: string;

  @Column({
    type: "int",
    nullable: false,
  })
  public userId: number;

  @ManyToMany(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public postId: number;

  @ManyToMany(() => Posts)
  @JoinColumn({ name: "postId" })
  post: Posts;

  @Column({ type: "timestamp", nullable: false })
  public createdDate: Date;

  @Column({ type: "timestamp", nullable: false })
  public deletedDate: Date;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;

  @Column({ type: "int", nullable: true })
  public replyTo: number;

  @Column({ type: "int", nullable: true })
  public parentCommentId: number;
}
