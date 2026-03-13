import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body || '{}').payload;
    const { data } = payload;

    // Extract variables from environment
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const notificationEmails = process.env.NOTIFICATION_EMAILS;

    if (!botToken || !chatId) {
      console.error('Telegram configuration missing');
      return { statusCode: 500, body: 'Configuration error' };
    }

    // Format message for Telegram
    const message = `
🚀 *Новая заявка с лендинга!*

*Лендинг:* ${data.landing_slug || 'Не указан'}
*Компания:* ${data.company || 'Не указана'}
*Имя:* ${data.name || 'Не указано'}
*Email:* ${data.email || 'Не указан'}
*Телефон:* ${data.phone || 'Не указан'}

*Сообщение:*
${data.message || 'Без сообщения'}

---
*UTM Source:* ${data.utm_source || 'direct'}
*UTM Medium:* ${data.utm_medium || 'none'}
*UTM Campaign:* ${data.utm_campaign || 'none'}
*UTM Content:* ${data.utm_content || 'none'}
    `.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    // Note: Email notifications are handled by Netlify's built-in form notifications
    // but we can also trigger custom logic here if needed.
    // For now, we rely on Netlify's native email notification system for the provided emails.

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notification sent successfully' }),
    };
  } catch (error) {
    console.error('Error processing submission:', error);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};

export { handler };
