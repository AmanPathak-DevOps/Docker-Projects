// Teacher.js

import React, { useState, useEffect } from 'react';
import './Teacher.css';

function Teacher() {
  const [TeacherData, setTeacherData] = useState({
    name: '',
    subject: '',
    class: ''
  });

  const [data, setData]= useState([])

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const getData=()=> {
    fetch(`${API_BASE_URL}/teacher`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData()
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...TeacherData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeacherData({
      name: '',
      subject: '',
      class: '',
    });


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( TeacherData )
};
  
  fetch(`${API_BASE_URL}/addteacher`, requestOptions ).then((res) => res.json())
.then(() => {
    getData()}
)
    .catch((err) => console.log(err));
};

const handleDelete = (id) => {
  fetch(`${API_BASE_URL}/teacher/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then(() => {
      getData();
    })
    .catch((err) => console.error('Error deleting data:', err));
};

  return (
    <div className="Teacher-container">
      <div className="content">
        <h2 className='store-teacher-details' style={{ marginLeft: '100px' }}>Teacher Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={TeacherData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={TeacherData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Class:</label>
            <input
              type="text"
              name="class"
              value={TeacherData.class}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <p style={{ marginLeft: '50px' }}>
            <button type="submit">Submit</button>
            </p>
          </div>
        </form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '50px 0' }}>
      <h2 className='teacher-details'>Teacher details</h2>
      <table className="student-table gradient-bg" style={{ border: '1px solid #ccc', borderCollapse: 'collapse', margin: '100px 0',marginLeft: '825px', marginTop: '200px', width: '40%', backgroundColor: '#f4f4f4'}}>
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
          <td style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>TeacherID</td>
            <th style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>Subject</th>
            <th style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>Class</th>
            <th style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>{d.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>{d.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>{d.subject}</td>
              <td style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>{d.class}</td>
              <td style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>
              <button className="delete-button" onClick={() => handleDelete(d.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Teacher;
