import { AuditColumns } from "./audit-columns";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { MainCategory } from "./mainCategory";

@Entity("productCategory")
export class ProductCategory extends AuditColumns {
  @Column({ type: "varchar" })
  public name: string;

  @OneToOne(() => MainCategory)
  @JoinColumn({ name: "parentId" })
  parent: MainCategory;

  @Column({ type: "int", nullable: false })
  public parentId: number;
}
