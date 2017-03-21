import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import PageBase from '../PageBase';

const FormEvent = (props) => {
  let { event } = props;
  console.log(event.end);
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
      <form onSubmit={props.onSaveEvent}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 m-b-15 ">
            <TextField
              required={true}
              value={event.title}
              name="title"
              hintText="Title"
              floatingLabelText="Title"
              fullWidth={true}
              onChange={props.updateState}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
            <DatePicker
              value={event.end!==undefined?new Date(event.end):null}
              hintText="End Date"
              floatingLabelText="End Date"
              fullWidth={true}
              onChange={props.updateDate}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 m-b-15 ">
            <TextField
              required={true}
              value={event.description}
              name="description"
              onChange={props.updateState}
              hintText="Description"
              floatingLabelText="Description"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
          </div>
        </div>
        <div style={styles.buttons}>
          <Link to={props.params?"/events":"/"}>
            <RaisedButton label="Cancel" />
          </Link>
          <RaisedButton label="Save"
            style={styles.saveButton}
            type="submit"
            primary={true} />
        </div>
      </form>
    </PageBase>
  );
};

export default FormEvent;
