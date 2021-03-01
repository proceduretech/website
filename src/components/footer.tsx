import React from 'react'
import { IntrinsicProps } from '../shared/classes'

interface FooterProps {
  footer: string
}

const Footer = ({ className, footer }: IntrinsicProps & FooterProps) => (
  <div className={className}>
    <p className="text-gray-400 dark:text-gray-200 font-semibold">{footer}</p>
  </div>
)

export default Footer
