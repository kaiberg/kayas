'use client'
import CheckoutProvider from "@/CheckoutProvider/CheckoutProvider";

function Providers ({children} : {children: React.ReactNode}) {
    return (
        <CheckoutProvider>
            {children}
        </CheckoutProvider>
    )
}

export default Providers;