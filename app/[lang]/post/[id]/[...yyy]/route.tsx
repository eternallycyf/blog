import { NextResponse, type NextRequest } from 'next/server';

interface Params {
  params: {
    id: string;
    yyy: string;
  };
}
export async function GET(request: NextRequest, { params }: Params) {
  return NextResponse.json({
    id: params.id,
    yyy: params.yyy,
  });
}
