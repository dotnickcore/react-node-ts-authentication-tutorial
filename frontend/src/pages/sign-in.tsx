import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Typography } from 'antd';
const { Title, Paragraph } = Typography;

export default function SignInPage() {
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
            Log In
          </Title>
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
              Log In
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <Paragraph className="color-paragraph">
            Don't have an account? <a href='/login'>Sign Up</a>
          </Paragraph>
        </div>
      </Card>
    </div>
  );
}