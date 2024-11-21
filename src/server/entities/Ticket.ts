import type { Relation } from "typeorm";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Event } from "./Event";
import { User } from "./User";

@Entity({
  name: "Tickets",
})
class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({
    length: 80,
    type: "varchar",
  })
  public resume!: string;

  @Column({
    length: 460,
    type: "varchar",
  })
  public description!: string;

  @Column("datetime")
  public date!: Date;

  @Column({
    type: "varchar",
    length: 10, // Limite suficiente para valores como 'low', 'medium', etc.
    default: "medium",
  })
  public priority!: "low" | "medium" | "high";

  @Column({
    type: "varchar",
    length: 10, // Limite para valores como 'task', 'incident', etc.
    default: "problem",
  })
  public type!: "task" | "incident" | "problem" | "change";

  @Column({
    type: "varchar",
    length: 15, // Limite para valores como 'notStarted', etc.
    default: "notStarted",
  })
  public status!: "notStarted" | "inProgress" | "blocked" | "closed";

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn()
  public resolver!: User | null | undefined;

  @OneToMany(() => Event, (event) => event.ticket, {
    cascade: true,
  })
  public events!: Relation<Event[]> | null | undefined;

  @Column("datetime")
  public readonly createdAt!: Date;

  @Column("datetime", {
    nullable: true,
  })
  public readonly updatedAt!: Date | null;

  @Column("datetime", {
    nullable: true,
  })
  public readonly closedAt!: Date | null;

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn()
  public createdBy!: Relation<User>;

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn()
  public updatedBy!: Relation<User> | null | undefined;

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn()
  public closedBy!: Relation<User> | null | undefined;
}

export { Ticket };
