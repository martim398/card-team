"use client"

import { TeamArea } from "@/components/team/team-area";
import { ThemmeToggle } from "@/components/theme-toggle";

const Page = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-w-2xl w-full mx-auto">
                <ThemmeToggle />
                <TeamArea />
            </div>
        </div>
    );
}

export default Page;