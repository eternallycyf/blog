import { NextResponse, type NextRequest } from 'next/server';

const data: Record<string, any> = {
  1: {
    name: 'zs',
    age: 20,
  },
  2: {
    name: 'l4',
    age: 25,
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  return NextResponse.json(!id ? null : data[id]);
}
