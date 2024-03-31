"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface NewIssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const { register, control, handleSubmit } = useForm<NewIssueForm>();
    const router = useRouter();
    return (
        <form
            className="max-w-xl space-y-3"
            onSubmit={handleSubmit((data) =>
                axios
                    .post("/api/issues", data)
                    .then(() => {
                        router.push("/issues");
                    })
                    .catch(() => {
                        alert("Failed to create issue!");
                    })
            )}
        >
            <TextField.Root
                placeholder="Title"
                {...register("title")}
            ></TextField.Root>
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <SimpleMDE placeholder="Description" {...field} />
                )}
            />
            <Button>Submit New Issue</Button>
        </form>
    );
};

export default NewIssuePage;
