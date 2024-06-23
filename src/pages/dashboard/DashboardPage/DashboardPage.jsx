import { Principal } from "./components/Principal";
import { Sidebar } from "../components/Sidebar";

export function DashboardPage() {
  return (
    <div className="flex my-5 mx-12">
      <Sidebar />
      <Principal />
    </div>
  );
}
