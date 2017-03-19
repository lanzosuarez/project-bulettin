import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PageBase from '../PageBase';

const FormSched = () => {

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
      <form>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 m-b-15 ">
            <TextField
              hintText="Description"
              floatingLabelText="Description"
              fullWidth={true}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 m-b-15 ">
            <TextField
                hintText="Schedule"
                floatingLabelText="Schedule"
                fullWidth={true}
              />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              hintText="Subject Code"
              floatingLabelText="Subject Code"
              fullWidth={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <TextField
              hintText="Section Code"
              floatingLabelText="Section Code"
              fullWidth={true}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              hintText="Lec"
              floatingLabelText="Lecture Unit"
              fullWidth={true}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              hintText="Lab "
              floatingLabelText="Lab Unit"
              fullWidth={true}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              hintText="Units"
              floatingLabelText="Units"
              fullWidth={true}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
                hintText="Room"
                floatingLabelText="Room Number"
                fullWidth={true}
              />
          </div>
        </div>
        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel"/>
          </Link>
          <RaisedButton label="Save"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
};

export default FormSched;
