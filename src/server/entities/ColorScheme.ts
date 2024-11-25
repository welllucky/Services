import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Color_scheme" })
export class ColorScheme {
  @PrimaryGeneratedColumn()
  color_scheme_PK!: number;

  @Column({ length: 7 })
  primary_color!: string;

  @Column({ length: 7 })
  secondary_color!: string;

  @Column({ length: 7 })
  tertiary_color!: string;
}
