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

@Entity()
class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({
    length: 80,
    type: "text",
  })
  public resume!: string;

  @Column({
    length: 460,
    type: "text",
  })
  public description!: string;

  @Column("datetime")
  public date!: Date;

  @Column({
    type: "enum",
    enum: ["low", "medium", "high"],
    default: "medium",
  })
  public priority!: "low" | "medium" | "high";

  @Column({
    type: "enum",
    enum: ["task", "incident", "problem", "change"],
    default: "problem",
  })
  public type!: "task" | "incident" | "problem" | "change";

  @Column({
    type: "enum",
    enum: ["notStarted", "inProgress", "blocked", "closed"],
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

  // public unityId!: number;

  // public sectorId!: number;

  @Column("datetime")
  public readonly createdAt!: Date;

  @Column("datetime")
  public readonly updatedAt!: Date;

  @Column("datetime")
  public readonly closedAt!: Date;

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
