import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Users } from "./users";

@Entity("userPermission")
export class UserPermission extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  users: Users;

  @Column({ type: "int", nullable: true })
  public userId?: number;

  @Column({ type: "int", nullable: true })
  public permission: number;

  @Column({ type: "int", nullable: true })
  public permissionType: number;

  @Column({ type: "json", nullable: true })
  public other: string;

  @Column({ type: "int", nullable: true })
  public groupId?: number;
}
