import { Form } from 'antd';

type Test = {
  value: string[] | null;
}

type Test2 = {
  value: string[] | undefined;
}

export default function App() {
  const [form] = Form.useForm<Test>();

  const test: Test = {
    value: []
  }

  // Error
  form.setFieldsValue(test)

  const test2: Test2 = {
    value: []
  }

  // Fine
  form.setFieldsValue(test2)

  return (
    <Form form={form}/>
  )
}