import { AuditColumns } from "./audit-columns";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ProductDetails } from "./productDetails";

@Entity("productDetailDetails")
export class ProductDetailDetails extends AuditColumns {
  @OneToOne(() => ProductDetails)
  @JoinColumn({ name: "productDetailsId" })
  productDetails: ProductDetails;

  @Column({ type: "int", nullable: false })
  public productDetailsId: number;

  @Column({ type: "varchar" })
  public sku: string;

  @Column({ type: "int" })
  public min: number;

  @Column({ type: "int" })
  public max: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public price: number;
}
