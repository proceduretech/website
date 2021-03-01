import React from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'
import KeyMembers from '../components/key-members'
import Section, { SectionProps } from '../components/section'

interface IndexProps {
  data: any
}

const IndexPage = ({ data }: IndexProps) => (
  <div className="flex flex-col bg-gray-50 dark:bg-gray-900 h-full justify-between pt-16 md:pt-24">
    <main>
      <title>{data.site.siteMetadata.title}</title>
      <div className="container">
        <Header
          className="mb-10 md:md-16"
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <KeyMembers
          className="md:flex mb-10 md:mb-16"
          keyMembers={data.site.siteMetadata.keyMembers}
        />
        {data.site.siteMetadata.sections.map(
          ({ title, isGrid, subSections }: SectionProps) => (
            <Section
              className="mb-10 md:mb-16"
              title={title}
              isGrid={isGrid}
              subSections={subSections}
            />
          )
        )}
      </div>
    </main>
    <footer>
      <div className="container">
        <Footer footer={data.site.siteMetadata.footer} />
      </div>
    </footer>
  </div>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        keyMembers {
          name
          title
          role
          url
        }
        sections {
          title
          isGrid
          subSections {
            title
            description
          }
        }
        footer
      }
    }
  }
`

export default IndexPage
