import { useEffect, useState } from "react"
import Header from "./components/Header"
import PrintOptions from "./components/PrintOptions"

function App() {
    const [paperSize, setPaperSize] = useState('a3');

    const handlePaperSize = (size) => {
        setPaperSize(size);
    }

    useEffect(() => {
    const styleId = 'dynamic-print-style';
    let styleEl = document.getElementById(styleId);

    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
    }

    let pageCSS = '';
    if (paperSize === 'a4') {
            pageCSS = `
                @page {
                    size: A4 landscape;
                }
            `;
        } else if (paperSize === 'a3') {
            pageCSS = `
                @page {
                    size: A3 landscape;
                }
            `;
        }

        styleEl.innerHTML = pageCSS;
    }, [paperSize])

    return (
        <div className={`${paperSize == 'a4' ? 'w-[297mm] h-[210mm] text-xs' : 'w-[420mm] h-[297mm] text-sm'} mx-auto overflow-y-auto default-background px-2 md:px-10`}>
            <PrintOptions onPrint={handlePaperSize}/>
            <Header paperSize={paperSize} />
        </div>
    )
}

export default App
