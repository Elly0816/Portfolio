import { ReactNode } from "react";
import ServerComponent from "../(supabaseSessionComponents)/serverComponent";
import { redirect } from "next/navigation";

export default async function Blog(): Promise<ReactNode | any> {
    const { data, error } = await ServerComponent();
    if (data.session) {
        console.log(data);
        return <div>Blog Page</div>;
    }
    console.log(error);
    return redirect("/login");
}
