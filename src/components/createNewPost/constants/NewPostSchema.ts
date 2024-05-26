import { z } from 'zod';

export const NewPostSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    img: z.string(),
    link: z.string(),
})
