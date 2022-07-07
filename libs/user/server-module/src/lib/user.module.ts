import { Module } from '@nestjs/common';
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { StorageModule, UserEntity } from "@uparm/storage";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    StorageModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserServerModule {}
