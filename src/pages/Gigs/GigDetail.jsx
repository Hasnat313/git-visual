// import { profile } from "../../utils/data";
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Col,
  Collapse,
  Input,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";
import { Link } from "react-router-dom";

import JobCard from "./Components/JobCard";
import css from "./DiscoverGigs.module.scss";

const { Search } = Input;
const { Panel } = Collapse;
const { Text, Title } = Typography;

const locationOptions = ["Work Remotely", "Relocation"];
const jobOptions = ["Permanent", "Contract", "Freelance", "Other"];

export default function GigDetail() {
  // const userProfile = profile();
  // console.log(userProfile);

  const onSearch = (value) => {
    console.log(value);
  };

  return <h1>Gig DETAIL PAGE</h1>;
}
