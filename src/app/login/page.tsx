"use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import ClientComponent from "../(supabaseSessionComponents)/clientComponent";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    // const supabase = createClientComponentClient<any>();
    const { isAuth, supabase, handleSignUpWithGoogle } = ClientComponent();

    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        router.refresh();
    };

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password,
        });
        router.refresh();
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    // const handleSignUpWithGoogle = async (): Promise<void> => {
    //     const { data, error } = await supabase.auth.signInWithOAuth({
    //         provider: "google",
    //         options: {
    //             queryParams: {
    //                 access_type: "offline",
    //                 prompt: "consent",
    //                 // redirect_uri: `${location.origin}/auth/callback`,
    //                 // redirect_uri:
    //                 //     process.env.NEXT_PUBLIC_SUPABASE_URL +
    //                 //     "/auth/v1/callback",
    //                 // redirect_uri: `${location.origin}/admin/dashboard`,
    //             },
    //             // redirectTo: `${location.origin}/admin/dashboard`,
    //             // redirectTo: `http://localhost:3000/admin/dashboard`,
    //             // emailRedirectTo: `http://localhost:3000/admin/dashboard`,
    //         },
    //     });
    //     router.push("/admin/dashboard");

    //     // if (data) {
    //     //     router.push("/admin/dashboard");
    //     // }
    //     // else {
    //     //     router
    //     // }

    //     // supabase.auth
    //     //     .signInWithOAuth({
    //     //         provider: "google",
    //     //         options: {
    //     //             queryParams: {
    //     //                 access_type: "offline",
    //     //                 prompt: "consent",
    //     //             },
    //     //         },
    //     //     })
    //     //     .then(({ data, error }) => {
    //     //         if (data) {
    //     //             console.log(data);
    //     //             redirect("/admin/dashboard");
    //     //         } else {
    //     //             console.log(error);
    //     //         }
    //     //     });
    // };

    return (
        <>
            <input
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                placeholder="password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={handleSignUpWithGoogle}>
                Sign up with Google
            </button>
            <button onClick={handleSignUp}>Sign up</button>
            <button onClick={handleSignIn}>Sign in</button>
            <button onClick={handleSignOut}>Sign out</button>
        </>
    );
}
