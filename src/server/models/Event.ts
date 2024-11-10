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
  name: "Events"
})
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  @JoinColumn()
  public ticket!: Relation<Ticket>;

  @Column({
    length: 80,
    type: "text",
  })
  public title!: string;

  @Column({
    length: 256,
    type: "text",
  })
  public description!: string;

  @Column({
    type: "text",
    enum: ["open", "close", "reopen", "message", "system"],
  })
  public type!: "open" | "close" | "reopen" | "message" | "system";

  @Column({
    type: "text",
    enum: ["public", "private"],
  })
  public visibility!: "public" | "private";

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn()
  public createdBy!: Relation<User>;

  @Column("datetime")
  public readonly createdAt!: Date;
}
