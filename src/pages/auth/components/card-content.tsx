import { CardContent } from "@/components/ui/card"

interface CardContentProps{
    children : React.ReactNode
    className ?: string
}
export function CardContentContainer({children,className} : CardContentProps){
    return (
        <CardContent className={`flex flex-col gap-8 ${className}`}>
            {children}
        </CardContent>
    )
}