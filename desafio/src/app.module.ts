import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './manager/places/places.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PlacesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
