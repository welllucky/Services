import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";
import { Enterprise } from "./Enterprise";

@Entity({ name: "Subsidiary" })
export class Subsidiary {
  @PrimaryGeneratedColumn()
  subsidiary_id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ default: false })
  is_matriz!: boolean;

  @ManyToOne(() => Address, { nullable: true })
  @JoinColumn({ name: "fk_address_id" })
  address!: Address;

  @ManyToOne(() => Enterprise, { nullable: true })
  @JoinColumn({ name: "fk_enterprise_cnpj" })
  enterprise!: Enterprise;

  @ManyToOne(() => Subsidiary, { nullable: true })
  @JoinColumn({ name: "parent_id" })
  // eslint-disable-next-line no-use-before-define
  parent!: Subsidiary;
}
