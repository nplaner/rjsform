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
// const uiSchema = {
//   age: {"ui:widget": "updown"}
// };

const App = () => {
  return (
      <Form schema={schema} />
  );
}

export default App;
