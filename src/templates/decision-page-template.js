import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PageBody from "../components/page-body";
import NavContainer from "../containers/nav-container";
import NotesArea from "../components/notes-area";
import ButtonsContainer from "../containers/buttons-container";

const DecisionPageTemplate = ({ data }) => {
  const node = data.nodeDecisionAidPage;
  return (
    <Layout className="decision-page">
      <Header />
      <NavContainer />
      <PageTitle>
        { node.title }
      </PageTitle>
      <PageBody
        page={ node.path.alias }
        video={ node.relationships }
        videoCaption={ node.field_video_caption }
        intro={ node.field_intro_text }
        complexContent={ node.relationships }
        outro={ node.field_outro_text }
      />
      <NotesArea />
      <ButtonsContainer isOrphan={ node.field_is_orphan_page } />
    </Layout>
  );
}


export const query = graphql`
  query($id: String!) {
    nodeDecisionAidPage(id: {eq: $id} ) {
      title
      field_is_orphan_page
      field_video_caption
      field_intro_text {
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
          field_accordion_subheading
          field_accordion_body {
            processed
          }
          relationships {
            field_cancer_type {
              name
            }
          }
        }
        field_content_module {
          field_module_title
          field_should_be_hidden
          relationships {
            field_it_s_your_choice_label {
              name
            }
            field_content_segment {
              field_content {
                processed
              }
              relationships {
                field_button_with_text {
                  field_button_text
                  field_text_leading_to_button {
                    processed
                  }
                  relationships {
                    field_button_destination {
                      path {
                        alias
                      }
                    }
                  }
                }
                field_multiple_choice {
                  field_option_name
                  field_intro_to_options
                  field_can_choose_multiple
                  relationships {
                    field_relevance {
                      name
                    }
                  }
                }
              }
            }
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
        field_video_still_image {
          uri {
            url
          }
        }
      }
    }
  }
`

export default DecisionPageTemplate;
