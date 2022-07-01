import { AuditColumns } from "./audit-columns";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Products } from "./products";
import { Users } from "./users";

@Entity("wholesaleCart")
export class WholesaleCart extends AuditColumns {
  @OneToOne(() => Products)
  @JoinColumn({ name: "productId" })
  product: Products;

  @Column({ type: "int", nullable: true })
  public productId?: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({ type: "int", nullable: false })
  public shopId: number;
}
