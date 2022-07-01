import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity("permissions")
export class Permissions {
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
  public url: string;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;
}
