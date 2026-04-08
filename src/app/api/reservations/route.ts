import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        console.log('=== New Reservation ===');
        console.log(JSON.stringify(body, null, 2));

        return NextResponse.json(
            { success: true, message: 'Reservation received successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error processing reservation:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process reservation' },
            { status: 500 }
        );
    }
}
