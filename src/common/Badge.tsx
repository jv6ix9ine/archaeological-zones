'use client'
import { useRouter } from "next/navigation"

type Props = {
    title: string
    className?: string,
    zoneId?: string
}

const Badge = ({ title, className, zoneId }: Props) => {
  const router = useRouter()

    return (
        <div
            onClick={() => zoneId ? router.push(`/zones/${zoneId}`) : ""}
            className={`${className} text-sm md:text-base text-ellipsis overflow-hidden py-1 px-3 cursor-pointer rounded-full duration-200 ring-1 ring-neutral-950 dark:ring-neutral-50 hover:bg-neutral-950 dark:hover:bg-neutral-50 hover:text-neutral-50 dark:hover:text-neutral-950`}
        >
            {title}
        </div>
    )
}

export default Badge