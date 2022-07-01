import { AuditColumns } from "./audit-columns";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ProductCategory } from "./productCategory";

@Entity("productSubCategory")
export class ProductSubCategory extends AuditColumns {
  @Column({ type: "varchar" })
  public name: string;

  @OneToOne(() => ProductCategory)
  @JoinColumn({ name: "parentId" })
  parent: ProductCategory;

  @Column({ type: "int", nullable: false })
  public parentId: number;
}
