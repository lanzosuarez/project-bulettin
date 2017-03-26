import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { white, pink600, pink500 } from 'material-ui/styles/colors';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import GlobalStyles from '../../styles';

const Visitors = (props) => {

  const styles = {
    paper: {
      backgroundColor: pink600,
      height: 222
    },
    div: {
      marginTop: '21px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: "21px",
      width: '95%',
      height: 137
    },
    header: {
      color: white,
      backgroundColor: pink500,
      padding: 10
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={styles.header}>Viewers</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data} >

            <Tooltip />
            <YAxis />
            <XAxis dataKey="name" stroke="none" tick={{ fill: white }} />
            <CartesianGrid strokeDasharray="1" tick={{ fill: white }}/>
            <Bar type="monotone" dataKey="visitors" barSize={10} fill="#8884d8"/>
            <XAxis dataKey="name" stroke="none" tick={{fill: white}}/>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

Visitors.propTypes = {
  data: PropTypes.array
};

export default Visitors;
