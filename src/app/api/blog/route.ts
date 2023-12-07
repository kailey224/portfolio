import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import blogSchema from '@/lib/db/schema/blog';

export const GET = async () => {
  try {
    await connect();
    const blog = await blogSchema.find();
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};

export const POST = async () => {};
