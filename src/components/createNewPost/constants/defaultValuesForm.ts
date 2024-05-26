import { z } from "zod";
import { NewPostSchema } from "./NewPostSchema";

export const defaultValuesForm: z.infer<typeof NewPostSchema> = {
    title: '',
    description: '',
    img: '',
    link: '',
}
