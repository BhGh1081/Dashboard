'use client';

export default function Error({error, reset} : {error: Error, reset: () => void}) {


    return(
        <div className="flex flex-col items-center justify-center text-red-500">
            <p>Something went wrong</p>
            <p>{error.message}</p>
        </div>
    )

}