export const notificationType = {
  email: 'email',
  sms: 'sms',
  push: 'push',
} as const;

type NotificationType =
  (typeof notificationType)[keyof typeof notificationType];

export type PriorityType = 'low' | 'normal' | 'high';

export interface Notification {
  recipient: string;
  message: string;
  type: NotificationType;
  priority?: PriorityType;
  subject?: string;
}

export abstract class NotificationBuilder {
  protected notification: Partial<Notification> = {};

  setRecipient(recipient: string): this {
    this.notification.recipient = recipient;
    return this;
  }

  setMessage(message: string): this {
    this.notification.message = message;
    return this;
  }

  setPriority(priority: PriorityType): this {
    this.notification.priority = priority;
    return this;
  }

  abstract setType(): this;

  build(): Notification {
    if (
      !this.notification.recipient ||
      !this.notification.message ||
      !this.notification.type
    ) {
      throw new Error('Notification is not complete');
    }
    return this.notification as Notification;
  }
}
