import { AuditColumns } from "./audit-columns";
import { Entity, Column } from "typeorm";

@Entity("mainCategory")
export class MainCategory extends AuditColumns {
  @Column({ type: "varchar" })
  public name: string;
}
