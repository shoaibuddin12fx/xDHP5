import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class AuditColumns {
  @PrimaryGeneratedColumn({ type: "int" })
  public id: number;
  // @Column({ type: "int" })
  // public id: number;

  @Column({ type: "timestamp", nullable: true, default: null })
  public createdDate: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public modifiedDate: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({ type: "int", nullable: true, default: null })
  public createdBy: string;

  @Column({ type: "int", nullable: true, default: null })
  public modifiedBy: string;

  @Column({ type: "boolean", default: true })
  public isActive: boolean;
}
