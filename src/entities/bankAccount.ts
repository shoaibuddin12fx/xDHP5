import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Shop } from "./shop";
import { Users } from "./users";

@Entity("bankAccount")
export class BankAccount extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
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
  public accountTitle: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public accountNumber: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public IBAN: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public bankName: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  public branchCode: string;

  @Column({ type: "json", nullable: true })
  public other: string;
}
