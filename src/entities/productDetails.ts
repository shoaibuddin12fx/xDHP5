import { AuditColumns } from "./audit-columns";
import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Products } from "./products";

@Entity("productDetails")
export class ProductDetails extends AuditColumns {
  @OneToOne(() => Products)
  @JoinColumn({ name: "productId" })
  product: Products;

  @Column({ type: "int", nullable: false })
  public productId: number;

  @Column({ type: "varchar" })
  public sku: string;

  @Column({ type: "varchar" })
  public color: string;

  @Column({ type: "varchar" })
  public size: string;

  @Column({ type: "varchar", nullable: true })
  public quantity: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public price: number;
}
