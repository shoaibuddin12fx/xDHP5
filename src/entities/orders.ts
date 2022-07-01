import { AuditColumns } from "./audit-columns";
import { Entity, Column } from "typeorm";
import { Users } from "./users";

@Entity("orders")
export class Orders extends AuditColumns {
  @Column({ type: "varchar", nullable: false })
  public orderNumber: string;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public shippingFees: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public grandTotal: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public commision: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public paymentFee: number;

  @Column({ type: "varchar", nullable: true })
  public phoneNumber: string;

  @Column({ type: "varchar", nullable: true })
  public email: string;

  @Column({ type: "varchar", nullable: false })
  public status: string;

  @Column({ type: "varchar", nullable: true })
  public action: string;

  @Column({ type: "int", nullable: false })
  public customerId: number;

  @Column({ type: "int", nullable: true })
  public orderType: number;

  @Column({ type: "varchar", nullable: true })
  public cancelDescription: string;

  @Column({ type: "timestamp", nullable: true, default: null })
  public statusDate: Date;
}
