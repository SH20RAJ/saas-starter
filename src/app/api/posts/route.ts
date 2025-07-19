import { NextRequest, NextResponse } from 'next/server';
import { createPost, getAllPosts } from '@/lib/db-utils';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, content, authorId, published } = await request.json();
    
    if (!title || !authorId) {
      return NextResponse.json({ error: 'Title and authorId are required' }, { status: 400 });
    }

    const post = await createPost(title, content, authorId, published);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}