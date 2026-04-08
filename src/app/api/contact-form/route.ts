import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        console.log('=== New Contact Form Submission ===');
        console.log(JSON.stringify(body, null, 2));

        return NextResponse.json(
            { success: true, message: 'Contact form submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process contact form' },
            { status: 500 }
        );
    }
}
