import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { permissionTypeConstant } from "../constants/permissionType";
import { AuditColumns } from "./audit-columns";
import { Users } from "./users";

@Entity("workEducations")
export class WorkEducations extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  public user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({ type: "varchar", nullable: false })
  public name: string;

  @Column({ type: "varchar", nullable: true })
  public position: string;

  @Column({ type: "varchar", nullable: true })
  public degree: string;

  @Column({ type: "boolean", default: false })
  public isCurrentlyEmployed: boolean;

  @Column({ type: "timestamp", nullable: true, default: null })
  public fromDate: string;

  @Column({ type: "timestamp", nullable: true, default: null })
  public toDate: string;

  @Column({ type: "varchar", nullable: false })
  public type: string;

  @Column({ type: "timestamp", nullable: false })
  public deletedDate: Date;

  @Column({
    type: "varchar",
    nullable: false,
    default: permissionTypeConstant.EVERYONE,
  })
  public permissionType: string;
}
