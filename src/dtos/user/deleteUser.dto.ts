import { z } from "zod";

export interface DeleteUserInputDTO {
  idToDel: string;
  token: string;
}

export interface DeleteUserOutputDTO {
  message: string;
}

export const DeleteUserSchema = z
  .object({
    idToDel: z.string().min(1),
    token: z.string().min(1),
  })
  .transform((data) => data as DeleteUserInputDTO);
