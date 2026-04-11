import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        console.log('=== Reservation Step 1 Saved ===');
        console.log(JSON.stringify(body, null, 2));

        return NextResponse.json(
            { success: true, message: 'Step 1 data saved' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error saving step 1:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to save step 1' },
            { status: 500 }
        );
    }
}
