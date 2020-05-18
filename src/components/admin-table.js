import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import NavButton from "../components/nav-button";

const getTestDetails = (test) => {
  const type = test.doYouWantGeneticTest.split(" ")[0].toLowerCase().replace(/\W/g, "");
  let field, value, path;
  switch (type) {
    case "yes":
      if (!test.testTypes && test.notSureWhichTest.length > 0) {
        field = "Reasons not ready to choose test";
        value = test.notSureWhichTest.join(", ");
      }
      else {
        field = "Test type";
        value = test.testTypes || "no test selected";
      }
      path = "/choose-a-test";
    break;
    case "im":
      field = "Next steps";
      value = test.notReadyToDecide.length > 0 && test.notReadyToDecide.join(", ");
      path = "/its-your-decision";
    break;
    default:
      return;
  }
  return (
    <tr>
      <td>{ field }</td>
      <td>{ value }</td>
      <td><NavButton path={ path }>Change</NavButton></td>
    </tr>
  )
}

const AdminTable = ({ userid, cancerType, site, data }) => {
  return (
    <Table striped>
      <thead>
        <th>Field</th>
        <th>Value</th>
        <th>Edit</th>
      </thead>
      <tbody>
        <tr>
          <td>User id</td>
          <td><Form.Control type="text" value={ userid } /></td>
          <td></td>
        </tr>
        <tr>
          <td>Cancer type</td>
          <td>{ cancerType }</td>
          <td></td>
        </tr>
        <tr>
          <td>Site</td>
          <td>{ site }</td>
          <td></td>
        </tr>
        <tr>
          <td>Wants test?</td>
          <td>{ data.doYouWantGeneticTest }</td>
          <td><NavButton path="/its-your-decision">Change</NavButton></td>
        </tr>
        { getTestDetails(data) }
      </tbody>
    </Table>
  )
}

AdminTable.propTypes = {
  userid: PropTypes.string.isRequired,
  cancerType: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default AdminTable;
