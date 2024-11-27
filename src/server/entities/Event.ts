import type { Relation } from "typeorm";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ticket } from "./Ticket";
import { User } from "./User";

@Entity({
  name: "Events",
})
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  @JoinColumn()
  public ticket!: Relation<Ticket>;

  @Column({
    length: 80,
    type: "varchar",
  })
  public title!: string;

  @Column({
    length: 256,
    type: "varchar",
  })
  public description!: string;

  @Column({
    type: "varchar",
    length: 10, // Limite para valores como 'open', 'close', etc.
  })
  public type!: "open" | "close" | "reopen" | "message" | "system";

  @Column({
    type: "varchar",
    length: 10, // Limite para valores como 'public', 'private'.
  })
  public visibility!: "public" | "private";

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn()
  public readonly createdBy!: Relation<User>;

  @Column("datetime")
  public readonly createdAt!: Date;
}
