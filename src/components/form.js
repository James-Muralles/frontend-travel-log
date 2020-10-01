import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "../API";

const LogEntryForm = ({ location, onClose }) => {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const onSubmit = async (data) => {
		try {
            setLoading(true);
			data.latitude = location.latitude;
			data.longitude = location.longitude;
			const created = createLogEntry(data);
            console.log(created);
            onClose();
		} catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            {error ? <h3 className='error'>{error}</h3> :null}
			<label htmlFor="title">Title</label>
			<input name="title" required ref={register} />
			<label htmlFor="comments">Comments</label>
			<textarea name="comments" rows={3} ref={register} />
			<label htmlFor="description">Description</label>
			<textarea name="description" rows={3} ref={register} />
			<label htmlFor="images">Images</label>
			<input name="images" ref={register} />
			<label htmlFor="visitDate">Visit Date</label>
			<input name="visitDate" type="date" ref={register} required />
    <button disabled={loading}>{loading ? 'Loading...' : 'Create entry'}</button>
		</form>
	);
};

export default LogEntryForm;