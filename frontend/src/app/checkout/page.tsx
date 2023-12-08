'use client'
import {useCheckout} from "@/CheckoutProvider/CheckoutProvider";
import {useRouter} from "next/navigation";
import Link from "next/link";
import React from "react";

type CheckoutPageProps = {
    searchParams: {
        id: string | undefined
    }
}

function CheckoutPage({searchParams}: CheckoutPageProps) {
    const {identifier, newCheckout} = useCheckout();
    const router = useRouter();

    const link = `/${identifier}`;
    console.log(identifier);

    React.useEffect(() => {
        const {id} = searchParams
        if (id !== undefined && id !== identifier) {
            newCheckout(id);
        }

        if (identifier === null)
            router.replace('/')
    }, [identifier])

    return (
        <div>
            <h1 className={'headline'}>
                <span aria-hidden={"true"}>✅</span>
                Secreted created!
            </h1>
            <p>Access it with this {typeof identifier === 'string' && <Link href={link}>link</Link>}</p>
        </div>
    )
}

export default CheckoutPage;