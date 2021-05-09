import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getSubjects } from "../api/subject";

function SubjectTable() {
  const [subjects, setSubjects] = useState([]);

  async function subjectfetchData() {
    var res = await getSubjects()
    var t = []
    var loadedsubs = res.data.subjects
    loadedsubs.forEach((sub)=>{
      t.push(sub)
    })
    setSubjects(t)
  }
  useEffect(() => {
    subjectfetchData();
  }, []);
  
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>SubjectName</th>
          <th>Students</th>          
        </tr>
      </thead>
      <tbody>
        {subjects &&
          subjects.map((c, idx) => {
            return (
              <tr key={idx}>
                <th scope="row">{idx}</th>
                <td>{c.subName}</td>
                <td>{c.subStudents.toString()}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default SubjectTable;
