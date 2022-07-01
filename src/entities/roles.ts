import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { UserTypes } from "./user-types";

@Entity("roles")
export class Roles {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "int",
    nullable: true,
    default: null,
  })
  public userTypeId: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public name: string;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;

  @OneToOne(() => UserTypes)
  @JoinColumn()
  userTypes: UserTypes;
}
