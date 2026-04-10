import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { firstName, lastName, email, subject, message } = await req.json()

  if (!email || !message) {
    return NextResponse.json({ error: 'Email and message required' }, { status: 400 })
  }

  try {
    // Notify the brand
    await resend.emails.send({
      from: 'Above All 777 Contact Form <hello@aboveall777.com>',
      to: process.env.RESEND_CONTACT_EMAIL || 'hello@aboveall777.com',
      subject: `[Contact] ${subject} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <div style="background:#4BBDB5;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
            <p style="color:white;font-size:24px;font-weight:bold;margin:0;">New Contact Form Submission</p>
          </div>
          <div style="background:#F5FAFA;padding:32px;border-radius:0 0 12px 12px;border:1px solid #D4F2F0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:8px 0;border-bottom:1px solid #D4F2F0;">
                <strong style="color:#2A9E97;">Name:</strong>
                <span style="margin-left:8px;">${firstName} ${lastName}</span>
              </td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #D4F2F0;">
                <strong style="color:#2A9E97;">Email:</strong>
                <span style="margin-left:8px;">${email}</span>
              </td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #D4F2F0;">
                <strong style="color:#2A9E97;">Subject:</strong>
                <span style="margin-left:8px;text-transform:capitalize;">${subject}</span>
              </td></tr>
              <tr><td style="padding:16px 0;">
                <strong style="color:#2A9E97;display:block;margin-bottom:8px;">Message:</strong>
                <p style="color:#2A2A2A;line-height:1.6;white-space:pre-wrap;">${message}</p>
              </td></tr>
            </table>
          </div>
        </div>
      `,
    })

    // Send confirmation to sender
    await resend.emails.send({
      from: 'Above All 777 <hello@aboveall777.com>',
      to: email,
      subject: 'Got your message — we\'ll be back soon. 🙏',
      html: `
        <!DOCTYPE html>
        <html>
        <body style="background:#F5FAFA;margin:0;padding:0;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td align="center" style="padding:40px 20px;">
              <table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;max-width:560px;">
                <tr><td style="background:linear-gradient(135deg,#4BBDB5,#2A9E97);padding:40px;text-align:center;">
                  <p style="font-size:48px;margin:0;color:#FFFFFF;font-weight:bold;">777</p>
                  <p style="color:#D4F2F0;font-size:13px;margin:8px 0 0;letter-spacing:3px;text-transform:uppercase;">ABOVE ALL 777</p>
                </td></tr>
                <tr><td style="background:#D4A83A;height:3px;"></td></tr>
                <tr><td style="padding:40px;">
                  <p style="font-size:22px;color:#2A2A2A;margin:0 0 16px;font-weight:bold;">Hey ${firstName},</p>
                  <p style="font-size:16px;color:#2A2A2A;line-height:1.7;margin:0 0 16px;">
                    We got your message and we'll get back to you within 1-2 business days.
                  </p>
                  <p style="font-size:16px;color:#2A2A2A;line-height:1.7;margin:0 0 24px;">
                    Above all — thank you for reaching out. Every message matters.
                  </p>
                  <p style="font-size:16px;color:#2A2A2A;margin:0 0 4px;">With faith + love,</p>
                  <p style="font-size:20px;color:#4BBDB5;font-style:italic;margin:0;">The Above All 777 Team</p>
                </td></tr>
                <tr><td style="background:#2A2A2A;padding:24px;text-align:center;">
                  <p style="color:#4BBDB5;font-size:13px;font-weight:bold;margin:0 0 6px;letter-spacing:2px;">ABOVE ALL 777</p>
                  <p style="color:#888;font-size:11px;margin:0;">aboveall777.com · hello@aboveall777.com</p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
