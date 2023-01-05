import { CircleNotch } from "phosphor-react"

export function Loading() {
    return (
        <div className="w-6 h-6 flex items-center justify-center">
            <CircleNotch width="bold" className="w-4 h-4 overflow-hidden animate-spin" />
        </div>
    )
}