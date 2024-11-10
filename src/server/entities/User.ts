import type { Relation } from "typeorm";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Session } from "./Session";
import { Ticket } from "./Ticket";

@Entity({
  name: "Users",
})
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({
    length: 20,
    type: "varchar",
    unique: true,
  })
  public register!: string;

  @Column({
    length: 100,
  })
  public name!: string;

  @Column({
    type: "varchar",
    length: 256,
    unique: true,
  })
  public email!: string;

  @Column({
    type: "varchar",
    length: 256,
    nullable: false,
  })
  public hash!: string;

  @Column({
    type: "varchar",
    length: 256,
    nullable: false,
  })
  public salt!: string;

  @Column("datetime", {
    nullable: true,
  })
  lastConnection!: Date | null;

  @Column("boolean", { default: false })
  public isBanned!: boolean;

  @Column("boolean", { default: true })
  public canCreateTicket!: boolean;

  @Column("boolean", {
    default: true,
  })
  public canResolveTicket!: boolean;

  @Column("datetime")
  public readonly createdAt!: Date;

  @Column("datetime", {
    nullable: true,
  })
  public readonly updatedAt!: Date | null;

  @Column("datetime", {
    nullable: true,
  })
  public readonly deletedAt!: Date | null;

  @Column({ type: "varchar", length: 80 })
  public role!: string;

  @Column({ type: "varchar", length: 80 })
  public sector!: string;

  @OneToMany(() => Ticket, (ticket) => ticket.createdBy, {
    cascade: true,
  })
  public tickets!: Relation<Ticket[]> | null;

  @OneToMany(() => Ticket, (ticket) => ticket.resolver)
  public resolvedTickets!: Relation<Ticket[]> | null;

  @OneToMany(() => Session, (session) => session.user, {
    cascade: true,
  })
  public sessions!: Relation<Session[]> | null;
}

export { User };
