type Props = {
    title: string
    className?: string
}

const Badge = ({ title, className }: Props) => {
    return (
        <div
            className={`${className} py-1 px-3 cursor-pointer rounded-full duration-200 ring-1 ring-neutral-950 dark:ring-neutral-50 hover:bg-neutral-950 dark:hover:bg-neutral-50 hover:text-neutral-50 dark:hover:text-neutral-950`}
        >
            <span>{title}</span>
        </div>
    )
}

export default Badge