import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { Posts } from "./posts";

@Entity("media")
export class Media {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public type: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public title: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public url: string;

  @Column({
    type: "int",
    nullable: false,
  })
  public postId: number;

  @ManyToMany(() => Posts)
  @JoinColumn({ name: "postId" })
  post: Posts;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;
}
