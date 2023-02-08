import React, { useState } from 'react';
import { users } from './data';
import Detail from './detail';
import styles from './style.module.css';

const List = () => {
    const [list,setList] = useState(users);
  const [selectedUser, selectUser] = useState(null);
  const [search,setSearch] = useState('');

  const onClickItem = item =>{
    selectUser(item)
  }
  const onChangeInput = e =>{
    const {value} = e.target

    setSearch(value)

    const newUsers = users.filter(
        i =>
        i.firstName.toLowerCase().includes(value.toLowerCase()) ||
        i.lastName.toLowerCase().includes(value.toLowerCase())
    )
    setList(newUsers)
  }

  return (
<div>
<main>
    <div className={styles.table_section}>
      <form action="/">
        <img
          src="https://th.bing.com/th/id/OIP.3WCb_KpKoHZik61PVEA-MAHaHY?pid=ImgDet&rs=1"
          alt="Search Icon"
        />
        <input
          type="text"
          placeholder="Enter something"
          name="search-box"
          value={search}
          onChange={onChangeInput}
        />
      </form>
      <div className={styles.table_wrapper}>
        <div className={styles.table_headers}>
          <table>
            <thead>
              <tr>
                <th className={styles.column1}> Id </th>
                <th className={styles.column2}> FirstName </th>
                <th className={styles.column3}> LastName </th>
                <th className={styles.column4}> Email </th>
                <th className={styles.column5}> Phone </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className={styles.table_data}>
          <table>
            <tbody>
              
              {list.map(item => (
                <tr
                  className={styles.table_row}
                  key={item.index}
                  onClick={() => onClickItem(item)}
                >
                  <td className={styles.column1}> {item.id} </td>
                  <td className={styles.column2}> {item.firstName} </td>
                  <td className={styles.column3}> {item.lastName} </td>
                  <td className={styles.column4}> {item.email} </td>
                  <td className={styles.column5}> {item.phone} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
              <div className={styles.info_wrapper}><h1>Details</h1>
    <p>Click on a table item to get detailed information</p> {selectedUser && <Detail user={selectedUser} />}
    </div>
    </div>
    </main>
    </div>

  );
};
export default List
