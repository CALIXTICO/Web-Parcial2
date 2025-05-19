import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteController } from './estudiante.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';

describe('EstudianteController', () => {
  let controller: EstudianteController;
  let service: EstudianteService;
  let repository: Repository<EstudianteEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudianteController],
      imports: [...TypeOrmTestingConfig()],
     providers: [EstudianteService],
    }).compile();

    service = module.get<EstudianteService>(EstudianteService);
    repository = module.get<Repository<EstudianteEntity>>(getRepositoryToken(EstudianteEntity));
    controller = module.get<EstudianteController>(EstudianteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
