import { NotificationBuilder, notificationType } from './notification.builder';

export class PushNotificationBuilder extends NotificationBuilder {
  setType(): this {
    this.notification.type = notificationType.push;
    return this;
  }
}
