import React, { useState } from 'react'
// import settings from '../lib/settings';

function PrintOptions({ onPrint }) {
    const [settingId, setSettingId] = useState(1);

    const handleChange = (e) => {
        const selectedSetting = Number(e.target.value);
        setSettingId(selectedSetting);
        onPrint(selectedSetting - 1);
    };

    return (      
        <div className='print:hidden text-lg border w-fit px-4'>
            <label htmlFor='paperSize'>
                Paper Size:{" "}
                <select
                    className='capitalize'
                    id='paperSize'
                    value={settingId}
                    onChange={handleChange}
                >
                    {/* {settings.map((setting) => (
                        <option key={setting.id} className='capitalize' value={setting.id}>{setting.name}</option>
                    ))} */}
                    <option value='4' className='capitalize'>a3-portrait</option>
                </select>
            </label>
        </div>
    );
}

export default PrintOptions