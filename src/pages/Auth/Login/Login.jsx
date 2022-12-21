import { Button, Col, Divider, Form, Input, Row, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import "./../Auth.scss";
import { useFormik } from "formik";
import { userLogin } from "../../../Api";
import { toast } from "react-hot-toast";
const { Title, Text } = Typography;

export default function Login() {
	const navigate = useNavigate();
	const { values, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: async (values) => {
			try {
				const data = await userLogin(values);
				console.log("clicked");
				console.log(data.data.tokens.access.token);
				localStorage.setItem("access_token", JSON.stringify(data.data.tokens.access.token));
				localStorage.setItem("refresh_token", JSON.stringify(data.data.tokens.refresh.token));
				console.log(data.data.tokens.refresh.token);
				if (data.status === 200) {
					console.log("clicked");
					navigate("/");
				}
			} catch (e) {
				console.log(e);
				toast(e?.response?.data?.message);
			}
		},
	});
	console.log(values);

	return (
		<Col span={24} className="background_cover" style={{ minheight: "100vh", padding: "60px 90px", overflow: "hidden" }}>
			<Col className="card" lg={{ span: 10 }} md={{ span: 16 }} sm={{ span: 20 }}>
				<Row
					style={{
						overflow: "hidden",
						padding: "70px",
						width: "100%",
					}}
					gutter={[0, 20]}
					className="card_inner"
				>
					<Col span={24} style={{ textAlign: "center" }}>
						<Title level={2}>Gitvisual</Title>
						<Text type="secondary">Develop your image</Text>
					</Col>

					<Col span={24}>
						<Button className="google" block>
							<Space>
								<FcGoogle /> <Text>Sign in with Google</Text>
							</Space>
						</Button>
					</Col>

					<Divider plain>Or</Divider>

					<Col span={24}>
						<Form
							className="form"
							size="large"
							name="login_form"
							autoComplete="on"
							layout="vertical"
							scrollToFirstError
							requiredMark="optional"
							// onFinish={}
							initialValues={{
								remember: true,
							}}
						>
							<Form.Item
								name="email"
								label="Your email"
								rules={[
									{
										required: true,
										message: "Please enter a valid email!",
									},
									{
										pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: "Please enter a valid email!",
									},
								]}
							>
								<Input placeholder="Write your email" name="email" onChange={handleChange} value={values.email} />
							</Form.Item>

							<Form.Item
								label="Choose a password"
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your password!",
									},
								]}
							>
								<Input.Password placeholder="Password" name="password" onChange={handleChange} value={values.password} />
							</Form.Item>

							<Form.Item>
								<Button type="primary" className="primary_btn" htmlType="submit" onClick={handleSubmit}>
									Login
								</Button>
							</Form.Item>
						</Form>
					</Col>

					<Col span={24} style={{ textAlign: "center" }}>
						<Text>
							Don’t have an account? &nbsp;
							<Link to="/auth/signup">
								<Text style={{ color: "#1565D8" }}>Create Account</Text>
							</Link>
						</Text>
					</Col>
					<Col span={24} style={{ textAlign: "center" }}>
						<Text>
							Forgot Password ? &nbsp;
							<Link to="/auth/forgotpassword">
								<Text style={{ color: "#1565D8" }}>Click Here</Text>
							</Link>
						</Text>
					</Col>
				</Row>
			</Col>
		</Col>
	);
}
