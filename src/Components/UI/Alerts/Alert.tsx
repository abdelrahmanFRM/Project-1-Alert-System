import { CircleX } from "lucide-react";
import "./Alert.scss";
import { ReactNode } from "react";

interface IProps {
  title: string;
  description?: string;
  children?: ReactNode;
  icon: ReactNode;
  type: alterTypes;
}

type alterTypes =
  | "alert-denger"
  | "alert-success"
  | "alert-info"
  | "alert-wraning";
const Alert = ({ title, icon, description, type, children }: IProps) => {
  return (
    <div className={type}>
      <div className="title-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <div>
          <CircleX style={{ cursor: "pointer" }} />
        </div>
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
