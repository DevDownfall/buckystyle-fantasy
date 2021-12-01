import 'path'
require('dotenv').config();
const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

export function getMessage(emailParams) {
  return {
    to: emailParams.toEmail,
    from: 'devdownfall@outlook.com',
    subject: 'We have got your order, you will receive it soon',
    text: `Hey ${emailParams.name}, we have received your order ${emailParams.orderNr}. We will ship it soon`,
    html: getOrderConfirmationEmailHtml(emailParams.name, emailParams.orderNr),
  };
}

export async function sendOrderConfirmation(emailParams) {
  try {
    await sendGridMail.send(getMessage(emailParams));
    return  { message: `Order confirmation email sent successfully for orderNr: ${emailParams.orderNr}`};
  } catch (error) {
    const message = `Error sending order confirmation email or orderNr: ${emailParams.orderNr}`;
    console.error(message);
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
    return {message};
  }
}

export function getOrderConfirmationEmailHtml(customerName, orderNr) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title></title>
      <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]-->
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
      <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  
  <body>
      <div class="es-wrapper-color">
          <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
              <tbody>
                  <tr>
                      <td class="esd-email-paddings" valign="top">
                          <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center" esd-custom-block-id="388982">
                                          <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p20" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-infoblock">
                                                                                          <p><a target="_blank">View online version</a></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center" esd-custom-block-id="388981">
                                          <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p20" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-image es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://khxgag.stripocdn.email/content/guids/CABINET_887f48b6a2f22ad4fb67bc2a58c0956b/images/93351617889024778.png" alt="Logo" style="display: block; font-size: 12px;" width="200" title="Logo"></a></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center">
                                          <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p15t es-p20r es-p20l" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://khxgag.stripocdn.email/content/guids/CABINET_54100624d621728c49155116bef5e07d/images/84141618400759579.png" alt style="display: block;" width="100"></a></td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-p10b es-m-txt-c">
                                                                                          <h1 style="font-size: 46px; line-height: 100%;">Order confirmation</h1>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center">
                                          <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p20" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-m-txt-c">
                                                                                          <h2>Order&nbsp;<a target="_blank">#65000500</a></h2>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                                          <p>Apr 17,&nbsp;2021</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-p5t es-p15b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                                          <p>This email is to confirm&nbsp;your order. We will send you another email as soon as it ships.</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-button"><span class="es-button-border" style="border-radius: 6px; border-color: #5c68e2; border-width: 2px; background: #5c68e2;"><a href class="es-button" target="_blank" style="border-left-width: 30px; border-right-width: 30px; border-radius: 6px;">TRACK ORDER STATUS</a></span></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="esd-structure es-p10t es-p20r es-p20l" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="560" class="es-m-p0r esd-container-frame" align="center">
                                                                          <table cellpadding="0" cellspacing="0" width="100%" style="border-top: 2px solid #efefef; border-bottom: 2px solid #efefef;">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="right" class="esd-block-text es-m-txt-r es-p10t es-p20b">
                                                                                          <p>Subtotal:&nbsp;<strong>$40.00</strong><br>Shipping:&nbsp;<strong>$0.00</strong><br>Tax:&nbsp;<strong>$10.00</strong><br>Total:&nbsp;<strong>$50.00</strong></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                          <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="280" valign="top"><![endif]-->
                                                          <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="280" class="es-m-p0r esd-container-frame es-m-p20b" align="center">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="left" class="esd-block-text">
                                                                                          <p>Customer: <strong>sarah_powell@domain.com</strong></p>
                                                                                          <p>Order number:&nbsp;<strong>#65000500</strong></p>
                                                                                          <p>Invoice date:&nbsp;<strong>Apr 17, 2021</strong></p>
                                                                                          <p>Payment method:&nbsp;<strong>PayPal</strong></p>
                                                                                          <p>Currency:&nbsp;<strong>USD</strong></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td><td width="0"></td><td width="280" valign="top"><![endif]-->
                                                          <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="280" class="es-m-p0r esd-container-frame" align="center">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="left" class="esd-block-text es-m-txt-l">
                                                                                          <p>Shipping Method: <strong>UPS - Ground</strong></p>
                                                                                          <p>Shipping address:</p>
                                                                                          <p><strong>Sarah Powell,<br>600 Montgomery St,<br>San Francisco, CA 94111</strong></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td></tr></table><![endif]-->
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="esd-structure es-p15t es-p10b es-p20r es-p20l" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="560" align="left" class="esd-container-frame">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-p10t es-p10b">
                                                                                          <p>Got a question?&nbsp;Email us at&nbsp;<a target="_blank" href="mailto:">support@</a><a target="_blank" href="mailto:">stylecasual</a><a target="_blank" href="mailto:">.com</a>&nbsp;or give us a call at&nbsp;<a target="_blank" href="tel:">+000 123 456</a>.</p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center" esd-custom-block-id="388980">
                                          <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="600" class="esd-container-frame" align="left">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-social es-p15t es-p15b" style="font-size:0">
                                                                                          <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td align="center" valign="top" class="es-p40r"><a target="_blank" href><img title="Facebook" src="https://khxgag.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32"></a></td>
                                                                                                      <td align="center" valign="top" class="es-p40r"><a target="_blank" href><img title="Twitter" src="https://khxgag.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="32"></a></td>
                                                                                                      <td align="center" valign="top" class="es-p40r"><a target="_blank" href><img title="Instagram" src="https://khxgag.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32"></a></td>
                                                                                                      <td align="center" valign="top"><a target="_blank" href><img title="Youtube" src="https://khxgag.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32"></a></td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-p35b">
                                                                                          <p>Style Casual&nbsp;© 2021 Style Casual, Inc. All Rights Reserved.</p>
                                                                                          <p>4562 Hazy Panda Limits, Chair Crossing, Kentucky, US, 607898</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-menu" esd-tmp-menu-padding="5|5" esd-tmp-divider="1|solid|#cccccc" esd-tmp-menu-color="#999999">
                                                                                          <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                                                              <tbody>
                                                                                                  <tr class="links">
                                                                                                      <td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top: 5px; padding-bottom: 5px;"><a target="_blank" href="https://" style="color: #999999;">Visit Us </a></td>
                                                                                                      <td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top: 5px; padding-bottom: 5px; border-left: 1px solid #cccccc;"><a target="_blank" href="https://" style="color: #999999;">Privacy Policy</a></td>
                                                                                                      <td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top: 5px; padding-bottom: 5px; border-left: 1px solid #cccccc;"><a target="_blank" href="https://" style="color: #999999;">Terms of Use</a></td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center" esd-custom-block-id="388983">
                                          <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p20" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-infoblock">
                                                                                          <p><a target="_blank"></a>No longer want to receive these emails?&nbsp;<a href target="_blank">Unsubscribe</a>.<a target="_blank"></a></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </body>
  
  </html>`
}



