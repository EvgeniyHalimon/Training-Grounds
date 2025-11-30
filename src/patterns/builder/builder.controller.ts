import { Body, Controller, Post } from '@nestjs/common';
import {
  EmailNotificationDto,
  PushNotificationDto,
  SmsNotificationDto,
} from './dto';
import {
  EmailNotificationBuilder,
  PushNotificationBuilder,
  SMSNotificationBuilder,
} from './builders';

@Controller('builder')
export class BuilderController {
  @Post('/sms')
  public getSmsBuilder(@Body() smsNotificationDto: SmsNotificationDto) {
    const sms = new SMSNotificationBuilder()
      .setType()
      .setMessage(smsNotificationDto.message)
      .setRecipient(smsNotificationDto.recipient)
      .build();
    console.log('🚀 ~ BuilderController ~ getSmsBuilder ~ sms:', sms);
    return sms;
  }

  @Post('/push')
  public getPushBuilder(@Body() pushNotificationDto: PushNotificationDto) {
    const push = new PushNotificationBuilder()
      .setRecipient(pushNotificationDto.recipient)
      .setMessage(pushNotificationDto.message)
      .setType()
      .build();
    console.log('🚀 ~ push:', push);
    return push;
  }

  @Post('/email')
  public getEmailBuilder(@Body() emailNotificationDto: EmailNotificationDto) {
    const email = new EmailNotificationBuilder()
      .setType()
      .setSubject(emailNotificationDto.subject)
      .setPriority(emailNotificationDto.priority)
      .setRecipient(emailNotificationDto.recipient)
      .setMessage(emailNotificationDto.message)
      .build();
    console.log('🚀 ~ BuilderController ~ getEmailBuilder ~ email:', email);
    return email;
  }
}
