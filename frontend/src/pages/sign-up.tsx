import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Typography } from 'antd';
const { Title, Paragraph } = Typography;

export default function SignUpPage() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // send the data to your backend
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 mx-auto">
      <Card className="w-full max-w-[400px] shadow-lg">
        <div className="text-center mb-6">
          <Title level={2} className="mb-2">
            Create an account
          </Title>
          <Paragraph className="color-paragraph">
            Fill in the details below to get started
          </Paragraph>
        </div>

        <Form
          form={form}
          name='signup'
          layout='vertical'
          onFinish={onFinish}
          autoComplete='off'
          requiredMark={false}
        >
          <Form.Item
            name='name'
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input
              prefix={<UserOutlined className="color-icon-style" />}
              placeholder='Full Name'
              size='large'
            />
          </Form.Item>

          <Form.Item
            name='email'
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="color-icon-style" />}
              placeholder='Email Address'
              size='large'
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[
              { required: true, message: 'Please enter your password' },
              { min: 8, message: 'Password must be at least 8 characters' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="color-icon-style" />}
              placeholder='Password'
              size='large'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              size='large'
              style={{ width: '100%', marginTop: '8px' }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <Paragraph className="color-paragraph">
            Already have an account? <a href='/login'>Log in</a>
          </Paragraph>
        </div>
      </Card>
    </div>
  );
}