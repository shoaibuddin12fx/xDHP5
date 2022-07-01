import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Permissions } from './permissions';
import { Roles } from './roles';

@Entity('rolePermissions')
export class RolePermissions {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    type: 'int',
    nullable: true,
    default: null,
  })
  public permissionId: number;

  @Column({
    type: 'int',
    nullable: true,
    default: null,
  })
  public roleId: number;

  @OneToOne(() => Permissions)
  @JoinColumn()
  permissions: Permissions;

  @OneToOne(() => Roles)
  @JoinColumn()
  roles: Roles;
}
