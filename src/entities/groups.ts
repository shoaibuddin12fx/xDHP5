import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import {
  groupPrivacyTypeConstant,
  permissionTypeConstant,
} from "../constants/permissionType";
import { AuditColumns } from "./audit-columns";
import { Users } from "./users";

@Entity("groups")
export class Groups extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({ type: "varchar", nullable: false })
  public name: string;

  @Column({ type: "varchar", nullable: true })
  public description: string;

  @Column({
    type: "varchar",
    nullable: false,
    default: groupPrivacyTypeConstant.PUBLIC,
  })
  public privacyType: string;

  @Column({ type: "varchar", nullable: true })
  public profilePhoto: string;

  @Column({ type: "varchar", nullable: true })
  public coverPhoto: string;

  @Column({
    type: "boolean",
    default: true,
  })
  public postApproval: boolean;
  @Column({
    type: "boolean",
    default: true,
  })
  public visiblity: boolean;
  @Column({
    type: "boolean",
    default: true,
  })
  public eventHosting: boolean;
}
