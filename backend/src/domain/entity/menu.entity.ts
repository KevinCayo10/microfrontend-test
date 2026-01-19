import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "menus",
  
})
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  @Column({ type: "varchar", length: 255 })
  path!: string;

  @Column({ type: "boolean", default: true })
  status!: boolean;
}
