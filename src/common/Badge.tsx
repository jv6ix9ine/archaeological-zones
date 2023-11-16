'use client'
import { motion } from "framer-motion"

type Props = {
    title: string
    className?: string
}

const Badge = ({ title, className }: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.15}}
            className={`${className} py-1 px-2 cursor-pointer rounded-full ring-1 ring-neutral-950 dark:ring-neutral-50`}
        >
            <span>{title}</span>
        </motion.div>
    )
}

export default Badge