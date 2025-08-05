import {
    Session,
    SupabaseClient,
    createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export interface ServerType {
    data: { session: Session | null };
    error: any;
    supabase: SupabaseClient<any, "public", any>;
}

export default async function ServerComponent(): Promise<ServerType> {
    const supabase = createServerComponentClient({ cookies });

    const { data, error } = await supabase.auth.getSession();

    return { data, error, supabase };
}
