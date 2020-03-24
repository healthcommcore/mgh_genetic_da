import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import PageTitle from "../components/page-title";
import PageBody from "../components/page-body";
import NavContainer from "../containers/nav-container";

const DecisionPageTemplate = ({ data }) => {
  const node = data.nodeDecisionAidPage;
  return (
    <div className="page">
      <Header />
      <NavContainer />
      <PageTitle>
        { node.title }
      </PageTitle>
      <PageBody
        intro={ node.field_intro_text }
        body={ node.body }
        outro={ node.field_outro_text }
        complexContent={ node.relationships }
      />
    </div>
  );
}


export const query = graphql`
  query($id: String!) {
    nodeDecisionAidPage(id: {eq: $id} ) {
      title
      body {
        processed
      }
      path {
        alias
      }
      field_outro_text {
        processed
      }
      relationships {
        field_accordions {
          field_accordion_heading
          field_accordion_body {
            processed
          }
        }
        field_values {
          field_value_heading
          field_r
          field_l
        }
        field_video {
          uri {
            url
          }
        }
      }
    }
  }
`

export default DecisionPageTemplate;
