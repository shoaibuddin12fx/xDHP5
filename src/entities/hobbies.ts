import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { permissionTypeConstant } from "../constants/permissionType";
import { AuditColumns } from "./audit-columns";
import { Users } from "./users";

@Entity("hobbies")
export class Hobbies extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  public user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({ type: "varchar", nullable: false })
  public name: string;

  @Column({ type: "int", nullable: false })
  public deletedDate: Date;

  @Column({
    type: "varchar",
    nullable: false,
    default: permissionTypeConstant.EVERYONE,
  })
  public permissionType: string;
}
