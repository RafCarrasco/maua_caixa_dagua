import { Card } from "@/components/ui/card";

interface CardContainerProps{
    children : React.ReactNode
    className ?: string
}
export function CardContainer({children, className} : CardContainerProps){
    return (
        <Card className={`shadow-ring flex h-[31.75rem] w-[31.25rem] flex-col gap-12 px-4 rounded-2xl shadow-lg border-0 ${className}`}>
            {children}
        </Card>
    )
}