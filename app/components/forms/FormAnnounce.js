import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import PageBase from '../PageBase';

const FormAnnounce = () => {

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
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 m-b-15 ">
            <TextField
              hintText="Title"
              floatingLabelText="Title"
              fullWidth={true}
            />
          </div>
         <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <SelectField
                floatingLabelText="Icon"
                value=""
                fullWidth={true}>
                <MenuItem key={0} primaryText="Assessment"/>
                <MenuItem key={1} primaryText="Face"/>
                <MenuItem key={2} primaryText="ThumbUp"/>
                <MenuItem key={3} primaryText="Faculties"/>
            </SelectField>
         </div>
         <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <SelectField
                floatingLabelText="Color"
                value=""
                fullWidth={true}>
                <MenuItem key={0} primaryText="Blue"/>
                <MenuItem key={1} primaryText="Pink"/>
                <MenuItem key={2} primaryText="Purple"/>
                <MenuItem key={3} primaryText="Orange"/>
            </SelectField>
         </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 m-b-15 ">
                <TextField
                hintText="Description"
                floatingLabelText="Description"
                multiLine={true}
                rows={2}
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

export default FormAnnounce;
