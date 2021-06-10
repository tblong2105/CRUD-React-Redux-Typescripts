import { notification } from 'antd';
/**
 * Notification
 *
 * Version 1.0
 *
 * Date: 08-06-2021
 *
 * Copyright 
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 08-06-2021         LONGTB4           Create
 */

export function openNotification(status: string, message: string) {

  // If status is success
  if (status === "success") {
    notification.success({
      message: message,
    });

  // If status is error
  } else if (status === "error") {
    notification.error({
      message: message,
    });
  }
};