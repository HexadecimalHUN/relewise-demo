import { useState, Dispatch, SetStateAction } from 'react';

export default function Home() {
    const [exerciseOneData, setExerciseOneData] = useState<string | null>(null);
    const [exerciseTwoData, setExerciseTwoData] = useState<string | null>(null);
    const [exerciseThreeData, setExerciseThreeData] = useState<string | null>(null);
    const [exerciseFourData, setExerciseFourData] = useState<string | null>(null);
    const [loading, setLoading] = useState({ one: false, two: false, three: false });

    // Manually crafting raw JSON string
    const requestBody = {
        datasetId: "00000000-0000-0000-0000-000000000001",
        apiKey: "test-api-key",
        jobConfiguration: {
            config1: "value1",
            config2: "value2"
        }
    };

    // Function to make a POST request with body
    const fetchData = async (url: string, setData: Dispatch<SetStateAction<string | null>>, setLoadingKey: string) => {
        console.log(`Starting fetch for ${url}`); // Log URL being fetched
        setLoading((prev) => ({ ...prev, [setLoadingKey]: true }));
        console.log('Request body:', JSON.stringify(requestBody)); // Log the request body

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody), // Convert the JS object to JSON string
            });

            console.log(`Response status for ${url}:`, response.status); // Log the response status

            if (!response.ok) {
                console.error(`Failed to fetch data from ${url}, status: ${response.status}`);
                setData('Error fetching data');
                return;
            }

            const data = await response.json();
            console.log('Received data:', data); // Log the received data

            const displayMessage = data.message || JSON.stringify(data, null, 2) || 'No message received';
            setData(displayMessage);
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error); // Log any error that occurs
            setData('Error fetching data');
        } finally {
            setLoading((prev) => ({ ...prev, [setLoadingKey]: false }));
            console.log(`Finished fetch for ${url}`); // Log when the fetch is complete
        }
    };

    // Fetch data for Exercise 1
    const fetchExerciseOne = () => fetchData('http://localhost:5000/api/exerciseone/execute', setExerciseOneData, 'one');

    // Fetch data for Exercise 2
    const fetchExerciseTwo = () => fetchData('http://localhost:5000/api/exercisetwo/execute', setExerciseTwoData, 'two');

    // Fetch data for Exercise 3
    const fetchExerciseThree = () => fetchData('http://localhost:5000/api/exercisethree/execute', setExerciseThreeData, 'three');

     // Fetch data for Exercise 4
     const fetchExerciseFour = () => fetchData('http://localhost:4000/api/exercisefour/execute', setExerciseFourData, 'four');

    return (
        <div className='flex w-screen h-screen min-h-screen bg-blue-500 flex-col items-center'>
            <h1 className='text-3xl text-white mt-10 mb-10 font-semibold'>API Data Showcase</h1>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-10">
                    <div className='flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96'>
                        <h2 className='text-lg font-semibold'>Exercise 1</h2>
                        <button className="bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72" onClick={fetchExerciseOne} disabled={loading.one}>
                        {loading.one ? 'Loading...' : 'Fetch Data 🚀'}
                        </button>
                        <pre>{exerciseOneData || 'No data yet 😔'}</pre>
                        <div className='flex flex-col p-2 bg-blue-100 text-center rounded-md'>
                            <h1 className='text-md font-semibold'>API Address 👮📬 </h1>
                            <div className='flex flex-row justify-center'>
                                <h1>Method:</h1>
                                <h1 className='font-semibold text-blue-800'>POST</h1>
                            </div> 
                            <h2>http://localhost:5000/api/exerciseone/execute</h2>
                        </div>
                    </div>

                    <div className='flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96'>
                        <h2 className='text-lg font-semibold'>Exercise 2</h2>
                        <button className='bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72' onClick={fetchExerciseTwo} disabled={loading.two}>
                            {loading.two ? 'Loading...' : 'Fetch Data 🚀'}
                        </button>
                        <pre>{exerciseTwoData || 'No data yet 😔'}</pre>
                        <div className='flex flex-col p-2 bg-blue-100 text-center rounded-md'>
                            <h1 className='text-md font-semibold'>API Address 👮📬 </h1>
                            <div className='flex flex-row justify-center'>
                                <h1>Method:</h1>
                                <h1 className='font-semibold text-blue-800'>POST</h1>
                            </div> 
                            <h2>http://localhost:5000/api/exercisetwo/execute</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-10">
                    <div className='flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96'> 
                        <h2 className='text-lg font-semibold'>Exercise 3</h2>
                        <button className='bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72' onClick={fetchExerciseThree} disabled={loading.three}>
                        {loading.three ? 'Loading...' : 'Fetch Data 🚀'}
                        </button>
                        <pre>{exerciseThreeData || 'No data yet 😔'}</pre>
                        <div className='flex flex-col p-2 bg-blue-100 text-center rounded-md'>
                            <h1 className='text-md font-semibold'>API Address 👮📬 </h1>
                            <div className='flex flex-row justify-center'>
                                <h1>Method:</h1>
                                <h1 className='font-semibold text-blue-800'>POST</h1>
                            </div> 
                            <h2>http://localhost:5000/api/exercisethree/execute</h2>
                        </div>
                    </div>
                    <div className='flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96'> 
                        <h2 className='text-lg font-semibold'>Exercise 1 In Express.JS</h2>
                        <button className='bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72' onClick={fetchExerciseFour} disabled={loading.three}>
                        {loading.three ? 'Loading...' : 'Fetch Data 🚀'}
                        </button>
                        <pre>{exerciseFourData || 'No data yet 😔'}</pre>
                        <div className='flex flex-col p-2 bg-blue-100 text-center rounded-md'>
                            <h1 className='text-md font-semibold'>API Address 👮📬 </h1>
                            <div className='flex flex-row justify-center'>
                                <h1>Method:</h1>
                                <h1 className='font-semibold text-blue-800'>POST</h1>
                            </div> 
                            <h2>http://localhost:4000/api/exercisefour/execute</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}