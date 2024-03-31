import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/Validations/validationSchemas";
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
