import React, { CSSProperties, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface Link{
  title:string
  hora:string
  link:string
}
export const Create = () => {

    const [title, setTitle] = useState<string>("")
    const [hora, setHora] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [links, setlinks] = useState<Link[]>([])
    return (
        <div className="container mt-4" style={styles.container}>
        <div style={styles.form}>
                <label className="form-label">Titulo</label>
                <input type="text" className="form-control" />
                
                <label className="form-label">Hora</label>
                <input type="text" className="form-control" />
                
                <label className="form-label">link</label>
                <input type="text" className="form-control" />
                <button className="btn btn-primary mt-4">Guardar</button>
            </div>
        </div>
    )
}
interface StylesProps{
  form:CSSProperties
  container:CSSProperties
}
const styles:StylesProps = {
  form:{
    width:500,
    padding:10,
  },
  container:{
      display:'flex',
      justifyContent:'center'
  }
}