import { Languages, Framwork } from '../../../data';
import Level from './Level';

export default function Skills({ theme, reversetheme }) {
  return (
    <div className="my-10">
      <h2 className={`text-4xl text-${reversetheme} font-bold mb-8 text-center`}>My Technical Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Languages Section */}
        <div className={`p-6 rounded-lg bg-${theme} border border-${reversetheme} bg-opacity-20`}>
          <h3 className={`text-2xl text-${reversetheme} font-bold mb-4`}>Programming Languages</h3>
          <div className="space-y-6">
            {Languages.map((lang, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <h4 className={`text-xl text-${reversetheme} font-semibold`}>{lang.name}</h4>
                  <span className={`text-${reversetheme}`}>{lang.level}%</span>
                </div>
                <Level theme={theme} reversetheme={reversetheme} level={lang.level} />
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className={`p-6 rounded-lg bg-${theme} border border-${reversetheme} bg-opacity-20`}>
          <h3 className={`text-2xl text-${reversetheme} font-bold mb-4`}>Frameworks & Libraries</h3>
          <div className="space-y-6">
            {Framwork.map((fw, index) => (
              fw.name ? (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className={`text-xl text-${reversetheme} font-semibold`}>{fw.name}</h4>
                    <span className={`text-${reversetheme}`}>{fw.level}%</span>
                  </div>
                  <Level theme={theme} reversetheme={reversetheme} level={fw.level} />
                </div>
              ) : null
            ))}
            {/* If framwork array is empty or has no names, show this */}
            {Framwork.every(fw => !fw.name) && (
              <div className={`text-${reversetheme} text-center py-6`}>
                <p>Framework section coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Skills Section */}
      <div className={`mt-10 p-6 rounded-lg bg-${theme} border border-${reversetheme} bg-opacity-20`}>
        <h3 className={`text-2xl text-${reversetheme} font-bold mb-4`}>Additional Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Git', 'Docker', 'RESTful APIs', 'Database Design'].map((skill, index) => (
            <div key={index} className={`p-3 text-center border border-${reversetheme} rounded-md bg-${theme} text-${reversetheme}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}