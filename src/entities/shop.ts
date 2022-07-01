import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { AuditColumns } from "./audit-columns";
import { Users } from "./users";

@Entity("shop")
export class Shop extends AuditColumns {
  @OneToOne(() => Users)
  @JoinColumn({ name: "userId" })
  user: Users;

  @Column({ type: "int", nullable: false })
  public userId: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public name: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public email: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public contactNo: string;

  @Column({
    type: "int",
    nullable: false,
  })
  public type: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public country: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public logo: string;

  @Column({ type: "json", nullable: true })
  public other: string;
}
