import { AuditColumns } from "./audit-columns";
import { Entity, Column } from "typeorm";

@Entity("colors")
export class Colors extends AuditColumns {
  @Column({ type: "varchar" })
  public name: string;
}
