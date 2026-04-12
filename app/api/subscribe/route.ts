import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email, firstName } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  try {
    // Add to audience if configured
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email,
          firstName: firstName || '',
          audienceId: process.env.RESEND_AUDIENCE_ID,
        })
      } catch (contactError) {
        // Continue even if contact creation fails (might be duplicate)
        console.warn('Contact creation warning:', contactError)
      }
    }

    // Send welcome email
    await resend.emails.send({
      from: 'Tiffany at Above All 777 <tiffany@aboveall777.com>',
      to: email,
      subject: "You're in the 777. Welcome. 🙏",
      html: getWelcomeEmailHTML(firstName),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}

function getWelcomeEmailHTML(firstName?: string): string {
  const name = firstName || 'Friend'
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="background:#F5FAFA;margin:0;padding:0;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td align="center" style="padding:40px 20px;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;max-width:600px;">
            <tr><td style="background:linear-gradient(135deg,#4BBDB5,#2A9E97);padding:48px;text-align:center;">
              <p style="font-size:72px;margin:0;color:#FFFFFF;font-weight:bold;letter-spacing:-3px;line-height:1;">777</p>
              <p style="color:#D4F2F0;font-size:14px;margin:10px 0 0;letter-spacing:4px;text-transform:uppercase;">ABOVE ALL 777</p>
            </td></tr>
            <tr><td style="background:#D4A83A;height:3px;"></td></tr>
            <tr><td style="padding:48px 40px;">
              <p style="font-size:28px;color:#2A2A2A;margin:0 0 24px;font-weight:bold;">You're in, ${name}. 🙏</p>
              <p style="font-size:16px;color:#2A2A2A;line-height:1.7;margin:0 0 20px;">
                I'm Tiffany. I'm 14, and I built Above All 777 because I believe faith and sport belong together.
              </p>
              <p style="font-size:16px;color:#2A2A2A;line-height:1.7;margin:0 0 20px;">
                You just joined the 777 — the founding community of girls and women who play for something greater.
              </p>
              <p style="font-size:16px;color:#2A2A2A;line-height:1.7;margin:0 0 32px;">
                Here's what that means: you'll get first access to every drop, early pricing, and honest notes from me about faith, life, and sport.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5FAFA;border-left:4px solid #D4A83A;border-radius:0 8px 8px 0;margin:0 0 32px;">
                <tr><td style="padding:20px 24px;">
                  <p style="font-size:15px;color:#2A9E97;font-style:italic;margin:0;">"Seek first the Kingdom of God, and all these things shall be added to you."</p>
                  <p style="font-size:12px;color:#D4A83A;margin:8px 0 0;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Matthew 6:33</p>
                </td></tr>
              </table>
              <p style="font-size:16px;color:#2A2A2A;line-height:1.7;margin:0 0 8px;">Above all — I'm grateful you're here.</p>
              <p style="font-size:16px;color:#2A2A2A;margin:0 0 4px;">With faith + love,</p>
              <p style="font-size:24px;color:#4BBDB5;font-style:italic;margin:0;">Tiffany</p>
              <p style="font-size:12px;color:#999;margin:6px 0 0;">Tiffany · Founder, Above All 777 ✦</p>
            </td></tr>
            <tr><td style="background:#2A2A2A;padding:32px 40px;text-align:center;">
              <p style="color:#4BBDB5;font-size:14px;font-weight:bold;margin:0 0 8px;letter-spacing:3px;">ABOVE ALL 777</p>
              <p style="color:#888;font-size:12px;margin:0 0 16px;">aboveall777.com</p>
              <p style="margin:0 0 16px;">
                <a href="https://instagram.com/aboveall777" style="color:#4BBDB5;text-decoration:none;margin:0 10px;font-size:13px;">Instagram</a>
                <a href="https://tiktok.com/@aboveall777" style="color:#4BBDB5;text-decoration:none;margin:0 10px;font-size:13px;">TikTok</a>
                <a href="https://pinterest.com/aboveall777" style="color:#4BBDB5;text-decoration:none;margin:0 10px;font-size:13px;">Pinterest</a>
              </p>
              <p style="color:#555;font-size:11px;margin:0;">© 2026 Above All 777. Built by faith, launched at 14.</p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `
}
