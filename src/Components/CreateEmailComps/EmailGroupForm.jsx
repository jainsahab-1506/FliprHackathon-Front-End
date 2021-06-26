import React, { useState } from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';

import '@pathofdev/react-tag-input/build/index.css';
import TagsInput from './TagsInput';

export default function EmailGroupForm() {
	const [emailFormData, setEmailFormData] = useState({
		groupName: '',
		to: [],
		cc: [],
		bcc: [],
	});

	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		const file = event.target.files[0];
		new Response(file).json().then(
			(data) => {
				var newLists = {};
				if (data.to) newLists.to = data.to;
				if (data.cc) newLists.cc = data.cc;
				if (data.bcc) newLists.bcc = data.bcc;

				console.log(newLists);

				setEmailFormData((previous) => {
					return {
						...previous,
						...newLists,
					};
				});
			},
			(err) => {
				alert('The uploaded file could not be parsed. ');
			}
		);
		setSelectedFile(file);
		setIsSelected(true);
	};

	const handleSubmission = () => {};

	const changeGroupName = (event) => {
		const newGroupName = event.target.value;
		setEmailFormData((previous) => {
			return {
				...previous,
				groupName: newGroupName,
			};
		});
	};

	const printFormData = (event) => {
		event.preventDefault();
		console.log(emailFormData);
	};

	const selectedTags = (tags, list) => {
		switch (list) {
			case 'to': {
				setEmailFormData((previous) => {
					return {
						...previous,
						to: tags,
					};
				});
				break;
			}
			case 'cc': {
				setEmailFormData((previous) => {
					return {
						...previous,
						cc: tags,
					};
				});
				break;
			}
			case 'bcc': {
				setEmailFormData((previous) => {
					return {
						...previous,
						bcc: tags,
					};
				});
				break;
			}
		}
	};

	return (
		<div className='inner'>
			<h1>Create Email Group</h1>
			<div class='form-container'>
				<form id='email-form'>
					<div class='form-group'>
						<label for='groupName'>Group Name</label>
						<input
							type='text'
							class='text-input'
							id='groupName'
							name='groupName'
							value={emailFormData.groupName}
							onChange={changeGroupName}
						/>
					</div>
					<div class='form-group'>
						<label for='to'>TO</label>

						<TagsInput
							selectedTags={selectedTags}
							list='to'
							tags={emailFormData.to}
						/>
					</div>
					<div class='form-group'>
						<label for='cc'>CC</label>
						<div class='textarea-cont'>
							<TagsInput
								selectedTags={selectedTags}
								list='cc'
								tags={emailFormData.cc}
							/>
						</div>
					</div>
					<div class='form-group'>
						<label for='bcc'>BCC</label>
						<div class='textarea-cont'>
							<TagsInput
								selectedTags={selectedTags}
								list='bcc'
								tags={emailFormData.bcc}
							/>
						</div>
					</div>
					<div class='submit-sec'>
						<div class='upload-sec'>
							<a href='' class='upload-btn'>
								<span class='material-icons'>cloud_upload</span>
							</a>
							<h5>Upload with JSON</h5>
						</div>
						<div class='submit-cont' onClick={printFormData}>
							<a href='' class='save-btn'>
								Save
							</a>
						</div>

						<input type='file' name='file' onChange={changeHandler} />
					</div>
				</form>
			</div>
		</div>
	);
}
