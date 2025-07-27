import React, { Suspense, useEffect, useState } from "react"
import PrintOptions from "./components/PrintOptions"
import settings from "./lib/settings";

function App() {
    const [settingId, setSettingId] = useState(3);
    const [setting, setSetting] = useState(settings[settingId]);

    const Header = React.lazy(() => import(`./pages/${setting.name}/Header.jsx`));
    const Body = React.lazy(() => import(`./pages/${setting.name}/Body.jsx`));

    const handlePaperSize = (id) => {
        setSettingId(id);
    }

    useEffect(() => {
        setSetting(settings[settingId])
    }, [settingId])

    useEffect(() => {
        const styleId = 'dynamic-print-style';
        let styleEl = document.getElementById(styleId);

        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }

        styleEl.innerHTML = `@page {
            size: ${setting.cssPageSize}
        }`;
    }, [setting])

    return (
        <div className={`${setting.tailwindPageSize} ${setting.textSize} mx-auto overflow-y-auto default-background p-4`}>
            <PrintOptions onPrint={handlePaperSize}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Body />
            </Suspense>
        </div>
    )
}

export default App
