import React from 'react';

import Container from '../Container';
import EmailGroupTable from './EmailGroupComps/EmailGroupTable.jsx';

export default function ManageEmails() {
	return (
		<div>
			<Container children={<EmailGroupTable />} />
		</div>
	);
}
