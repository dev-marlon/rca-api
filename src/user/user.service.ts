import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

export interface User {
    userId: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
}

@Injectable()
export class UserService {
    private readonly users: User[];

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
        this.users = [
            {
                id: 1,
                firstname: 'Geronimo',
                lastname: 'Cadillac',
                username: 'Frank',
                email: 'foo@gmx.de',
                password: '12345',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        // this.userRepository.findOne(1);

        return this.users.find((user: User) => {
            return user.username === username;
        });
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async add(): Promise<User> {
        return this.userRepository.create({
            id: 1,
            firstname: 'Geronimo',
            lastname: 'Cadillac',
            username: 'Frank',
            email: 'foo@gmx.de',
            password: '12345',
        });
    }
}
