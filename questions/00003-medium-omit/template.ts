type MyOmit<T, K extends keyof T > = { [key in OmitUnion<keyof T, K>]: T[key] }

type OmitUnion<U, T> = U extends T ? never : U
