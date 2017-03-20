import React from 'react';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../PageBase';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import Data from '../../data';

const EventTable = () => {

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

  return (
    <div>
      <PageBase title="Announcements"
                navigation="Application / Announcements">
        <Table
          selectable={false}
          multiSelectable={false}
          showCheckboxes ={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={styles.columns.title}>SUBJECT CODE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.description}>DESCRIPTION</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.date}>SECTION CODE</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}>EDIT</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
             displayRowCheckbox={false}
            deselectOnClickaway={false}>
            {Data.tablePage.items.map(item =>
              <TableRow key={item.id}>
                <TableRowColumn style={styles.columns.title}>{item.subject_code}</TableRowColumn>
                <TableRowColumn style={styles.columns.description}>{item.description}</TableRowColumn>
                <TableRowColumn style={styles.columns.date}>{item.section_code}</TableRowColumn>
               <TableRowColumn style={styles.columns.edit}>
                    <Link className="button" >
                    <FloatingActionButton zDepth={0}
                        mini={true}
                        backgroundColor={grey200}
                        iconStyle={styles.editButton}>
                        <ContentCreate />
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

export default EventTable;
