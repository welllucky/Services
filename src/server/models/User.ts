import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Ticket } from "./Ticket";
import { Session } from "./Session";

@Entity()
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
  })
  public hash!: string;

  @Column("datetime")
  lastConnection!: Date;

  @Column("boolean", { default: false })
  public isBanned!: boolean;

  @Column("boolean", { default: true })
  public canCreateTicket!: boolean;

  @Column("boolean", {
    default: false,
  })
  public canResolveTicket!: boolean;

  @Column("datetime")
  public readonly createdAt!: Date;

  @Column("datetime")
  public readonly updatedAt!: Date | null;

  @Column("datetime")
  public readonly deletedAt!: Date | null;

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
