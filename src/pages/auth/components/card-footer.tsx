import { CardFooter } from "@/components/ui/card"

interface CardFooterProps{
    children : React.ReactNode
    className ?: string
}
export function CardFooterContainer({children,className} : CardFooterProps){
    return (
        <CardFooter className={`flex flex-1 flex-col items-center justify-between ${className}`}>
            {children}
        </CardFooter>
    )
}