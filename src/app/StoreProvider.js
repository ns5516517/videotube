'use client'
import { makeStore } from '@/store/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const StoreProvider = ({ children }) => {
    const storeRef = useRef(undefined)
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    return (
        <>
            <Provider store={storeRef.current.store}>
                <PersistGate loading={null} persistor={storeRef.current.persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </>
    )
}

export default StoreProvider;
