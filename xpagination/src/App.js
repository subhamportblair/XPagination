import { useEffect, useState } from "react";
import "./styles.css";
import Table from "./table";

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(10);
  const lastPostIndex = currentPage * postperPage;
  const firstPost = lastPostIndex - postperPage;
  const currentPost = data.slice(firstPost, lastPostIndex);

  async function apicall() {
    try {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const apiData = await res.json();
      console.log(apiData);
      setData(apiData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <Table data={currentPost} />
      <div>
        <button
          onClick={() => {
            setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
          }}
        >
          Previous
        </button>
        <button>{currentPage}</button>
        <button
          onClick={() => {
            const totalPages = Math.ceil(data.length / postperPage);
            setCurrentPage(
              currentPage < totalPages ? currentPage + 1 : currentPage
            );
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
