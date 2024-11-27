import { Property } from 'src/entities/property.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://realEstateDB_owner:bRGx5hj8BQtE@ep-wild-bird-a5g3v35j.us-east-2.aws.neon.tech/realEstateDB?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [Property],
  synchronize: true,
};
