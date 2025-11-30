import { NotificationBuilder, notificationType } from './notification.builder';

export class EmailNotificationBuilder extends NotificationBuilder {
  setType(): this {
    this.notification.type = notificationType.email;
    return this;
  }

  setSubject(subject: string): this {
    this.notification.subject = subject;
    return this;
  }
}
