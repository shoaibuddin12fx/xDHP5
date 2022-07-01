import { AuditColumns } from "./audit-columns";
import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Products } from "./products";
import { Users } from "./users";
import { WholesaleCart } from "./wholesaleCart";

@Entity("wholesaleCartDetails")
export class WholesaleCartDetails extends AuditColumns {
  @OneToOne(() => WholesaleCart)
  @JoinColumn({ name: "wholesaleCartId" })
  wholesaleCart: WholesaleCart;

  @Column({ type: "int", nullable: true })
  public wholesaleCartId?: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @OneToOne(() => Products)
  @JoinColumn({ name: "productId" })
  product: Products;

  @Column({ type: "int", nullable: true })
  public productId?: number;

  @Column({ type: "int", nullable: true })
  public productDetailId?: number;

  @Column({ type: "int", nullable: true })
  public productDetailDetailId?: number;

  @Column({ type: "varchar" })
  public sku: string;

  @Column({ type: "varchar", nullable: true })
  public size: string;

  @Column({ type: "varchar" })
  public color: string;

  @Column({ type: "int", nullable: false })
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
