import { NextRequest, NextResponse } from 'next/server';
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

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  try {
    await connect();
    await blogSchema.create(data);

    return new NextResponse('post update', {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};

export const PUT = async (request: NextRequest) => {
  const data = await request.json();
  try {
    await connect();
    await blogSchema.findOneAndReplace(
      { _id: data.id },
      {
        _id: data.newId,
        title: data.title,
        desc: data.desc,
        img: data.img,
        category: data.category,
        height: data.height,
        color: data.color,
      }
    );

    return new NextResponse('post update', {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};
