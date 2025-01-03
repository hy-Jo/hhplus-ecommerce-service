import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto, UserBalanceDto, UserDto } from 'src/dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  @Get('/:id')
  @ApiOperation({ summary: '사용자 정보 조회' })
  @ApiResponse({
    status: 200,
    description: '사용자 정보를 반환합니다.',
    type: UserDto
  })
  async getUserById(@Param('id') id: number) {
    // Implementation
  }

  @Get('/:id/balance')
  @ApiOperation({ summary: '사용자 잔액 조회' })
  @ApiResponse({
    status: 200,
    description: '사용자의 현재 잔액을 반환합니다.',
    type: UserBalanceDto
  })
  async getUserBalance(@Param('id') id: number) {
    // Implementation
  }

  @Post()
  @ApiOperation({ summary: '사용자 생성' })
  @ApiResponse({
    status: 201,
    description: '새로운 사용자를 생성합니다.',
    type: UserDto
  })
  async createUser(@Body() createUserDto: CreateUserDto) {
    // Implementation
  }

  @Put('/:id')
  @ApiOperation({ summary: '사용자 정보 수정' })
  @ApiResponse({
    status: 200,
    description: '사용자 정보를 수정합니다.',
    type: UserDto
  })
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    // Implementation
  }
}