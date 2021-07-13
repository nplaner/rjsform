import React, { useState, useEffect } from "react";
import Form from "@rjsf/core";

const schema = {
  title: "Data Surge LLC Employee Form",
  type: "object",
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'number'
    },
    role: {
      type: 'string'
    },
    tasksDone: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          description: { type: 'string' }
        }
      }
    }
  }
};


const App = () => {
  // const [coords, setCoords] = useState({
  //   lon: 0,
  //   lat: 0
  // })
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // setCoords({
      //   ...coords,
      //   lon: position.coords.longitude,
      //   lat: position.coords.latitude
      // })
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      // console.log(('lat:', coords.lat), ('lon:', coords.lon))
    })
  }, [lat, lon])

  return (
    <div>
      <Form 
      schema={schema}
      onChange={console.log('123')}
      onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
      />
      <p>Current longitude and latitude: {lon}, {lat}</p>
    </div>
  );
}

export default App;
