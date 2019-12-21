import React, { useState } from 'react';
import axios from 'axios';
import { withSnackbar } from 'notistack';
import './css/book.css';

function Book(props) {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [subject, setSubject] = useState('');
	const [description, setDescription] = useState('');

	const nameHandler = e => {
		setName(e.target.value);
	};
	const phoneHandler = e => {
		setPhone(e.target.value);
	};
	const emailHandler = e => {
		setEmail(e.target.value);
	};
	const websiteHandler = e => {
		setWebsite(e.target.value);
	};
	const subjectHandler = e => {
		setSubject(e.target.value);
	};
	const descriptionHandler = e => {
		setDescription(e.target.value);
	};

	const submitHandler = e => {
		e.preventDefault();
		props.enqueueSnackbar('Thank You For Submitting the form!', {
			variant: 'success',
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right'
			}
		});
		axios
			.post('https://mayankthemagician.herokuapp.com/', {
				name: name,
				phone: phone,
				email: email,
				website: website,
				subject: subject,
				description: description
			})
			.then(() => {
				console.log('Mail sent!');
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<div className="book-container" id="book">
			<p className="book-heading" data-aos="fade-up">
				BOOK FOR A SHOW
			</p>
			<br />
			<br />
			<br />
			<br />
			<br />
			<form onSubmit={submitHandler}>
				<div className="book-subform">
					<input
						type="text"
						name="name"
						placeholder="Name*"
						required
						value={name}
						data-aos="fade-right"
						onChange={nameHandler}
					/>
					<input
						type="number"
						name="phone"
						placeholder="Phone"
						value={phone}
						data-aos="fade-left"
						onChange={phoneHandler}
					/>
				</div>
				<div className="book-subform">
					<input
						type="email"
						name="email"
						placeholder="Email*"
						required
						value={email}
						data-aos="fade-right"
						onChange={emailHandler}
					/>
					<input
						type="url"
						name="website"
						placeholder="Website"
						value={website}
						data-aos="fade-left"
						onChange={websiteHandler}
					/>
				</div>
				<div className="book-subform">
					<input
						type="text"
						name="subject"
						placeholder="Subject*"
						required
						value={subject}
						style={{ width: '100%' }}
						data-aos="fade-up"
						onChange={subjectHandler}
					/>
				</div>
				<textarea
					name="describe"
					rows="3"
					cols="30"
					required
					placeholder="Describe Your Project*"
					value={description}
					data-aos="fade-up"
					onChange={descriptionHandler}
				></textarea>
				<input
					type="submit"
					value="SUBMIT"
					className="book-submit-btn"
					data-aos="fade-up"
				/>
			</form>
		</div>
	);
}

export default withSnackbar(Book);
