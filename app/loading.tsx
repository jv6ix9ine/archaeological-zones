export default function Loading() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 rounded-full animate-pulse bg-stone-900"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-stone-900"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-stone-900"></div>
            </div>
        </div>
    )
}