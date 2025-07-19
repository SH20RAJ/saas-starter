import { getDB, schema } from '@/db';
import { eq } from 'drizzle-orm';

export async function createUser(name: string, email: string) {
  const db = getDB();
  const result = await db.insert(schema.users).values({
    name,
    email,
  }).returning();
  return result[0];
}

export async function getUserByEmail(email: string) {
  const db = getDB();
  const result = await db.select().from(schema.users).where(eq(schema.users.email, email));
  return result[0];
}

export async function getAllUsers() {
  const db = getDB();
  return await db.select().from(schema.users);
}

export async function createPost(title: string, content: string, authorId: number, published = false) {
  const db = getDB();
  const result = await db.insert(schema.posts).values({
    title,
    content,
    authorId,
    published,
  }).returning();
  return result[0];
}

export async function getPostsByAuthor(authorId: number) {
  const db = getDB();
  return await db.select().from(schema.posts).where(eq(schema.posts.authorId, authorId));
}

export async function getAllPosts() {
  const db = getDB();
  return await db.select().from(schema.posts);
}