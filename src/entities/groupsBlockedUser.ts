import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Groups } from "./groups";
import { Users } from "./users";

@Entity("groupsBlockedUser")
export class GroupsBlockedUser extends AuditColumns {
  @OneToOne(() => Groups)
  @JoinColumn({ name: "groupId" })
  group: Groups;

  @Column({ type: "int", nullable: false })
  public groupId: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({ type: "json", nullable: true })
  public other: string;
}
