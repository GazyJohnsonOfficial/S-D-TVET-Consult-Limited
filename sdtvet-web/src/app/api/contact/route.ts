import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, institution, email, phone, service, message } = body;

    // Server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // In a production environment with an email provider like Resend or SendGrid:
    // await resend.emails.send({
    //   from: 'inquiries@sdtvetconsult.com',
    //   to: 'info@sdtvetconsult.com',
    //   subject: `New CTVET Consultation Inquiry from ${name}`,
    //   text: `Name: ${name}\nInstitution: ${institution}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    // });

    console.log("Accreditation Consultation Inquiry Received:", {
      name,
      institution: institution || "N/A",
      email,
      phone,
      service,
      message: message || "No message provided",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation inquiry has been registered successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}

