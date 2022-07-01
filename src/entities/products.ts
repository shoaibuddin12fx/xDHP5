import { ProductDetails } from "./productDetails";
import { AuditColumns } from "./audit-columns";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { MainCategory } from "./mainCategory";
import { ProductSubCategory } from "./productSubCategory";
import { ProductCategory } from "./productCategory";
import { Shop } from "./shop";

@Entity("products")
export class Products extends AuditColumns {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar" })
  public name: string;

  @OneToOne(() => MainCategory)
  @JoinColumn({ name: "mainCategoryId" })
  mainCategory: MainCategory;

  @Column({ type: "int", nullable: false })
  public mainCategoryId: number;

  @OneToOne(() => ProductCategory)
  @JoinColumn({ name: "productCategoryId" })
  productCategory: ProductCategory;

  @Column({ type: "int", nullable: false })
  public productCategoryId: number;

  @OneToOne(() => ProductSubCategory)
  @JoinColumn({ name: "productSubCategoryId" })
  productSubCategory: ProductSubCategory;

  @Column({ type: "int", nullable: false })
  public productSubCategoryId: number;

  @Column({ type: "varchar" })
  public description: string;

  @Column({ type: "varchar" })
  public images: string;

  @Column({ type: "varchar" })
  public colors: string;

  @Column({ type: "varchar" })
  public sizes: string;

  @Column({ type: "varchar" })
  public productWeight: string;

  @Column({ type: "varchar" })
  public packageWeight: string;

  @Column({ type: "varchar" })
  public type: string;

  @OneToOne(() => Shop)
  @JoinColumn({ name: "shopId" })
  shop: Shop;

  @Column({ type: "int", nullable: false })
  public shopId: number;

  @Column({
    type: "decimal",
    precision: 18,
    scale: 2,
    default: 0.0,
    nullable: true,
  })
  public price: number;

  @OneToMany(() => ProductDetails, (post) => post.id)
  details: ProductDetails[];
}
