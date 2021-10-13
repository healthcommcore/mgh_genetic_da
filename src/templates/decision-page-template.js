import React from "react";
import { connect } from "react-redux";
import { graphql } from "gatsby";
import { triggerModal } from "../actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";
import Header from "../components/header";
import GoogleTranslate from "../components/google-translate";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PageBody from "../components/page-body";
import NavContainer from "../containers/nav-container";
import NotesArea from "../components/notes-area";
import ButtonsContainer from "../containers/buttons-container";
import Footer from "../components/footer";

const mapStateToProps = (state) => {
  return {
    showModal: state.navigation.showModal
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerModal: () => {
      dispatch( triggerModal() );
    }
  };
}


const DecisionPageTemplate = ({ data, triggerModal, showModal }) => {
  const node = data.nodeDecisionAidPage;

  return (
    <Layout className="decision-page">
      <Header />
      <NavContainer />
			<GoogleTranslate />
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
      <Footer />
      <Modal show={ showModal } onHide={ triggerModal } centered>
        <Modal.Header>
          <Modal.Title>Stop decision aid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to exit the decision aid?</p>
          <div className="d-flex justify-content-between mt-4">
            <Button onClick={ triggerModal } variant="da rounded-pill">No</Button>
            <Button as={ Link } to="/end" variant="da rounded-pill">Yes</Button>
          </div>
        </Modal.Body>
      </Modal>
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
                      ... on node__article {
                        path {
                          alias
                        }
                      }
                      ... on node__decision_aid_page {
                        path {
                          alias
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(DecisionPageTemplate);
