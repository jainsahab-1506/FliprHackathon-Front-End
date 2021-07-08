<<<<<<< HEAD:src/Components/ManageEmails.js
import {React, useEffect} from 'react'
import { useSelector } from "react-redux";
import Container from './Container';
=======
import React from 'react';

import Container from '../Container';
>>>>>>> dev:src/Components/EmailComps/ManageEmails.js
import EmailGroupTable from './EmailGroupComps/EmailGroupTable.jsx';

export default function ManageEmails() {
	const authToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (!authToken) {
      // dispatch(logOutSuccess({}));
      window.location.href = "/login";
    }
  }, []);
	return (
		<div>
			<Container children={<EmailGroupTable />} />
		</div>
	);
}
