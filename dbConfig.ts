import { Property } from 'src/entities/property.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: '',
  type: 'postgres',
  port: 3306,
  entities: [Property],
  synchronize: true,
};
