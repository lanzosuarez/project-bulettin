import React from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import SchedHeader from './SchedHeader';
import PageBase from '../PageBase';
import Data from '../../data';

const Schedules = (props) => {

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
      zIndex: "3"
    },
    editButton: {
      fill: grey500
    },
    header: {
      paddingLeft: "0px!important",
      paddingRight: "0px!important",
      textAlign: "center"
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

  let scheds = props.schedules.map(sched =>
    <TableRow key={sched._id}>
      <TableRowColumn style={styles.columns.subject_code}>{sched.subject_code}</TableRowColumn>
      <TableRowColumn style={styles.columns.description}>{sched.description}</TableRowColumn>
      <TableRowColumn style={styles.columns.section_code}>{sched.section_code}</TableRowColumn>
      <TableRowColumn style={styles.columns.lec} className="sscenter">{sched.lec} </TableRowColumn>
      <TableRowColumn style={styles.columns.lab} className="sscenter">{sched.lab}</TableRowColumn>
      <TableRowColumn style={styles.columns.units} className="sscenter">{sched.units}</TableRowColumn>
      <TableRowColumn style={styles.columns.room_no} className="sscenter">{sched.room_no}</TableRowColumn>
      <TableRowColumn style={styles.columns.schedule}>{sched.schedule}</TableRowColumn>
      {props.id?<TableRowColumn style={styles.columns.edit}>
        <Link className="button" to={"/schedules/" + sched._id}>
          <FloatingActionButton zDepth={0}
            mini={true}
            backgroundColor={grey200}
            iconStyle={styles.editButton}>
            <ContentCreate />
          </FloatingActionButton>
        </Link>
      </TableRowColumn>:null}
    </TableRow>
  );

  return (
    <div>
      <PageBase title="Schedules"
        navigation="Application / CpE Schedules">
        <SchedHeader
          onSearch={props.onSearch}
          defYearValue={props.defYearValue}
          updateState={props.updateState}
          style={styles.header}
        />
        <Table
          selectable={false}
          multiSelectable={false}
          showCheckboxes={false}
          displaySelectAll={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={styles.columns.subject_code} className="ssheader">SUBJECT CODE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.description} className="ssheader">DESCRIPTION</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.section_code} className="ssheader">SECTION CODE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.lec} className="ssheader">LEC</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.lab} className="ssheader">LAB</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.units} className="ssheader">UNITS</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.room_no} className="ssheader">ROOM</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.schedule} className="ssheader">SCHEDULE</TableHeaderColumn>
              {props.id?<TableHeaderColumn style={styles.columns.edit} className="ssheader">EDIT</TableHeaderColumn>:null}
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}>
            {scheds.length > 0 ? scheds : <h1>No Schedules Found!</h1>}
          </TableBody>
        </Table>
      </PageBase>
    </div>
  );
};

export default Schedules;
