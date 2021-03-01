import React from 'react'
import { IntrinsicProps } from '../shared/classes'

export interface SubSectionProps {
  title: string
  description: string[]
}

const SubSection = ({
  title,
  description,
  className
}: SubSectionProps & IntrinsicProps) => (
  <div className={className}>
    <h4 className="font-bold mb-1 md:mb-2 text-gray-900 dark:text-gray-100">
      {title}
    </h4>
    {description.map((text: string) => (
      <p className="text-gray-900 dark:text-gray-100">{text}</p>
    ))}
  </div>
)

export default SubSection
