import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import {
  groupPrivacyTypeConstant,
  permissionTypeConstant,
} from "../constants/permissionType";
import { AuditColumns } from "./audit-columns";
import { Users } from "./users";

@Entity("userProfilePhotos")
export class UserProfilePhotos extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({ type: "varchar", nullable: false })
  public image: string;

  @Column({ type: "int", nullable: true })
  public type: number;

  @Column({
    type: "boolean",
    default: true,
  })
  public isCurrentPic: boolean;
}
