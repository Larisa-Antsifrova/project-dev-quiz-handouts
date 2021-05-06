import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function UsersStatistics({ allUsers }) {
  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [users, setUsers] = React.useState(allUsers.slice(0, rowsPerPage));
  let history = useHistory();

  const handleChangePage = (event, newPage) => {
    console.log('newPage', newPage);
    setPage(newPage);
    setUsers(
      allUsers.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage,
      ),
    );
  };

  const handleChangeRowsPerPage = event => {
    setUsers(allUsers.slice(0, +event.target.value));
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickRow = id => {
    history.push('/user', { id });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">First name</StyledTableCell>
              <StyledTableCell align="right">Last name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">IP address</StyledTableCell>
              <StyledTableCell align="right">Total clicks</StyledTableCell>
              <StyledTableCell align="right">Total page views</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <StyledTableRow
                key={user.id}
                onClick={() => handleClickRow(user.id)}
              >
                <StyledTableCell component="th" scope="row">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.last_name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.gender}</StyledTableCell>
                <StyledTableCell align="right">
                  {user.ip_address}
                </StyledTableCell>
                <StyledTableCell align="right">{'info'}</StyledTableCell>
                <StyledTableCell align="right">{'info'}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={allUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
