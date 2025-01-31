import React, { useState, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [ error, setError ] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const isSubmitDisabled = error.name || error.email || error.message || !formData.name || !formData.email || !formData.message;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        console.log("Error state updated:", error);
    }, [error]); 

    const validateForm = () => {
        let valid = true;
        let newErrors = {name: '', email: '', message: ''};
        console.log(formData.name.trim().length < 3)
        if (formData.name.trim().length < 3) {
            console.log(formData.name.trim().length < 3 + " name");
            newErrors.name = "Name field must be at least 3 characters";
            valid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            console.log(!/\S+@\S+\.\S+/.test(formData.email) + " email");
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (formData.message.trim().length < 10) {
            console.log(formData.message.trim().length < 10 + " message");
            newErrors.message = "Message field must be at least 10 characters";
            valid = false;
        }
        
        setError(newErrors);
        console.log(error);
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            setIsSubmitted(false);
        } else {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setError({ name: '', email: '', message: '' });
        }
    }

    return (
        <div>
            <h2>Contact Form</h2>

            {isSubmitted && <div role="alert" style={{ color: "green"}}> Form is submitted successfully! </div>}

            <form onSubmit={(e) => handleSubmit(e)} aria-labelledby="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                    {error.name && <span style={{color: 'red', marginLeft: '10px'}} role="alert">{error.name}</span> }
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
                    {error.email && <span style={{color: 'red', marginLeft: '10px'}} role="alert">{error.email}</span> }
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required/>
                    {error.message && <span style={{color: 'red', marginLeft: '10px'}} role="alert">{error.message}</span> }
                </div>

                <button type="submit" disabled={isSubmitDisabled} aria-disabled={isSubmitDisabled}>submit</button>
            </form>
        </div>
    );
}

export default ContactForm;