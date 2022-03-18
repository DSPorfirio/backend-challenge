import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getRepository, Repository } from 'typeorm';
import { Places } from '../../entity/places.entity';
import { placesInsertDto, placesUpdateDto } from './dto/places.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Places)
    private placesRepository: Repository<Places>,
  ) {}

  async insert(params: placesInsertDto) {
    async function verifyCountryAndLocal(params): Promise<number> {
      const countPlaces = await getConnection()
        .getRepository(Places)
        .createQueryBuilder('places')
        .where('places.country = :country AND places.place = :place', {
          country: params.country,
          place: params.place,
        })
        .getCount();

      return countPlaces;
    }

    const countPlaces = await verifyCountryAndLocal(params);

    if (countPlaces == 0) {
      const { raw } = await this.placesRepository.insert(params);
      return { statusCode: HttpStatus.CREATED, message: raw[0] };
    } else {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'This place has already been registered',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(params: placesUpdateDto) {
    const { affected } = await this.placesRepository.update(params.id, params);
    return { statusCode: HttpStatus.OK, message: `Rows affected: ${affected}` };
  }

  async findOne(params) {
    try {
      const resultFindOne = await this.placesRepository.findOneOrFail(params.id);
      return { statusCode: HttpStatus.OK, message: resultFindOne };
    } catch (e) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: e.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    const places = await getRepository(Places)
      .createQueryBuilder('places')
      .orderBy(`to_date(places.meta,  'MM/YYYY')`, 'ASC')
      .getMany();

    return { statusCode: HttpStatus.OK, message: places };
  }
}
