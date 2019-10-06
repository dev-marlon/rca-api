import { Injectable } from '@nestjs/common';

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

    constructor() {
        this.users = [
            {
                userId: 1,
                firstname: 'Geronimo',
                lastname: 'Cadillac',
                username: 'Frank',
                password: '12345'
            }
        ]
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user: User) => {
            return user.username === username;
        })
    }
}
