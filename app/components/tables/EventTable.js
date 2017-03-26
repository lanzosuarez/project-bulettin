import React from 'react';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../PageBase';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import Data from '../../data';

function getFormattedDate(d){
  const months = ["January", "Februay", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[d.getMonth()]+" "+d.getDate()+", "+ d.getFullYear();
}

const EventTable = (props) => {
  console.log("event table",props);
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
      title: {
        width: '30%'
      },
      description: {
        width: '40%'
      },
      date: {
        width: '20%'
      },
      edit:{
        width: '10%'
      }
    }
  };

  let events = props.events.map(item =>{
    let s = getFormattedDate(new Date(item.start));
    let e = getFormattedDate(new Date(item.end));
    return <TableRow key={item._id}>
      <TableRowColumn style={styles.columns.title}>{item.title}</TableRowColumn>
      <TableRowColumn style={styles.columns.description}>{item.description}</TableRowColumn>
      <TableRowColumn style={styles.columns.date}>{s}</TableRowColumn>
      <TableRowColumn style={styles.columns.date}>{e}</TableRowColumn>
      <TableRowColumn style={styles.columns.edit}>
          <Link className="button" to={"/events/"+item._id}>
          <FloatingActionButton zDepth={0}
              mini={true}
              backgroundColor={grey200}
              iconStyle={styles.editButton}>
              <ContentCreate />
          </FloatingActionButton>
          </Link>
      </TableRowColumn>
    </TableRow>
  });
            

  return (
    <div>
      <PageBase title="Announcements"
                navigation="Application / Events">
        <Table
          selectable={false}
          multiSelectable={false}
          showCheckboxes ={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={styles.columns.title}>TITLE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.description}>DESCRIPTION</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.date}>START DATE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.date}>END DATE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}>EDIT</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
             displayRowCheckbox={false}
            deselectOnClickaway={false}>
            {events}
          </TableBody>
        </Table>
      </PageBase>
    </div>
  );
};

export default EventTable;
