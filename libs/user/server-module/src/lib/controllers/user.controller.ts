import { Body, Controller, Get, NotFoundException, Post, Query } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { ApiResponseToPost, UserInterface } from "@uparm/common/interfaces";
import { ApiResponseToGet } from "@uparm/common/interfaces";
import { CreateUserDto } from "../dto/create-user.dto";

@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  /**
   * Метод описывающий конечную точку для получения всех
   * пользователей в базе данных
   *
   * @return ApiResponseToGet<UserInterface[]>>
   */
  @Get('/all')
  public async getAllUsers(): Promise<ApiResponseToGet<UserInterface[]>> {
    const usersList = await this.userService.getAllUsers();
    return {
      timestamp: new Date().getTime(),
      message: 'Список всех пользователей',
      result: usersList,
    };
  }

  /**
   * Получение данных пользователя по полному имени
   * @param fullName
   * @throws NotFoundException
   * @return ApiResponseToGet<UserInterface>
   */
  @Get()
  public async getUserByName(@Query('fullName') fullName: string): Promise<ApiResponseToGet<UserInterface>> {
    const user = await this.userService.getUserByName(fullName);
    if (!user) throw new NotFoundException('Пользователь с таким именем не найден');
    return {
      timestamp: new Date().getTime(),
      message: 'Данные пользователя ' + fullName,
      result: user
    };
  }

  /**
   * Создание нового пользователя. Данные пользователя содержатся в теле запроса, объекте data
   * @param createUserDto
   * @throws Error
   * @return ApiResponseToPost<number>
   */
  @Post()
  public async createNewUser(@Body('data') createUserDto: CreateUserDto): Promise<ApiResponseToPost<number>> {
    const id = await this.userService.createNewUser(createUserDto);
    if (!id) throw new Error('Не удалось создать пользователя');
    return {
      timestamp: new Date().getTime(),
      hash: '',
      message: `Пользователь ${createUserDto.firstName} ${createUserDto.lastName} добавлен`,
      result: id
    }
  }
}
