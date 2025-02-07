// /api/order/route.js
import { NextResponse } from "next/server";
const { google } = require("googleapis");

/**
 * Helper function to create a base64url-encoded email body.
 */
function makeBody(to, from, subject, message) {
  const emailLines = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "", // Blank line between headers and body
    message,
  ];
  return Buffer.from(emailLines.join("\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const {
      orderNumber,
      firstName,
      lastName,
      email,
      phone,
      items,
      total,
      paymentMethod,
      billingAddress,
      notes,
    } = bodyJSON;

    const customerName =
      firstName && lastName ? `${firstName} ${lastName}` : "Valued Customer";

    // Set up OAuth2 for Gmail
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Build HTML for the list of order items
    let itemsHtml = "";
    if (items && Array.isArray(items)) {
      itemsHtml = `<ul>`;
      items.forEach((item) => {
        // Use item.name if available; otherwise, fall back to product ID.
        const itemName = item.name ? item.name : `Product ID: ${item.product}`;
        itemsHtml += `<li>${itemName} — Quantity: ${item.quantity}, Price: €${item.price}</li>`;
      });
      itemsHtml += `</ul>`;
    }

    // Construct the email body for the admin (order notification)
    const adminEmailBody = makeBody(
      process.env.EMAIL_USER, // Recipient: admin email (set in your .env)
      process.env.EMAIL_USER, // Sender: same admin email
      `New Order Received: ${orderNumber}`,
      `
        <h2>New Order Received</h2>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <h3>Billing Address</h3>
        <p>
          ${billingAddress.street}<br/>
          ${billingAddress.city}, ${billingAddress.state}<br/>
          ${billingAddress.zip}<br/>
          ${billingAddress.country}
        </p>
        <h3>Order Items</h3>
        ${itemsHtml}
        <p><strong>Total Amount:</strong> €${total}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
      `
    );

    // Construct the email body for the client (order confirmation)
    const clientEmailBody = makeBody(
      email, // To: customer email
      process.env.EMAIL_USER, // From: admin email
      `Order Confirmation: ${orderNumber}`,
      `
        <h2>Thank you for your order, ${customerName}!</h2>
        <p>Your order has been received and is being processed. Below are your order details:</p>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <h3>Billing Address</h3>
        <p>
          ${billingAddress.street}<br/>
          ${billingAddress.city}, ${billingAddress.state}<br/>
          ${billingAddress.zip}<br/>
          ${billingAddress.country}
        </p>
        <h3>Order Items</h3>
        ${itemsHtml}
        <p><strong>Total Amount:</strong> €${total}</p>
        <p>We will notify you once your order has been shipped.</p>
        <p>Best regards,<br/>Our Team</p>
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });

    return NextResponse.json({ message: "Order email sent successfully." });
  } catch (error) {
    console.error("Error sending order email:", error.message);
    return NextResponse.json(
      { message: "Failed to send order email.", error: error.message },
      { status: 500 }
    );
  }
}
