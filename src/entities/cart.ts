import { AuditColumns } from "./audit-columns";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ProductCategory } from "./productCategory";
import { Products } from "./products";
import { Users } from "./users";

@Entity("cart")
export class cart extends AuditColumns {
  @OneToOne(() => Products)
  @JoinColumn({ name: "productId" })
  product: Products;

  @Column({ type: "int", nullable: true })
  public productId?: number;

  @Column({ type: "int", nullable: true })
  public productDetailId?: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

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

  @Column({ type: "varchar", nullable: true })
  public size: string;

  @Column({ type: "varchar" })
  public color: string;

  @Column({ type: "int", nullable: false })
  public shopId: number;
}
