import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Address" })
export class Address {
  @PrimaryGeneratedColumn()
  Address_PK!: number;

  @Column({ length: 10 })
  Zip_code!: string;

  @Column({ length: 255 })
  Address_Name!: string;

  @Column({ length: 255, nullable: true })
  complement!: string;

  @Column()
  number!: number;

  @Column({ length: 255 })
  district!: string;

  @Column({ length: 255 })
  City!: string;

  @Column({ length: 255 })
  State!: string;

  @Column({ length: 255, nullable: true })
  cordinate!: string;

  @Column({ length: 255 })
  country!: string;
}
