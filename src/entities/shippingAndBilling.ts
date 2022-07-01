import { AuditColumns } from "./audit-columns";
import { Entity, Column, OneToOne, JoinColumn } from "typeorm";

@Entity("shippingAndBilling")
export class ShippingAndBilling extends AuditColumns {
  @Column({ type: "varchar", nullable: false })
  public fullName: string;

  @Column({ type: "varchar", nullable: true })
  public phoneNumber: string;

  @Column({ type: "varchar", nullable: true })
  public email: string;

  @Column({ type: "varchar", nullable: true })
  public country: string;

  @Column({ type: "varchar", nullable: true })
  public city: string;

  @Column({ type: "varchar", nullable: true })
  public area: string;

  @Column({ type: "varchar", nullable: true })
  public address: string;

  @Column({ type: "varchar", nullable: true })
  public type: string;

  @Column({ type: "int", nullable: false })
  public customerId: number;
}
