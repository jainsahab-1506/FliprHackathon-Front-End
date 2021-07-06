import React from 'react';

import Container from '../Container';
import EmailGroupForm from './EmailGroupComps/EmailGroupForm.jsx';

export default function CreateEmail() {
	return (
		<div>
			<Container children={<EmailGroupForm />} />
		</div>
	);
}
