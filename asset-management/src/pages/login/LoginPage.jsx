import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.min.css";
import jwt from 'jwt-decode'; // import dependency
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import useAuth from "../../hooks/useAuth";
import { authenticate } from "../../services";
import "./login.css";

function LoginPage() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const {user,setUser} = useAuth();
  const navigate = useNavigate();


  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  // console.log("state : ",login)

  const onFinish = async (user) => {
    
    try {
        const response = await authenticate(user);

        const respondedUser = jwt(response.data.jwtToken)
        console.log("return user ",respondedUser)



        setUser({
            username : respondedUser.sub,
            type : respondedUser.role[0].authority
        })
        localStorage.setItem('token',response.data.jwtToken)

        navigate("/")
        
        // console.log("response : ",response)
    } catch (error) {
        if(error.response.data.status===401){
            console.log("401 error ",error)
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


  
  };

  return (
    
    <section className="login-page">
      <h1>Login</h1>
      <Form onFinish={onFinish} className="login-form">
        <Form.Item name="username">
          <Input
            name="username"
            onChange={handleChange}
            size="large"
            placeholder="Username"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item name="password">
          <Input
            name="password"
            onChange={handleChange}
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="center-button">
            <Button
              type="primary"
              htmlType="submit"
              disabled={!login.username || !login.password}
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
