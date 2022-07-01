import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { groupFriendTypeConstant } from "../constants/groups";
import {
  groupPrivacyTypeConstant,
  permissionTypeConstant,
} from "../constants/permissionType";
import { AuditColumns } from "./audit-columns";
import { Groups } from "./groups";
import { Users } from "./users";

@Entity("groupFriends")
export class GroupFriends extends AuditColumns {
  @OneToOne(() => Groups)
  @JoinColumn({ name: "groupId" })
  group: Groups;

  @Column({ type: "int", nullable: false })
  public groupId: string;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: string;

  @OneToOne(() => Users)
  @JoinColumn({ name: "friendId" })
  friend: Users;

  @Column({ type: "int", nullable: false })
  public friendId: string;

  @Column({
    type: "varchar",
    nullable: false,
    default: groupFriendTypeConstant.USER,
  })
  public role: string;

  @Column({ type: "json", nullable: true })
  public other: string;

  @Column({ type: "boolean", nullable: false })
  public isRequestedToJoin: boolean;

  @Column({ type: "boolean", nullable: false })
  public isPostApproval: boolean;
}
