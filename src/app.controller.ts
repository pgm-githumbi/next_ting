import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { User } from '@prisma/client';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  users(): Promise<User[]> {
    console.log('getting user');
    return this.appService.users();
  }

  @Get(':userId')
  user(@Param('userId') userId: string): Promise<User> {
    return this.appService.user(userId);
  }

  @Post()
  newUser(@Body() body) {
    return this.appService.addUser(body);
  }
}
