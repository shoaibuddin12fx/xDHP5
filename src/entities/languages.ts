import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("languages")
export class Languages {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public name: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public code: string;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;
}
