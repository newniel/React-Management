import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    widht: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

// const customers = [
//   {
//     'id' : 1,
//     'image' : 'https://placeimg.com/128/128/1',
//     'name' :  '니엘',
//     'birthday' : '830407',
//     'gender' : '남자',
//     'job' : 'programmer'
//   },
//   {
//     'id' : 2,
//     'image' : 'https://placeimg.com/128/128/2',
//     'name' :  '다니',
//     'birthday' : '930407',
//     'gender' : '여자',
//     'job' : '직장인'
//   },
//   {
//     'id' : 3,
//     'image' : 'https://placeimg.com/128/128/3',
//     'name' :  '니엘',
//     'birthday' : '950407',
//     'gender' : '여자',
//     'job' : '디자이너'
//   },
// ]
  


class App extends Component {
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi =  async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
              }): ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
