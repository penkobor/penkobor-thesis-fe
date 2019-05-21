import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = (theme:any) => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

  let id = 0;

  export class WinterTimetable extends React.Component<{},{}> {

    createData = (name:string, content: string) => {
      id += 1;
      return { id, name, content }
    }
    rows = [
      this.createData('March 4 – March 29, 2019', 'Choice of fields of study by students in the 1st year of bachelor study'),
      this.createData('March 28, 2019','Graduation ceremony (spring term)'),
      this.createData('April 15 - April 26, 2019', 'Preliminary registration for courses held in the Winter semester of the academic year 2019/2020'),
      this.createData('April 30, 2019', 'Applications for Bachelor and Master comprehensive final examinations'),
      this.createData('May 15, 2019', 'Rectors day (no classes)'),
      this.createData('May 24, 2019', 'Submission of Bachelors projects and Diploma theses'),
      this.createData('May 27 - June 30, 2019', 'Examination period'),
      this.createData('June 10 - June 20, 2019', 'Bachelor comprehensive final examinations'),
      this.createData('June 10 - June 28, 2019', 'Master comprehensive final examinations'),
      this.createData('June 10 – September 30, 2019', 'Enrolment to study in the Winter semester of the academic year 2019/2020'),
      this.createData('July 2 - September 2, 2019', 'Summer holiday'),
      this.createData('August 28 - August 30, 2019', 'Graduation ceremony (summer term)'),
      this.createData('September 2 - September 6, 2019', 'Examination period (after summer holiday)'),
      this.createData('September 22, 2019', 'End of Academic Year')
    ];

      render() {
          return (
          <div>
            <h1 className='p-5'>Winter Semester</h1>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>February 18 - May 26, 2019</TableCell>
                  <TableCell align="right">Classes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {this.rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>

            </Table>

          </Paper>
          </div>)
      }
  }
