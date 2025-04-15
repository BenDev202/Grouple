"use client"

import { combineReducers, configureStore} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"

const rootReducer = combineReducers ({
    // add all your reducers here
})

export const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefualtMiddleware) =>
        getDefualtMiddleware({
            serializableCheck: false
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector