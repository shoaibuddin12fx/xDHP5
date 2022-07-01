import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("heroes")
export class Heroes {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "varchar",
  })
  public name: string;

  @Column({
    type: "boolean",
  })
  public isActive: boolean;
}
