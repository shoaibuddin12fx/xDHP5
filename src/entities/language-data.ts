import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Languages } from "./languages";
import { ListOfValues } from "./list-of-values";

@Entity("languageData")
export class LanguageData {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  public value: string;

  @Column({
    type: "boolean",
    default: true,
  })
  public isActive: boolean;

  @Column({ type: "timestamp", nullable: true, default: null })
  public deletedDate: Date;

  @Column({
    type: "int",
    nullable: true,
    default: null,
  })
  public listOfValuesId: number;

  @Column({
    type: "int",
    nullable: true,
    default: null,
  })
  public languageId: number;

  @OneToOne(() => Languages)
  @JoinColumn({ name: "languageId" })
  languages: Languages;

  @OneToOne(() => ListOfValues)
  @JoinColumn({ name: "listOfValuesId" })
  listOfValues: ListOfValues;
}
