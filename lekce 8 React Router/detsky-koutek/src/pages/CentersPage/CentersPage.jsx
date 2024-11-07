// CentersPage.jsx
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const CentersPage = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/centers");
        const data = await res.json();
        setCenters(data.data); // используем data.data, если API возвращает объект
      } catch (error) {
        console.error("Ошибка при загрузке центров:", error);
      }
    };
    fetchCenters();
  }, []);

  return (
    <div>
      <h2>Centers</h2>
      <ul>
        {centers.map((center) => (
          <li key={center.id}>
            <Link to={`/pobocky/${center.id}`}>
              {center.name}, {center.address}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet /> {/* для отображения CenterDetail */}
    </div>
  );
};

