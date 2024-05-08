import { CardHeader } from "@/components/ui/card"

interface CardHeaderProps{
    children : React.ReactNode
    className ?: string
}
export function CardHeaderContainer({children,className} : CardHeaderProps){
    return (
        <CardHeader className={`flex items-center ${className}`}>
            {children}
        </CardHeader>
    )
}