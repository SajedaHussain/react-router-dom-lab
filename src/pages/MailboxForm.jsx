import React, { useState, useEffect } from 'react'
import axios from 'axios'

function MailboxForm() {
  const [formData, setFormData] = useState({
    owner: '',
    size: ''

  })


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const cratedMail = await axios.post(import.meta.env.VITE_API_URL, formData)
      // console.log(cratedMail)

    }
    catch (error) { console.log(error) }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    // console.log(formData)
  }


  return (
    <div>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="owner">Enter a Boxholder:</label>
        <input onChange={handleChange} type="text" name="owner" id="owner" value={formData.owner} />

        <select name="size" value={formData.size} onChange={handleChange}>
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Create Mailbox</button>



      </form>
    </div>
  )
}

export default MailboxForm
