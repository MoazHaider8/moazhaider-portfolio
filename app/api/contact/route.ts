import { NextRequest, NextResponse } from "next/server";

// Rate limiting store (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 3) {
    return false; // Max 3 submissions per hour
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();

    // Honeypot check
    if (data.honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate required fields
    if (!data.name || !data.email || !data.service || !data.description) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email notification (using Resend, SendGrid, Nodemailer, etc.)
    // 2. Store in database (optional)
    // 3. Send confirmation email to user

    // Example with console log (replace with actual email service):
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      website: data.website,
      service: data.service,
      description: data.description,
      budget: data.budget,
      timestamp: new Date().toISOString(),
      ip,
    });

    // TODO: Integrate with email service
    // Example with Resend:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'contact@moazhaider.com',
      to: 'your@email.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Budget:</strong> ${data.budget || 'N/A'}</p>
        <p><strong>Description:</strong></p>
        <p>${data.description}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
