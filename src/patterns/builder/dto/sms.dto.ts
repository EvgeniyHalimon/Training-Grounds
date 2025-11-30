import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SmsNotificationDto {
  @IsNotEmpty()
  @ApiProperty()
  recipient: string;

  @IsNotEmpty()
  @ApiProperty()
  message: string;
}
