'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT'

const movingMap: Record<Direction, string> = {
  TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
  LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
  BOTTOM: 'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
  RIGHT: 'radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
}

const highlightDark =
  'radial-gradient(75% 181.16% at 50% 50%, #EAB308 0%, rgba(255, 255, 255, 0) 100%)'

const highlightYellow =
  'radial-gradient(75% 181.16% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%)'

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Element = 'button',
  duration = 1,
  clockwise = true,
  yellow = false,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType
    containerClassName?: string
    className?: string
    duration?: number
    clockwise?: boolean
    yellow?: boolean
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false)
  const [direction, setDirection] = useState<Direction>('BOTTOM')

  const rotateDirection = (current: Direction): Direction => {
    const dirs: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
    const idx = dirs.indexOf(current)
    return clockwise
      ? dirs[(idx - 1 + dirs.length) % dirs.length]
      : dirs[(idx + 1) % dirs.length]
  }

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(
        () => setDirection((d) => rotateDirection(d)),
        duration * 1000
      )
      return () => clearInterval(interval)
    }
  }, [hovered, duration])

  const highlight = yellow ? highlightYellow : highlightDark
  const overlayBg = yellow ? 'bg-yellow-400' : 'bg-neutral-950'
  const innerBg = yellow
    ? 'bg-yellow-400 text-neutral-900 font-bold'
    : 'bg-neutral-950 text-white font-semibold'

  return (
    <Element
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative flex h-min w-fit flex-nowrap content-center items-center justify-center overflow-visible rounded-full border border-white/10 p-px backdrop-blur-sm transition duration-500',
        yellow ? 'bg-yellow-400/20 hover:bg-yellow-400/30' : 'bg-black/40 hover:bg-black/60',
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-[inherit] px-6 py-3 text-sm',
          innerBg,
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{ filter: 'blur(2px)', width: '100%', height: '100%' }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className={cn('absolute inset-0.5 z-[1] rounded-full', overlayBg)} />
    </Element>
  )
}
