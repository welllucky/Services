import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Issue_Categories" })
export class IssueCategory {
  @PrimaryGeneratedColumn()
  issue_category_id!: number;

  @Column({ length: 255, unique: true })
  name!: string;

  @Column()
  base_point!: number;
}
