import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity("listOfValues")
export class ListOfValues {
  // @PrimaryGeneratedColumn("uuid")
  // public id: number;

  @Column({
    type: "int",
    // nullable: true,
    primary: true,
  })
  public id: number;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public inputKey: string;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;

  @Column({
    type: "varchar",
    default: true,
    nullable: true,
  })
  public key: string;

  @Column({ type: "timestamp", nullable: true })
  public deletedDate: Date;

  @Column({
    type: "int",
    nullable: true,
  })
  public parentId: number;

  @OneToOne(() => ListOfValues, (o) => o.parentId, { nullable: true })
  listOfValues?: ListOfValues;
}
