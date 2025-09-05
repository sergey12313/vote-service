import z from "zod/v4";

export const PostSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  content: z.string(),
  author_id: z.number().int().positive(),
  likes: z.number().int().nonnegative(),
  dislikes: z.number().int().nonnegative(),
  rating: z.number(), // при желании: .min(0).max(5)
  published_at: z.iso.datetime(),
  updated_at: z.iso.datetime(),
});

export const PostsResponseSchema = z.object({ posts: z.array(PostSchema) });

export type PostsResponse = z.infer<typeof PostsResponseSchema>;
export type Post = z.infer<typeof PostSchema>;
