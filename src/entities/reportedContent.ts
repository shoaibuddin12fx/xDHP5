import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { groupFriendTypeConstant } from "../constants/groups";
import { AuditColumns } from "./audit-columns";
import { Groups } from "./groups";
import { Posts } from "./posts";
import { Users } from "./users";

@Entity("reportedContent")
export class reportedContent extends AuditColumns {
  @OneToOne(() => Groups)
  @JoinColumn({ name: "groupId" })
  group: Groups;

  @Column({ type: "int", nullable: true })
  public groupId?: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: string;

  @OneToOne(() => Posts)
  @JoinColumn({ name: "postId" })
  post: Posts;

  @Column({ type: "int", nullable: false })
  public postId: string;

  @Column({
    type: "varchar",
    nullable: false,
    default: groupFriendTypeConstant.USER,
  })
  public reportType: string;

  @Column({ type: "json", nullable: true })
  public other: any;

  @Column({ type: "boolean", nullable: false })
  public isApproved: boolean;
}
