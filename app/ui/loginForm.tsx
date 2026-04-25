'use client';

import { useState } from "react";
import Button from "./button";
import { Authentication } from "../lib/data";
import clsx from "clsx";
import { authType } from "../lib/definision";




export default function LoginForm({ className }: { className?: string }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authResult, setAuthResult] = useState<authType>()

    const login = (e: React.FormEvent) => {
        e.preventDefault();

        const result = Authentication({ email, password });
        setAuthResult(result)
        console.log(result)
    }

    return (
        <div className={className}>
            <form onSubmit={(e) => login(e)} className="w-[80%] h-fit space-y-15 p-10 bg-background rounded-lg">
                <div className="space-y-5">
                    <section>
                        <input
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-15 rounded-lg bg-secondry p-4"
                        />
                        {authResult?.error.email &&
                            <label className={clsx('text-red-400')}>{authResult.error.email}</label>}
                    </section>
                    <section>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-15 rounded-lg bg-secondry p-4"
                        />
                        {authResult?.error.password && <label className="text-red-400 text-lg">{authResult.error.password}</label>}
                    </section>
                </div>
                <div>
                    <Button type="submit" caption="Login" className="w-full h-15" />
                </div>
            </form>
        </div>
    )
}