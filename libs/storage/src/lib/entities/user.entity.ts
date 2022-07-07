import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserInterface } from "@uparm/common/interfaces";

@Entity()
export class UserEntity extends BaseEntity implements UserInterface {
  @PrimaryGeneratedColumn({ name: 'id'})
  id: number;

  @CreateDateColumn({ name: 'registration_date' })
  registrationDate: Date;

  @Column({ name: 'full_name', nullable: true})
  fullName: string;

  @Column({ name: 'firstname'})
  firstName: string;

  @Column({ name: 'lastname'})
  lastName: string;

  @Column({ name: 'birth_date'})
  birthDate: Date;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'order_count' })
  orderCount: number;

  @Column({ name: 'is_active' })
  isActive: boolean;
}
