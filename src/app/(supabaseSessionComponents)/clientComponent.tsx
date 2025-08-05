"use client";

import {
    Session,
    SupabaseClient,
    createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface ClientComponentType {
    isAuth: Session | null | boolean | undefined;
    supabase: SupabaseClient<any, "public", any>;
    logout: () => Promise<void>;
    handleSignUpWithGoogle: () => Promise<void>;
}

export default function ClientComponent(): ClientComponentType {
    const [isAuth, setIsAuth] = useState<Session | null | boolean>();
    const router = useRouter();
    const [supabase, setSupabase] = useState<
        SupabaseClient<any, "public", any>
    >(createClientComponentClient());

    useEffect(() => {
        async function getAuth() {
            const { data, error } = await supabase.auth.getSession();

            if (data) {
                setIsAuth(data.session);
            } else if (error) {
                setIsAuth(false);
                console.warn(error);
            }
        }
        getAuth();
    }, [setIsAuth, supabase]);

    const logout = useCallback(async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.warn(error.message);
        } else {
            setIsAuth(false);
            router.push("/login");
        }
    }, [supabase, setIsAuth, router]);

    const handleSignUpWithGoogle = useCallback(async (): Promise<void> => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                    access_type: "offline",
                    prompt: "consent",
                },
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
        if (!error) {
            setIsAuth(true);
            router.push("/admin/dashboard");
        }
    }, [supabase, setIsAuth, router]);

    return { isAuth, supabase, logout, handleSignUpWithGoogle };
}
