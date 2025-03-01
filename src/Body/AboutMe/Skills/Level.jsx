export default function Level({ level,theme,reversetheme }) {
    return (
        <div 
            className={`relative w-2/4 rounded-3xl h-10 bg-${theme} border border-gray-400 overflow-hidden`}
            role="progressbar"
            aria-valuenow={level}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div
                className={`absolute top-0 left-0 h-10 bg-${reversetheme} transition-all duration-300 ease-in-out`}
                style={{
                    width: `${Math.min(100, Math.max(0, level))}%`,
                    borderRadius: level < 100 ? '3rem 0 0 3rem' : '3rem'
                }}
            ></div>
        </div>
    );
}
