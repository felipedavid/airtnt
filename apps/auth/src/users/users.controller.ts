import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }
}
