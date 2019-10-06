import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    username: string;

    @Column({ length: 500 })
    firstname: string;

    @Column({ length: 500 })
    lastname: string;

    @Column({ length: 500 })
    email: string;
}