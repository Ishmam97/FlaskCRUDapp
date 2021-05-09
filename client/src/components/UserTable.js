import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getStudents } from "../api/student";

function UserTable() {
  const [students, setStudents] = useState([]);

  // async function studentfetchData() {
  //   var res = await getStudents();
  //   var loadedStudents = res.data.students;
  //   var t = [];
  //   loadedStudents.forEach((std, index) => {
  //     t.push({
  //       stName: std.stName,
  //       stdob: std.stdob,
  //       stEmail: std.stEmail,
  //       stphone: std.stphone,
  //       subjects: std.subjects,
  //     });
  //   });
  //   setStudents(t);
  // }
  // useEffect(() => {
  //   studentfetchData();
  // }, []);
  
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Dob</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((c, idx) => {
            return (
              <tr key={idx}>
                <th scope="row">{idx}</th>
                <td>{c.stName}</td>
                <td>{c.stEmail}</td>
                <td>{c.stdob}</td>
                <td>{c.stphone}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default UserTable;
