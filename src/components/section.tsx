import React from 'react'
import { IntrinsicProps } from '../shared/classes'
import SubSection, { SubSectionProps } from './sub-section'

export interface SectionProps {
  title: string
  isGrid: boolean
  subSections: SubSectionProps[]
}

const Section = ({
  title,
  subSections,
  className,
  isGrid
}: SectionProps & IntrinsicProps) => (
  <div className={className}>
    <h4 className="text-lg md:text-2xl font-semibold text-purple-500 dark:text-purple-400 mb-2 md:mb-4">
      {title}
    </h4>
    <div className={`${isGrid ? 'md:grid md:grid-cols-2 md:gap-2' : ''}`}>
      {subSections.map(({ title, description }: SubSectionProps) => (
        <SubSection
          title={title}
          description={description}
          className="mb-2 md:mb-4"
        />
      ))}
    </div>
  </div>
)

export default Section
