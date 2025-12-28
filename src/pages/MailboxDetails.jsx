import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {LoadingOutlined } from '@ant-design/icons';

function MailboxDetails() {
  const [mail , setMail]= useState(null)
  const {id} = useParams()
  async function getMail(){
    try{
      const foundMail = await axios.get(import.meta.env.VITE_API_URL + '/' + id)
      setMail(foundMail.data)

    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{getMail()},[])
  return (
    <div>
      <h2>Mail Details</h2>
      {mail ? (<>
      <h2>Owner :{mail.owner}</h2>
      <p>size:{mail.size}</p>
      </>): <LoadingOutlined />}
    </div>
  )
}

export default MailboxDetails
