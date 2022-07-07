import { UserController } from "./user.controller";
import { UserService } from "@uparm/user/server-module";
import { StorageModule, UserEntity } from "@uparm/storage";
import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApiResponseToGet, UserInterface } from "@uparm/common/interfaces";

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      imports: [
        StorageModule,
        TypeOrmModule.forFeature([UserEntity])
      ],
      controllers: [UserController],
      providers: [
        UserService,
        { provide: UserEntity, useFactory: jest.fn() },
      ],
    }).compile();

    userController = app.get<UserController>(UserController);
    userService = app.get<UserService>(UserService);
  });

  describe('getAll', () => {
    it('Должен вызваться метод сервиса', async () => {
      const entity = new UserEntity();
      entity.id = 0;
      entity.firstName = 'Имя';
      entity.lastName = '';
      entity.birthDate = new Date();
      entity.phoneNumber = '';
      entity.registrationDate = new Date();
      entity.orderCount = 0;
      entity.isActive = true;

      const result: ApiResponseToGet<UserInterface[]> = {
        message: 'Список всех пользователей',
        timestamp: new Date().getTime(),
        result: [entity],
      }

      const jestFn = jest.spyOn(userService, 'getAllUsers').mockResolvedValue([entity]);

      expect(await userController.getAllUsers()).toStrictEqual(result);
      expect(jestFn).toBeCalled();
    });
  });


})
