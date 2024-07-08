import React, { useEffect, useState } from 'react';


const Testy = () => {

  const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No data available');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                console.log('Received data from server:', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

  return (
    <div>
            {data ? (
                <div>
                    <h1>Data from server:</h1>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
  )
}

export default Testy
