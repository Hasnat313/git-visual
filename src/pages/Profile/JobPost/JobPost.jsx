// Library Imports
import { useState } from "react";
import { Row, Col, Typography, Form, Input, Button, Space, Select, Upload } from "antd";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";

// Pages, Components, Media & StyleSheets

import "./JobPost.scss";
import Banner from "../../../components/Banner/Banner";
import BannerImage from "../../../assets/Banners/banner3.png";

// Library Constants
const { Text, Title } = Typography;

export default function JobPost() {
	const [value, setValue] = useState(" ");

	const modules = {
		toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"]],
	};

	const formats = ["header", "bold", "italic", "underline"];

	const options = [];
	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		});
	}

	const uploadLogo = (data) => {
		// console.log(data);
		// setTradeLicense(data?.fileList);
		// console.log("tradeLicense State", tradeLicense);
	};

	return (
		<Col className="JobPost" span={24}>
			<Row justify="center" style={{ overflow: "hidden", width: "100%" }}>
				<Col span={24} className="banner">
					<Banner Image={BannerImage} />
				</Col>

				<Col xs={{ span: 20 }} sm={{ span: 18 }} md={{ span: 16 }} lg={{ span: 14 }} xl={{ span: 12 }} style={{ marginTop: "3rem" }}>
					<Col span={24} style={{ marginTop: "1.5rem" }}>
						<Col>
							<Title style={{ color: "white" }} level={3}>
								Post a Job with Gitvisual
							</Title>
							<Text style={{ color: "white" }}>Prospects sent right to your inbox</Text>
						</Col>
					</Col>

					<Col span={24} className="JobPostForm">
						<Title level={4}>Tell us about your role</Title>
						<br />
						<Form
							size="large"
							name="jobpost_form"
							autoComplete="on"
							layout="vertical"
							scrollToFirstError
							requiredMark="optional"
							// onFinish={}
							initialValues={{
								remember: true,
							}}
						>
							<Col span={24}>
								<Form.Item
									label="Job Title"
									name="job"
									rules={[
										{
											required: true,
											// message: "Please enter a valid name!",
										},
										{ min: 2, message: "Too Short!" },
										{ max: 50, message: "Too Long!" },
									]}
								>
									<Input />
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Job Description"
									name="description"
									rules={[
										{
											required: true,
											message: "Describe yourself!",
										},
										{ min: 2, message: "Too Short!" },
										{ max: 200, message: "Too Long!" },
									]}
								>
									<ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={setValue} />
									{/* <Input.TextArea /> */}
								</Form.Item>
							</Col>

							{/* <Title level={5}>Social Profile</Title> */}

							<Col span={24} style={{ display: "flex", alignContent: "center", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
								<Form.Item
									style={{ flex: 1 }}
									label="Job Location City"
									name="city"
									rules={[
										{
											required: true,
											message: "Please enter a valid Location!",
										},
									]}
								>
									<Input />
								</Form.Item>
								<Form.Item
									style={{ flex: 1 }}
									label="Job Location Country"
									name="country"
									rules={[
										{
											required: true,
											message: "Please enter a valid Location!",
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Workplace Type"
									name="workplaceType"
									rules={[
										{
											required: true,
											message: "Please enter a valid Type!",
										},
									]}
								>
									<Select>
										<Select.Option value="permanent">Permanent</Select.Option>
										<Select.Option value="contract">Contract</Select.Option>
										<Select.Option value="freelance">Freelance</Select.Option>
										<Select.Option value="other">Other</Select.Option>
									</Select>
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Experience"
									name="expereince"
									rules={[
										{
											required: true,
											message: "Please enter your Expereince!",
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Employment Type"
									name="employmentType"
									rules={[
										{
											required: true,
											message: "Enter Employment Type!",
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Link to application"
									name="linkApplication"
									rules={[
										{
											required: true,
											message: "Please enter application link!",
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>

							<Col span={24} className="companyInfo">
								<Text type="secondary">Company Location</Text>
								<Col span={24}>
									<Form.Item
										label="What is your companies name"
										name="companyName"
										rules={[
											{
												required: true,
												message: "Please enter Comapany Name!",
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>

								<Col span={24}>
									<Form.Item
										label="Company Logo "
										name="companyLogo"
										rules={[
											{
												required: true,
												message: "Please select Comapany Logo!",
											},
										]}
									>
										{/* <Input /> */}

										<Upload
											maxCount={1}
											listType="picture"
											onChange={uploadLogo}
											// defaultFileList={[...tradeLicense]}
											beforeUpload={(file) => {
												const reader = new FileReader();
												reader.onload = (e) => {
													//   console.log("File Reader", e.target.result);
												};
												// reader.readAsText(file);

												// Prevent upload
												return false;
											}}
										>
											<Button>Choose Image</Button>
										</Upload>
									</Form.Item>
								</Col>

								<Col span={24}>
									<Form.Item
										label="Company website "
										name="companyWebsite"
										rules={[
											{
												required: true,
												message: "Please enter Comapany Website!",
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
							</Col>

							<Col span={24}>
								<Form.Item
									label="Tags"
									name="tags"
									rules={[
										{
											required: true,
											message: "Please enter tags!",
										},
									]}
								>
									{/* <Input /> */}
									<Select
										mode="tags"
										size="large"
										placeholder="Please select"
										defaultValue={["a10", "c12"]}
										//   onChange={handleChange}
										style={{
											width: "100%",
										}}
										options={options}
									/>
								</Form.Item>
							</Col>

							<Col span={24} style={{ textAlign: "end" }}>
								<Space direction="horizontal">
									<Form.Item>
										<Link to="/">
											<Button type="ghost" className="cancel">
												Cancel
											</Button>
										</Link>
									</Form.Item>

									<Form.Item>
										<Button
											type="primary"
											className="save"
											htmlType="submit"
											// block
										>
											Continue
										</Button>
									</Form.Item>
								</Space>
							</Col>
						</Form>
					</Col>
				</Col>
			</Row>
		</Col>
	);
}
