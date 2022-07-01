import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Groups } from "./groups";

@Entity("groupRules")
export class GroupRules extends AuditColumns {
  @OneToOne(() => Groups)
  @JoinColumn({ name: "groupId" })
  group: Groups;

  @Column({ type: "int", nullable: false })
  public groupId: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public title: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public description: string;

  @Column({ type: "json", nullable: true })
  public other: string;
}
