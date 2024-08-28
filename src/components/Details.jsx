import React, { useState, useEffect } from 'react';
import '../css/list.css';

const Details = ({ info }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (info) {
      setLoading(true);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        .then(response => response.json())
        .then(data => {
          setDetails(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setDetails(null);
        });
    }
  }, [info]);

  if (!info) {
    return <div className="details">Выберите пользователя, чтобы увидеть детали</div>;
  }

  if (loading) {
    return <div className="details loading">Загрузка...</div>;
  }

  if (!details) {
    return <div className="details">Данные не найдены</div>;
  }

  const { name, avatar, details: { city, company, position } } = details;

  return (
    <div className="details">
      <h2>{name}</h2>
      <img src={avatar} alt={`${name}'s avatar`} width="150" height="150" />
      <p><strong>City:</strong> {city}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Position:</strong> {position}</p>
    </div>
  );
};

export default Details;

