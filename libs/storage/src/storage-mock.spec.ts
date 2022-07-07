import { Test } from "@nestjs/testing";
import { StorageModule, UserEntity } from "@uparm/storage";

describe('Заполнение dev.db тестовыми данными', () => {
  beforeAll(async () => {
    await Test
      .createTestingModule({
      imports: [StorageModule]
    })
      .compile();
  });

  describe('UserEntity', () => {
    it('Котов Кот', async () => {
      const cat = new UserEntity();
      cat.firstName = 'Кот';
      cat.lastName = 'Котович';
      cat.birthDate = new Date('07.07.2022');
      cat.phoneNumber = '88005553535';
      cat.isActive = true;
      cat.orderCount = 0;

      await UserEntity.save(cat);
    });

    it('Песов Пес', async () => {
      const dog = new UserEntity();
      dog.firstName = 'Пес';
      dog.lastName = 'Песов';
      dog.birthDate = new Date();
      dog.phoneNumber = 'НЕ_УКАЗАН';
      dog.isActive = true;
      dog.orderCount = 9999;

      await UserEntity.save(dog);
    });
  })
})
