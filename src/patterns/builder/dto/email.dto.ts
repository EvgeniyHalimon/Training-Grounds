import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { PriorityType } from '../builders';

export class EmailNotificationDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  recipient: string;

  @IsNotEmpty()
  @ApiProperty()
  message: string;

  @IsNotEmpty()
  @ApiProperty()
  priority: PriorityType;

  @IsNotEmpty()
  @ApiProperty()
  subject: string;
}
