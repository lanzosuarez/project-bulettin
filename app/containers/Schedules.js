import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import SchedHeader from '../components/schedules/SchedHeader';
import FormSched from '../components/forms/FormSched';
import PageBase from '../components/PageBase';
import Data from '../data';

const Schedules = () => {

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
      zIndex:"3" 
    },
    editButton: {
      fill: grey500
    },
    columns: {
      subject_code: {
        width: '10%'
      },
      description: {
        width: '26%'
      },
      section_code: {
        width: '10%'
      },
      lec: {
        width: '6%'
      },
      lab: {
        width: '6%'
      },
      units: {
        width: '6%'
      },
      room_no: {
        width: '5%'
      },
      schedule: {
        width: '26%'
      },
      edit: {
        width: '5%'
      },
    }
  };

  return (
    <div>
      <FormSched />
      <PageBase title="Schedules"
                navigation="Application / CpE Schedules">
        <SchedHeader />
        <Table
          selectable={true}
          multiSelectable={true}
          showCheckboxes ={true}
          displaySelectAll={true}>
          <TableHeader
            displaySelectAll={true}
            adjustForCheckbox={true}
            enableSelectAll={true}>
            <TableRow>
              <TableHeaderColumn style={styles.columns.subject_code}>SUBJECT CODE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.description}>DESCRIPTION</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.section_code}>SECTION CODE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.lec}>LEC</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.lab}>LAB</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.units}>UNITS</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.room_no}>ROOM</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.schedule}>SCHEDULE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}>EDIT</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={true}
            deselectOnClickaway={true}>
            {Data.tablePage.items.map(item =>
              <TableRow key={item.id}>
                <TableRowColumn style={styles.columns.subject_code}>{item.subject_code}</TableRowColumn>
                <TableRowColumn style={styles.columns.description}>{item.description}</TableRowColumn>
                <TableRowColumn style={styles.columns.section_code}>{item.section_code}</TableRowColumn>
                <TableRowColumn style={styles.columns.lec}>{item.lec}</TableRowColumn>
                <TableRowColumn style={styles.columns.lab}>{item.lab}</TableRowColumn>
                <TableRowColumn style={styles.columns.units}>{item.units}</TableRowColumn>
                <TableRowColumn style={styles.columns.room_no}>{item.room_number}</TableRowColumn>
                <TableRowColumn style={styles.columns.schedule}>{item.schedule}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>
                  <Link className="button" to="/form">
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </FloatingActionButton>
                  </Link>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </PageBase>
    </div>
  );
};

export default Schedules;
