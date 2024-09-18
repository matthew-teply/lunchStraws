import { useState } from 'react'

const COPY_TIMEOUT = 2000;

export const useClipBoard = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copy = (text: string) => {
        navigator.clipboard.writeText(text);

        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, COPY_TIMEOUT);
    }

    return {
        isCopied,
        copy,
    }
}