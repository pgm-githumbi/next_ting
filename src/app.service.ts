import { Body, Injectable, RawBodyRequest, Req } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  users() {
    return this.prisma.user.findMany();
  }

  user(userId: string) {
    return this.prisma.user.findFirstOrThrow({
      where: { id: userId },
    });
  }

  addUser(user: User) {
    return this.prisma.user.create({ data: { ...user } });
  }
}
