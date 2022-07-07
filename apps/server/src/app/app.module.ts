import { Module } from '@nestjs/common';

import { StorageModule } from "@uparm/storage";
import { UserServerModule } from "@uparm/user/server-module";

@Module({
  imports: [
    StorageModule,
    UserServerModule,
  ]
})
export class AppModule {}
