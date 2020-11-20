import { FC, useRef, useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Hero from 'components/Hero';

type FormData = {
  name: string
  email: string
  message: string
}

const contact: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const layoutRef = useRef<HTMLDivElement>(null);

  const onSubmit = (formData: FormData) => {
    setSubmitting(true);
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then((response) => {
      setSubmitting(false);
      setSubmitted(true);
      reset();
    });
  };

  return (
    <Layout page='contact' title='Contact' fixedFooter>
      <Hero
        layoutRef={layoutRef}
        imgSrc='img/contact.jpg'
        contactPage
      >
        {submitted ? <h5 className='display-5 mt-4 mb-8'>Thank you, I will get back to you soon!</h5> : (
          <>
            <h5 className='display-5'>Have a question or want to work together?</h5>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Row>
                <Form.Group as={Col} controlId='name' xs={12} sm={6}>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control name='name' type='text' ref={register} required />
                </Form.Group>
                <Form.Group as={Col} controlId='email' xs={12} sm={6}>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control name='email' type='email' ref={register} required />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId='message'>
                <Form.Label>Message:</Form.Label>
                <Form.Control name='message' as='textarea' rows={3} ref={register} required />
              </Form.Group>
              <Form.Group controlId='submit' className='text-center'>
                <Button type='submit' variant='light' size='lg' className='mt-2 mt-md-4 mb-5 mb-md-0'>{submitting ? 'Sending...' : "Let's Connect"}</Button>
              </Form.Group>
            </Form>
          </>
        )}
      </Hero>
    </Layout>
  );
};

export default contact;
