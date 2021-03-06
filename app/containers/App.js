import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import ChatToggle from './ChatToggle';
import GuestHeader from '../components/guest/GuestHeader';
import Data from '../data';
import Loading from '../components/Loading'
import Load from '../components/Load';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      navDrawerOpen: false,
      admin: false,
    };
  }

  componentDidMount() {
    this.context.store.subscribe(() => {
      this.setState({ 
        admin: this.context.store.getState().admin,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;
    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
        backgroundColor: "white",
      },
      container: {
        margin: '80px 20px 20px 20px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      },
      container2: {
        margin: "50px 0px 0px 0px"
      }
    };
    let guestHeader;
    if(location.pathname==="/login"||location.pathname==="/register"){
      guestHeader=null;
    } else if(this.context.store.getState().isLoading ){
      guestHeader=null;
    }else {
      guestHeader=<GuestHeader path={location.pathname} admin={this.state.admin}/>
    }

    if (this.state.admin) {
      return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <div>
            {guestHeader}
            <Header styles={styles.header}
              handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
            <LeftDrawer 
              socket={this.context.store.getState().socket}
              navDrawerOpen={navDrawerOpen}
              menus={Data.menus}
              username="User Admin" />
            <div style={styles.container}>
              {this.props.children}
            </div>
          </div>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <div>
             {guestHeader}
            <div style={styles.container2}>
              {this.props.children}
            </div>
          </div>
        </MuiThemeProvider>
      );
    }
  }
}
App.contextTypes = {
  store: PropTypes.object.isRequired
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};


export default withWidth()(App);

