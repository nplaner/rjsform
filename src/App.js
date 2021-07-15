import React, { useState, useEffect } from "react";
import Form from "@rjsf/core";

const schema = {
  title: "Data Surge LLC",
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

const ArrayFieldTemplate = (props) => {
  return (
    <div>
      {props.items.map(element => element.children)}
      {props.canAdd && <button type="button" onClick={props.onAddClick}>Add new task</button>}
    </div>
  );
}

const CustomFieldTemplate = (props) => {
  const {id, classNames, label, required, children} = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}{required ? "*" : null}</label>
      {children}
    </div>
  );
}

const CustomTitleField = () => {
  return <div id="custom">Employee Task Form</div>;
};

const fields = {
  TitleField: CustomTitleField
};

const App = () => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    })
  }, [lat, lon])

  return (
    <div>
      <Form 
      schema={schema}
      ArrayFieldTemplate={ArrayFieldTemplate}
      FieldTemplate={CustomFieldTemplate}
      fields={fields}
      onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
      />
      <p>Current longitude and latitude: {lon}, {lat}</p>
    </div>
  );
}

export default App;
