import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

class Session extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({
    type: "varchar",
    length: 256,
    nullable: false,
    unique: true,
  })
  public token!: string;

  @ManyToOne(() => User, (user) => user.sessions)
  public user!: User;

  @Column("datetime")
  public expiresAt!: Date;

  @Column("datetime")
  public createdAt!: Date;
}

export { Session };
