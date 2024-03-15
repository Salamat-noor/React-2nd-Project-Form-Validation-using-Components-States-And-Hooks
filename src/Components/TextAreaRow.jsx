import React, { useState } from 'react';

function App() {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
    });

    const [data, setData] = useState({
        checkbox1: '',
        checkbox2: '',
        checkbox3: ''
    });

    const handleCheckboxChange = (checkboxName) => {
        setCheckboxes({
            ...checkboxes,
            [checkboxName]: !checkboxes[checkboxName]
        });
        if (!checkboxes[checkboxName]) {
            setData({
                ...data,
                [checkboxName]: `Data for ${checkboxName}`
            });
        } else {
            setData({
                ...data,
                [checkboxName]: ''
            });
        }
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checkboxes.checkbox1}
                    onChange={() => handleCheckboxChange('checkbox1')}
                />
                Checkbox 1
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={checkboxes.checkbox2}
                    onChange={() => handleCheckboxChange('checkbox2')}
                />
                Checkbox 2
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={checkboxes.checkbox3}
                    onChange={() => handleCheckboxChange('checkbox3')}
                />
                Checkbox 3
            </label>
            <div>
                {checkboxes.checkbox1 && <p>{data.checkbox1}</p>}
                {checkboxes.checkbox2 && <p>{data.checkbox2}</p>}
                {checkboxes.checkbox3 && <p>{data.checkbox3}</p>}
            </div>
        </div>
    );
}

export default App;
