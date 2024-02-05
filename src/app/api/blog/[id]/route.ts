import { NextResponse, NextRequest } from 'next/server';
import connect from '@/lib/db';
import blogSchema from '@/lib/db/schema/blog';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connect();
    const post = await blogSchema.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connect();
    await blogSchema.findByIdAndDelete(id);
    return new NextResponse('delete success', { status: 200 });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};
