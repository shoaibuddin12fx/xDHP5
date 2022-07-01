import { AuditColumns } from "./audit-columns";
import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { Orders } from "./orders";

@Entity("orderDetails")
export class OrderDetails extends AuditColumns {
  @OneToOne(() => Orders)
  @JoinColumn({ name: "orderId" })
  order: Orders;

  @Column({ type: "int", nullable: false })
  public orderId: number;

  @Column({ type: "int", nullable: false })
  public productId: number;

  @Column({ type: "varchar", nullable: false })
  public sku: string;

  @Column({ type: "varchar", nullable: false })
  public productName: string;

  @Column({ type: "int", nullable: false })
  public quantity: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public subTotal: number;

  @Column({ type: "varchar", nullable: true })
  public voucher: string;
}
