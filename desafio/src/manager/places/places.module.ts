import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Places } from 'src/entity/places.entity';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
  imports: [TypeOrmModule.forFeature([Places])],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
