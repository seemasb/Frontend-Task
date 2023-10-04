import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Universities.css'

export default function Universities() {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://universities.hipolabs.com/search?country=United+States'
                );

                // first 20 records
                const universitiesData = response.data.slice(0, 20).map((uni) => ({
                    name: uni.name,
                    country: uni.country,
                    alpha_two_code: uni.alpha_two_code,
                    number_of_domains: uni.domains
                }));

                setUniversities(universitiesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className='title'>Universities List</h2>
            {universities.length ?
                <table>
                    <thead>
                        <tr>
                            <th>University name</th>
                            <th>Country</th>
                            <th>Alpha Code</th>
                            <th>No. domains</th>
                        </tr>
                    </thead>
                    <tbody>
                        {universities.map((uni, index) => (
                            <tr key={index}>
                                <td>{uni.name}</td>
                                <td>{uni.country}</td>
                                <td>{uni.alpha_two_code}</td>
                                <td>{uni.number_of_domains.length}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                : <div class="loader"></div>}
        </div>
    );
};

