import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "../../../../ormconfig";
import { UserEntity } from "./entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([
      UserEntity,
    ]),
  ]
})
export class StorageModule {}
