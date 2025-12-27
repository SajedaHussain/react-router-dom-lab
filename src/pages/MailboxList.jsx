import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'


function MailboxList() {
    const [mail, setMail] = useState([])
    async function getAllMail() {
        try {
            const allMail = await axios.get(import.meta.env.VITE_API_URL)
            setMail(allMail.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{getAllMail()},[])
    return (
        <div>
            {mail.map((one)=>
            <div key={one._id}>
                <h2>{one.owner}</h2> 
                <Link to={`/mailboxes/${one._id}`}> see Mailboxes Details</Link>

            </div>)}

        </div>
    )
}

export default MailboxList
