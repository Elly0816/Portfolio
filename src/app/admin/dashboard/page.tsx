import { ReactNode } from "react";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ServerComponent from "@/app/(supabaseSessionComponents)/serverComponent";

export default async function Dashboard(): Promise<any | ReactNode> {
    const { data: auth, error } = await ServerComponent();
    const { session } = auth;

    if (session) {
        return <div>This is the dashboard</div>;
    } else {
        // redirect("/login");
        return <div>You are not logged in</div>;
    }

    // return (
    //     <div>
    //         {(data as any[]).map((item, index) => (
    //             <div key={index}>
    //                 {Object.keys(item).map((key) => (
    //                     <p key={key}>
    //                         {key}: {item[key]}
    //                     </p>
    //                 ))}
    //             </div>
    //         ))}
    //     </div>
    // );
}
