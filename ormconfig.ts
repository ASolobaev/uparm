import { Logger } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export default ((): TypeOrmModuleOptions => {
    let databasePath = '/dist/apps/server';
    let replacementSymbol = '/';

    if (process.platform === 'win32') {
        databasePath = '\\dist\\apps\\server';
        replacementSymbol = '\\';
    }

    const getFileLocation = (dirname: string): string => dirname.replace(databasePath, replacementSymbol);
    const location = join(getFileLocation(__dirname), 'dev.db');

    Logger.log(`Подключение к СУБД SQLite по адресу: ${location}`, 'ormconfig.ts');

    return {
        type: 'sqljs',
        location: location,
        autoSave: true,
        cache: true,
        synchronize: true,
        retryAttempts: 1,
        autoLoadEntities: true,
        logging: 'all',
        logger: 'file',
        cli: {
            migrationsDir: join(getFileLocation(__dirname), 'libs', 'storage', 'src', 'lib', 'migrations'),
        },
        entities: ["dist/**/*.entity.js"]
    }
})();
