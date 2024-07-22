import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToRecepie } from './recepieSlice';
import { RootState } from './store';
export default function AddRecipie() {
  const disaptch = useDispatch();
  const recepieItem = useSelector(
    (state: RootState) => state.recepieItem.recepieCart
  );
  interface formData {
    recepie: string;
    ingrident: string;
    preperation: string;
    file: File | null;
  }
  console.log(888888, recepieItem);
  const [formData, setFormData] = useState<formData>({
    recepie: '',
    ingrident: '',
    preperation: '',
    file: null,
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    disaptch(addToRecepie(formData));
  };

  const handleChange = (e: any) => {
    const { name, value, file, type } = e.target;
    if (type === 'file' && file) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: file[0],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  // console.log(77777, formData);
  return (
    <div>
      <h1>ADD RECEPIE ::: </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recepie Name:</label>
          <input
            type="text"
            name="recepie"
            onChange={handleChange}
            value={formData.recepie}
            required
          />
        </div>
        <div>
          <label>Ingredients (one per line):</label>
          <textarea
            name="ingrident"
            onChange={handleChange}
            value={formData.ingrident}
            required
          />
        </div>
        <div>
          <label>Preparation Steps (one per line):</label>
          <textarea
            name="preperation"
            onChange={handleChange}
            value={formData.preperation}
            required
          />
        </div>
        <div>
          <label>Uplaoad Recepie Images:</label>
          <input type="file" name="file" onChange={handleChange} required />
        </div>
        <button type="submit">Submit Your Recepie</button>
      </form>
    </div>
  );
}
