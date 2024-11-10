import type { Relation } from "typeorm";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity({
  name: "Sessions",
})
class Session extends BaseEntity {
  @PrimaryGeneratedColumn()
  public readonly id!: string;

  @Column({
    type: "varchar",
    length: 256,
    nullable: false,
    unique: true,
  })
  public readonly token!: string;

  @ManyToOne(() => User)
  @JoinColumn()
  public readonly user!: Relation<User>;

  @Column("datetime")
  public readonly expiresAt!: Date;

  @Column("datetime")
  public readonly createdAt!: Date;

  @Column("boolean", {
    default: true,
  })
  public isActive!: boolean;
}

export { Session };
