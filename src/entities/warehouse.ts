import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Shop } from "./shop";
import { Users } from "./users";

@Entity("warehouse")
export class Warehouse extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: true })
  public userId: number;

  @OneToOne(() => Shop)
  @JoinColumn({ name: "shopId" })
  shop: Shop;

  @Column({ type: "int", nullable: false })
  public shopId: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public fullName: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public contactNo: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public address: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public country: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public email: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public state: string;
  @Column({ type: "json", nullable: true })
  public other: string;
}
