import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Generated,
} from "typeorm";

@Entity("usersSocialLogins")
export class UsersSocialLogins {
  // @PrimaryGeneratedColumn("uuid")
  // @Column({
  //   type: "int",
  //   nullable: false,
  //   primary: true,
  // })
  @Column({
    type: "int",
    nullable: true,
    primary: true,
  })
  public id: number;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public googleId: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  public facebookId: string;
}
