import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty({ required: false })
  username?: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  password?: string;
}

export class UserBalanceDto {
  @ApiProperty()
  balance: number;
}