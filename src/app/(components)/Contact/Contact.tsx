"use client";

import { ChangeEvent, Fragment, useRef, useState } from "react";
import classes from "./Contact.module.css";
import { Khand, Shrikhand } from "next/font/google";
import emailjs from "@emailjs/browser";
import isValidEmail from "@/app/(utilities)/Validators";
import {
    SERVICEKEY,
    PRIVATEKEY,
    PUBLICKEY,
    TEMPLATEKEY,
} from "@/app/(utilities)/EnvVariables";
import Image from "next/image";

const khandFont = Khand({
    weight: "300",
    style: "normal",
    subsets: ["latin"],
});

const shrik = Shrikhand({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

interface Template {
    from_name: string;
    message: string;
    reply_to?: string;
}

const Contact: React.FC = () => {
    const form = useRef(null);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<"success" | "failure" | undefined>(
        undefined
    );

    const canSubmit: boolean =
        name.length > 1 &&
        email.length > 1 &&
        message.length > 1 &&
        isValidEmail(email);

    async function handleSubmit(): Promise<void> {
        const toSend: Template = {
            from_name: name,
            message: `${message}\nFrom: ${email}`,
            reply_to: email,
        };
        emailjs
            .send(
                SERVICEKEY as string,
                TEMPLATEKEY as string,
                toSend as unknown as Record<string, unknown>,
                PUBLICKEY
            )
            .then((res) => {
                console.log(`Success! ${res.status}, ${res.text}`);
                setStatus("success");
                setTimeout(() => {
                    setStatus(undefined);
                }, 3000);
            })
            .catch((err) => {
                console.log(err);
                setStatus("failure");
                setTimeout(() => {
                    setStatus(undefined);
                }, 3000);
            });
    }

    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "message":
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <div
                className={`${shrik.className} md:text-6xl text-2xl flex flex-col justify-center items-center py-20 px-7`}
                id="contact"
            >
                <div>
                    <h3>Contact Me</h3>
                </div>
                {status && (
                    <div
                        className={`${khandFont.className} my-3 text-lg flex w-1/3 justify-center items-center`}
                    >
                        <Image
                            className="mx-3"
                            height={20}
                            width={20}
                            src={
                                status === "success"
                                    ? "/success.png"
                                    : "/failure.png"
                            }
                            alt={status === "success" ? "success" : "failure"}
                        />{" "}
                        <span>
                            {status === "success" ? "success" : "failure"}
                        </span>
                    </div>
                )}
                <div
                    className={`${khandFont.className} w-2/3 md:text-2xl text-sm py-10 flex flex-col justify-center items-center`}
                >
                    <form action="" ref={form} className={`w-full text-black`}>
                        <input
                            onChange={handleChange}
                            value={name}
                            className={`form-input px-4 py-3 rounded-full my-5 w-full`}
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                        <br />
                        <input
                            onChange={handleChange}
                            value={email}
                            className={`form-input px-4 py-3 rounded-full my-5 w-full`}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        {email.length > 1 && !isValidEmail(email) && (
                            <span className="text-red-600 text-base">
                                Invalid Email!
                            </span>
                        )}
                        <br />
                        <textarea
                            spellCheck
                            onChange={handleChange}
                            value={message}
                            className={`form-textarea px-4 py-3 rounded-lg my-5 w-full`}
                            name="message"
                            placeholder="Hi Elly, ..."
                        />
                        <br />
                    </form>
                    <button
                        type="button"
                        onClick={async () => {
                            setName("");
                            setEmail("");
                            setMessage("");
                            await handleSubmit();
                        }}
                        disabled={canSubmit ? false : true}
                        className={`${classes.submit} md:text-lg text-sm py-5 px-5 text-slate-500 bg-gray-100 rounded-full`}
                    >
                        Send
                    </button>
                </div>
            </div>
            <hr />
        </Fragment>
    );
};

export default Contact;
