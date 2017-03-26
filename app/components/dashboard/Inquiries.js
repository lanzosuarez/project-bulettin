import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, purple600, purple500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid} from 'recharts';
import {typography} from 'material-ui/styles';

const Inquiries = (props) => {

  const styles = {
    paper: {
      backgroundColor: purple500,
      height: 222
    },
    div: {
<<<<<<< HEAD
      height: 95,
      padding: '5px 15px 0 15px',
=======
      height: 120,
      padding: '18px 15px 0px;'
>>>>>>> c2f51f4c897e45afdccfd6d90b720193a2a6b9e8
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
            <XAxis dataKey="name"/>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" tick={{ fill: white }}/>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
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
