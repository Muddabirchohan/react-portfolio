import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import "./Contact.scss"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
    const onSubmit = async (data) => {
      
        const { name, email, subject, message } = data;
        try {
          const templateParams = {
            name,
            email,
            subject,
            message
          };
          await emailjs.send(
            process.env.REACT_APP_SERVICEID,
            process.env.REACT_APP_TEMPLATEID,
            templateParams,
            process.env.REACT_APP_PUBLICKEY
          );
          reset();
        } catch (e) {
          console.log(e);
        }
      };
  

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>

            <h3> Connect with me </h3>
                
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6' style={{height: 60}}>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6' style={{height: 60}}>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                <div className='col' style={{height: 60}}>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                <div className='col' style={{height: 60}}>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                  
                </div>

                {/* <div className='row formRow'>
                  <div className='col'> */}
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
                {/* </div>
                </div> */}
             
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;