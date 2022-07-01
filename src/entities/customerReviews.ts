import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Groups } from "./groups";
import { Products } from "./products";
import { Users } from "./users";

@Entity("customerReviews")
export class customerReviews extends AuditColumns {
  @OneToOne(() => Groups)
  @JoinColumn({ name: "shopId" })
  shop: Groups;

  @Column({ type: "int", nullable: true })
  public shopId?: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({ type: "int", nullable: false })
  public type: number;

  @OneToOne(() => Products)
  @JoinColumn({ name: "productId" })
  product: Products;

  @Column({ type: "int", nullable: false })
  public productId?: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public rating: number;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public description: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public title: string;
}
