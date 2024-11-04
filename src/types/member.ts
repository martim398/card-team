import { Role } from "@/types/role";

export type Member = {
    id: number;
    avatar: string;
    name: string;
    email: string;
    role: Role; 
}