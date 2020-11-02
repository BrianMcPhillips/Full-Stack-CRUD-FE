import React, { useState } from 'react';
import FormInput from '../components/Input/Input';
import { createMicrophone } from '../services/microphoneAPI';

const FormInputPage = () => {
  const [form, setForm] = useState({
    model: '',
    brand: '',
    pattern: '',
    microphoneType: '',
    price: '',
    summary: '',
  });

  const onSubmit = async(form) => {
    await createMicrophone(...form)
      .then(res => res.ok);
  };

  const onChange = e => {
    e.preventDefault();
    setForm([
      ...form,
      [e.target.name],
      e.target.value
    ]);
  };

  return (
    <FormInput 
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default FormInputPage;
