import { NextRequest } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import prisma from "@/prisma/client";
const createIssueSchema = z.object({
    title: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) {
        return new Response(JSON.stringify(validation.error), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const { title, description } = validation.data;

    const newIssue = await prisma.issue.create({
        data: {
            title,
            description,
        },
    });

    return new Response(JSON.stringify(newIssue), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
