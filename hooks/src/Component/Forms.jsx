import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = data => {
      console.log(data);
      setIsSubmitted(true);
  };



  return (
    <div className="main">
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      {isSubmitted && !Object.keys(errors).length && (
                <div className="pop"><p className="registered-heading">Registered Successfully</p></div>
    )}
        <h2>Registration form</h2>

        <div className="form-group">
          <input
            {...register('firstname', {
              required: 'This field is required',
              minLength: { value: 4, message: 'Minimum 4 characters are required' },
              maxLength: { value: 20, message: 'Maximum length is 20 characters' },
            })}
            placeholder="Enter your firstname"
          />
          {errors.firstname && <span className="error-message">{errors.firstname.message}</span>}
        </div>

        <div className="form-group">
          <input
            {...register('lastname', {
              required: 'This field is required',
              minLength: { value: 4, message: 'Minimum 4 characters are required' },
              maxLength: { value: 20, message: 'Maximum length is 20 characters' },
            })}
            placeholder="Enter your lastname"
          />
          {errors.lastname && <span className="error-message">{errors.lastname.message}</span>}
        </div>

        <div className="form-group">
          <input
            {...register('email', {
              required: 'This field is required',
              minLength: { value: 4, message: 'Minimum 4 characters are required' },
              maxLength: { value: 30, message: 'Maximum length is 30 characters' },
            })}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <input
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 4, message: 'Minimum 4 characters are required' },
              maxLength: { value: 20, message: 'Maximum length is 20 characters' },
            })}
            placeholder="Enter your password"
            type="password"
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Forms;
