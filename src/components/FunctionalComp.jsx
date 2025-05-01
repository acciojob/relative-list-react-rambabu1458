import React,{useState} from "react";

const FunctionalComp = () => {
  const [showPara, setShowPara] = useState(false);
  const handleClick = () => setShowPara(true);
//   const handleClick = () => setShowPara(prev => !prev);// toggle between true/false
  return (
    <div>
      <h2>FunctionalComp</h2>
      <button id="click" onClick={handleClick}>
        Click Me
        {/* {showPara ? 'Hide Paragraph' : 'Show Paragraph'} */}
      </button>
      {showPara && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
};

export default FunctionalComp;
