import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import PageBase from '../PageBase';

const FormAnnounce = (props) => {
  let {announcement, param} = props;
  const styles = {
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="Form Page"
      navigation="Application / Form Page">
      <form onSubmit={props.onSave}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 m-b-15 ">
            <TextField
              value={announcement.title}
              onChange={props.updateState}
              name="title"
              hintText="Title"
              floatingLabelText="Title"
              fullWidth={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 m-b-15 ">
            <TextField
              onChange={props.updateState}
              value={announcement.description}
              name="description"
              hintText="Description"
              floatingLabelText="Description"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
          </div>
        </div>
        <div style={styles.buttons}>
          <Link to={announcement._id?"/announcements":"/"}>
          <RaisedButton label="Cancel"
            style={styles.saveButton}
            type="submit" />
          </Link>
          {param?<RaisedButton label="Delete"
            onTouchTap={()=>{
              props.onDelete(announcement._id);
            }}
            style={styles.saveButton}
            secondary={true} />:null}
          <RaisedButton label="Save"
            style={styles.saveButton}
            type="submit"
            primary={true} />
        </div>
      </form>
    </PageBase>
  );
};

export default FormAnnounce;
