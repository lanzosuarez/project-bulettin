import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, purple600, purple500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {typography} from 'material-ui/styles';

const Inquiries = (props) => {

  const styles = {
    paper: {
      backgroundColor: purple500,
      height: 222
    },
    div: {
      height: "168px",
      padding: "9px 22px 0px 0px"
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: purple600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={styles.header}>Students Inquiries</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={props.data}>
            <Tooltip />
            <XAxis dataKey="name" fill={"rgba(255, 255, 255, 0.870588)"}/>
            <YAxis fill={"rgba(255, 255, 255, 0.870588)"} />
            <CartesianGrid strokeDasharray="3 3" tick={{ fill: white }}/>
            <Line type="monotone" dataKey="inquiries" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

Inquiries.propTypes = {
  data: PropTypes.array
};

export default Inquiries;
