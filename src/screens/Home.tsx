import React, { CSSProperties } from 'react'

export const Home = () => {
    return (
        <div style={styles.container} className="container mt-4">
            <div className="list">
                {
                    
                }
            </div>
           
        </div>
    )
}

interface StylesProps{
  container:CSSProperties
  list:CSSProperties
  

}
const styles:StylesProps = {
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  list:{
    width:500,
    padding:10,
  },
 
}