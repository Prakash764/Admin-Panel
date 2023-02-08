import React from 'react';
import styles from './style.module.css'

const Card = props => {
  const { user } = props

  return (
    
    <div className={styles.info_content}>
    <div className={styles.card}>
      <p className={styles.info}>User Selected : 
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </p>
      <p className={styles.desc}><h3 className={styles.info_desc}>Description : </h3><br/>{user.description}</p>
      <p className={styles.info}>Address :
      <span>{user.address.streetAddress}</span><br/>
      <span>City : {user.address.city}</span><br/>
      <span>State : {user.address.state}</span><br/>
      <span>Zip : {user.address.zip}</span><br/>
      </p>
    </div>
    </div>
    
  )
}

export default Card