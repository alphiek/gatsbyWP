import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class PageTemplate extends Component {
    render() {

        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (
            <Layout>
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />

                <p dangerouslySetInnerHTML={{ __html: currentPage.date }} />
                <p dangerouslySetInnerHTML={{ __html: currentPage.slug }} />
            </div>
           </Layout>
        )
    }
}

export default PageTemplate

export const PageQuery = graphql`
  query currentPageQuery($id: String!) {
      wordpressPage(id: { eq: $id }) {
          title
          content
          slug
          id
          date(formatString: "MMMM DD, YYYY")
      }
  }
`

