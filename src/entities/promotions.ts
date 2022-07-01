import {
  Entity,
  Column,
  JoinColumn,
  OneToOne,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Shop } from "./shop";
import { Users } from "./users";

@Entity("promotion")
export class Promotion extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @ManyToMany(() => Shop)
  @JoinColumn({ name: "shopId" })
  shop: Shop;

  @Column({ type: "int", nullable: true })
  public shopId: number;

  @Column({ type: "varchar", nullable: true })
  public productSku: string;

  @Column({ type: "varchar", nullable: false })
  public voucherName: string;

  @Column({ type: "varchar", nullable: false })
  public voucherCode: string;

  @Column({ type: "timestamp", nullable: false, default: null })
  public selectDate: Date;

  @Column({ type: "timestamp", nullable: false, default: null })
  public endDate: Date;

  @Column({ type: "varchar", nullable: true })
  public discountType: string;

  @Column({ type: "decimal", nullable: true })
  public discountValue: number;

  @Column({ type: "int", nullable: true })
  public minValueOrder: number;

  @Column({ type: "int", nullable: true })
  public totalVoucher: number;

  @Column({ type: "int", nullable: true })
  public usageLimitPerCustomer: number;

  @Column({ type: "decimal", nullable: true })
  public discountPercentageValue: number;

  @Column({ type: "decimal", nullable: true })
  public maximumDiscount: number;
}
