'use client'
import React from "react";
import useMounted from "@/hooks/useMounted";

type CheckoutInfo = { identifier: string | undefined | null, newCheckout: (identifier: string) => void }

const CheckoutContext = React.createContext<CheckoutInfo>(undefined);
const STORAGE_KEY = 'checkout_id';

function CheckoutProvider({children}: { children: React.ReactNode }) {
    const mounted = useMounted();
    const [checkout, setCheckout] = React.useState<string | undefined | null>(undefined)

    const newCheckout = React.useCallback((identifier: string) => {
        setCheckout(identifier);
        if (mounted)
            window.localStorage.setItem(STORAGE_KEY, identifier);
    }, [mounted]);

    const value = React.useMemo(() => ({
        identifier: checkout, newCheckout
    }), [checkout, newCheckout])

    React.useEffect(() => {
        const checkout = window.localStorage.getItem(STORAGE_KEY);
        setCheckout(checkout);
    }, [mounted])

    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    );
}


function useCheckout() {
    const context = React.useContext(CheckoutContext);

    if (context === undefined) {
        throw new Error('CheckoutContext used outside of context');
    }

    return context;
}

export {useCheckout, CheckoutInfo}
export default CheckoutProvider;