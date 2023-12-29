import  { useState } from 'react';
import './App.scss';
import PageHeader from './components/PageHeader/PageHeader';
import SegmentCreation from './components/SegmentCreation/SegmentCreation';
import SegmentPopup from './components/SegmentPopup/SegmentPopup';
function App() {
  const [openPopup, setOpenPopup ] = useState(false);
  function handleCloseModal() {
    setOpenPopup(false);
  }
  return (
    <div className="App">
      {openPopup && <SegmentPopup onClose ={handleCloseModal} openPopup = {openPopup} setOpenPopup = {setOpenPopup}/>}
      <PageHeader text = 'View Audience'/>
      <SegmentCreation setOpenPopup = {setOpenPopup} />
    </div>
  );
}

export default App;
