import { NotificationBuilder, notificationType } from './notification.builder';

export class SMSNotificationBuilder extends NotificationBuilder {
  setType(): this {
    this.notification.type = notificationType.sms;
    return this;
  }
}
