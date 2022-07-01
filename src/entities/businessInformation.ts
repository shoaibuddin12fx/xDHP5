import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Shop } from "./shop";
import { Users } from "./users";

@Entity("businessInformation")
export class BusinessInformation extends AuditColumns {
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
  public businessaddress: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public license: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public licenseDoc: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public corpNameDoc: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public corpNameDocFile: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public govtIssuedId: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  public personInCharge: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  public inChargeContactNo: string;

  @Column({ type: "json", nullable: true })
  public other: string;
}
