import React from 'react';
import s from '../scss/components/_admin.module.scss';

const admin = () => {
  return (
    <div className={s['admin']}>
      <div className={s['admin-box']}>
        <h1>Admin</h1>
        <div className={s['admin-box-btn']}>
          <a href='https://nextporfolio.sanity.studio/' target='_blank'>
            <button>Admin Panel</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default admin;
