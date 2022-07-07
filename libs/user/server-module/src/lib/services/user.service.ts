import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "@uparm/storage";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  /**
   * Поиск всех пользователей в БД
   *
   * @return UserEntity[]
   */
  public async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  /**
   * Найти пользователя по имени:
   * 1. На вход функции подается полное имя пользователя
   * 2. Функция возвращает только пользователей с признаком isActive = true
   * 3. Если найдено несколько пользователей с одинаковым именем - вернуть только того, кто зарегистрировался раньше
   * 4. Если по даным пользователя результатов не найдено - вернуть null
   * @param fullName
   * @return UserEntity|null
   */
  public async getUserByName(fullName: string): Promise<UserEntity|null> {
    // Ваш код тут
    throw new NotImplementedException();
  }

  /**
   * Создать пользователя в базе данных
   * 1. На вход подается Data Transfer Object со следующими обязательными параметрами: фамилия, имя, дата рождения
   * 2. По умолчанию задаются поля: id и registrationDate, их менять не нужно
   * 3. Поля по умолчанию:
   *   - phoneNumber: 'НЕ_УКАЗАНО'
   *   - orderCount: 0
   *   - isActive: true
   * @param createUserDto
   * @return number|null
   */
  public async createNewUser(createUserDto: CreateUserDto): Promise<number|null> {
    // Ваш код тут
    throw new NotImplementedException();
  }
}
