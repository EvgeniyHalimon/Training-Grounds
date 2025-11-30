import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PushNotificationDto {
  @IsNotEmpty()
  @ApiProperty()
  recipient: string;

  @IsNotEmpty()
  @ApiProperty()
  message: string;
}
