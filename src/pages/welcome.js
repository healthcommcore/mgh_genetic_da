import React from "react";
import { graphql } from "gatsby";
import PageTemplate from "../components/page_template";
import Layout from "../components/layout";
import { setHTML } from "../helpers/helpers";

const Welcome = ({ data }) => {
	const content = data.nodeDecisionAidPage;
  return (
		<Layout>
			<PageTemplate>
				<div className="body">
				{ setHTML(content.body.processed) }	
				</div>
			</PageTemplate>
		</Layout>
  );
}


export const query = graphql`
  query {
  	nodeDecisionAidPage {
			title
			relationships {
				field_video {
					status
				}
			}
			body {
				processed
			}
		} 
	}
`

export default Welcome;
