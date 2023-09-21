import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {

  let { noteId } = useParams()
  let [note, setNote] = useState ([null])

  useEffect (() => { getNote() }, [noteId])

  let getNote = async () => {
    const response = await fetch(`/api/notes/${noteId}`)
    const data = await response.json()
    setNote (data)
  }

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  )
}

export default NotePage
