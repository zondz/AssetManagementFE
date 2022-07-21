import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.min.css";
import { useRef, useState } from "react";
import "./login.css";


function LoginPage() {
const [form] = Form.useForm();

const [login,setLogin]=useState({
    username : '',
    password : '',
})

const handleChange = (event)=>{
    setLogin({
        ...login,
        [event.target.name]:event.target.value
    })
}

// console.log("state : ",login)
 
  const onFinish =  async (value)=>{
      console.log("value " ,value)
  }




  return (
    

    <section className="login-page">
   

      <h1>Login</h1>
      <Form
            onFinish={onFinish}
            className="login-form"
      >
        <Form.Item
         name="username"
        >
        <Input
          name="username"
          onChange={handleChange}
          size="large"
          placeholder="Username"
          prefix={<UserOutlined />}
        />
        </Form.Item>
        <Form.Item
        name="password"
        >
        <Input
        name="password"
        onChange={handleChange}
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        </Form.Item>
        <Form.Item >
        <div className="center-button">
        <Button type="primary" htmlType="submit" disabled={(!login.username)||(!login.password)}
        >
          Log in
        </Button>
        </div>
        </Form.Item>
      </Form>
    
    </section>
  );
}

export default LoginPage;
