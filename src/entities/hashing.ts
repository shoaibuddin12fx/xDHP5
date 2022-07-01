import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("hashing")
export class Hashing {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public type: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public hash: string;

  @Column({ type: "timestamp", nullable: true, default: null })
  public expiredAt: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public createdAt: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public updatedAt: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public createdBy: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public updatedBy: Date;
}
