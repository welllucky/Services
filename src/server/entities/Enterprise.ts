import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ColorScheme } from "./ColorScheme";

@Entity({ name: "Enterprise" })
export class Enterprise {
  @PrimaryColumn({ length: 14 })
  cnpj!: string;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 100, nullable: true })
  nationality!: string;

  @Column({ type: "datetime", nullable: true })
  registered_at!: Date;

  @Column({ type: "blob", nullable: true })
  logo!: Buffer;

  @Column({ length: 100, nullable: true })
  type!: string;

  @ManyToOne(() => ColorScheme)
  @JoinColumn({ name: "fk_color_scheme_pk" })
  colorScheme!: ColorScheme;
}
