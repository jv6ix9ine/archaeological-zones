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
            className={`py-1 px-2 rounded-full ring-1 text-xs ring-neutral-800 cursor-pointer ${className}`}
        >
            <span>{title}</span>
        </motion.div>
    )
}

export default Badge