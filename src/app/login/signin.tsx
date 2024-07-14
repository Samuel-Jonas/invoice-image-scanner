"use client";

import { useForm } from 'react-hook-form';
import { useTransition } from "react";
import { handleGoogleSignIn } from "@/src/lib/auth/googleSiginServerAction";


export default function SignInPage() {
    const { register, formState: { errors } } = useForm();
    const [isPending] = useTransition();

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
                    <h2 className="text-2xl font-bold text-center">Entrar na conta</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                disabled={isPending}
                                required
                                {...register('email', { required: 'Email is required' })}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.root?.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                {...register('password', { required: 'Password is required' })}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.root?.message}</p>}
                        </div>
                        <div>
                            <button
                                onClick={() => {alert("Use o google para entrar!")}}
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                        <button onClick={() => handleGoogleSignIn()}  className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.204c0-.638-.057-1.251-.164-1.84H9v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.566 2.684-3.874 2.684-6.615Z" fill="#4285F4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.259c-.805.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.462.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/></svg>
                            <span>Use o Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}