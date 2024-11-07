// CenterDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CenterDetail = () => {
  const { id } = useParams();
  const [center, setCenter] = useState(null);

  useEffect(() => {
    const fetchCenterDetail = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/centers/${id}`);
        const data = await res.json();
        setCenter(data); // убедитесь, что данные правильно извлекаются из ответа
      } catch (error) {
        console.error("Ошибка при загрузке данных центра:", error);
      }
    };
    fetchCenterDetail();
  }, [id]);

  if (!center) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>{center.name}</h3>
      <p>Address: {center.address}</p>
      <p>Capacity: {center.capacity}</p>
      <h4>Open Hours</h4>
      <p>Monday-Friday: {center.open.monFri}</p>
      <p>Saturday: {center.open.sat}</p>
      <p>Sunday: {center.open.sun}</p>
      <p>Description: {center.description}</p>
    </div>
  );
};

