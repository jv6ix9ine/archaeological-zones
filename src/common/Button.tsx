import Link from 'next/link';

enum Variants {
    primary = "bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50",
    light = "ring-1 ring-neutral-950 dark:ring-neutral-50 hover:bg-neutral-950 dark:hover:bg-neutral-50 hover:text-neutral-50 dark:hover:text-neutral-950"
}

type Props = {
    className?: string
    variant?: "primary" | "light";
    icon?: React.ReactNode
    children: React.ReactNode
}

const Button = ({ className, variant, icon, children }: Props) => {
    return (
        <Link href={`/#zones`}>
            <button
                // onClick={() => router.push(`/home#gallery`, { scroll: true })}
                className={`${className} ${Variants[String(variant) as keyof typeof Variants]} w-48 px-8 py-2 rounded-full duration-300 `}
            >
                <span className="flex items-center justify-center gap-2 text-inherit">
                    {children}
                    {icon}
                </span>
            </button>
        </Link>
    )
}

export default Button