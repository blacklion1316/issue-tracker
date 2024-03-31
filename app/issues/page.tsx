import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
function IssuePage() {
    return (
        <div>
            <h1>Issue Page</h1>
            <Link href="/issues/new">
                <Button>Click me</Button>
            </Link>
        </div>
    );
}

export default IssuePage;
