'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/handlers/actions';
import { IconArrowRight, IconAt, IconExclamationCircle, IconKey } from '@tabler/icons-react';

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined
    );

    return (
        <form action={formAction} className='space-y-3'>
            <div className='flex-1 rounded-lg bg-grey-50 px-6 pb-4 pt-8'>
                <h1 className={`mb-3 text-2x1`}>
                    Por favor faça o login para continuar.
                </h1>
                <div className='w-full'>
                    <div>
                        <label 
                            className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className='relative'>
                            <input 
                                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                                type="email" 
                                id='email'
                                name='email'
                                placeholder='Digite o email'
                                required
                            />
                            <IconAt className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'/>
                        </div>                                        
                    </div>
                    <div className='mt-4'>
                        <label 
                            className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                            htmlFor="password"
                        >
                            Senha
                        </label>
                        <div className='relative'>
                            <input 
                                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                                type="password"
                                id='password' 
                                name='password'
                                placeholder='Digite a senha'
                                required
                                minLength={6}
                            />
                            <IconKey className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'/>
                        </div>
                    </div>
                </div>  
                <button className='bg-blue-500 px-4 py-2 rounded-md w-full' aria-disabled={isPending}>
                    Entrar <IconArrowRight className='ml-auto h-5 w-5 text-gray-50'/>
                </button>
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <>
                            <IconExclamationCircle className='h-5 w-5 text-red-500'/>
                            <p className='text-sm text-red-500'>{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}