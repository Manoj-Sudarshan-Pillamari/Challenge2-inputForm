import { useState } from 'react';
import './App.css';

function App() {

  const [selectedusername, setSelectedUsername] = useState('');
  const [selectedage, setSelectedAge] = useState();
  const [selectedabout, setSelectedAbout] = useState('');
  const [selectedmail, setSelectedMail] = useState('');
  const [selectedpwd, setSelectedPwd] = useState('');
  const [selectedgender, setSelectedGender] = useState();
  const [selectedfruit, setSelectedFruit] = useState([]);
  const [selectedcity, setSelectedCity] = useState('');
  const [selectedDOB, setSelectedDOB] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const requiredStyle = {
    color: "red"
  }

  const handleCheckboxChange = (fruit) => {
    if (selectedfruit.includes(fruit)) {
      setSelectedFruit(selectedfruit.filter((selectedFruit) => selectedFruit !== fruit));
    } else {
      setSelectedFruit([...selectedfruit, fruit]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
    e.target.reset();
    setSelectedUsername('');
    setSelectedAge('');
    setSelectedAbout('');
    setSelectedMail('');
    setSelectedPwd('');
    setSelectedGender('');
    setSelectedFruit([]);
    setSelectedCity('');
    setSelectedDOB('');
    setSelectedColor('');
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  return (
    <div className='main'>
      <h1><center>Basic form with input fields and a submit button.</center></h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='Uname'>Name<b style={requiredStyle}>*</b></label><br />
        <input type='text' name='Uname' value={selectedusername} onChange={(e) => { setSelectedUsername(e.target.value) }} required /><br />
        <label htmlFor='UAge'>Age<b style={requiredStyle}>*</b></label><br />
        <input type='number' name='UAge' value={selectedage} min={1} max={100} onChange={(e) => { setSelectedAge(e.target.value) }} required /><br />
        <label htmlFor='about'>About<b style={requiredStyle}>*</b></label><br />
        <textarea name='about' rows={5} value={selectedabout} onChange={(e) => { setSelectedAbout(e.target.value) }} required /><br />
        <label htmlFor='Umail'>Your email id<b style={requiredStyle}>*</b></label><br />
        <input type="email" name='Umail' value={selectedmail} onChange={(e) => { setSelectedMail(e.target.value) }} required /><br />
        <label htmlFor='pwd'>Enter Password<b style={requiredStyle}>*</b></label><br />
        <input type="password" name='pwd' value={selectedpwd} onChange={(e) => { setSelectedPwd(e.target.value) }} required /><br />
        <label htmlFor='gender'>Gender<b style={requiredStyle}>*</b></label><br />
        <div className='radio-group'>
          <label>
            <input type='radio' name="gender" value="Male" onChange={(e) => { setSelectedGender(e.target.value) }} />
            Male</label>
          <label>
            <input type='radio' name="gender" value="Female" onChange={(e) => { setSelectedGender(e.target.value) }} />
            Female</label>
        </div>
        <label>Favourite Fruit<b style={requiredStyle}>*</b></label><br />
        <div className='checkbox-group'>
          <label>
            <input type='checkbox' name='Apple' value="Apple" onChange={() => handleCheckboxChange('apple')} />
            Apple</label>
          <label>
            <input type='checkbox' name='Banana' value="Banana" onChange={() => handleCheckboxChange('banana')} />
            Banana</label>
          <label>
            <input type='checkbox' name='Mango' value="Mango" onChange={() => handleCheckboxChange('mango')} />
            Mango</label>
          <label>
            <input type='checkbox' name='Orange' value="Orange" disabled />
            Orange</label>
        </div>
        <label>City<b style={requiredStyle}>*</b></label><br />
        <select name='city' value={selectedcity} onChange={(e) => { setSelectedCity(e.target.value) }}>
          <option value="">---Select Your City---</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Banglore">Banglore</option>
        </select>
        <br />
        <label htmlFor='dob'>Date of Birth<b style={requiredStyle}>*</b></label><br />
        <input type='date' name="dob" max={getCurrentDate()} value={selectedDOB} onChange={(e) => { setSelectedDOB(e.target.value) }} required />
        <br />
        <label htmlFor='favColor'>Favourite Colour<b style={requiredStyle}>*</b></label> <br />
        <input type='color' name='favColor' value={selectedColor} onChange={(e) => { setSelectedColor(e.target.value) }} required /><br />
        <button disabled={
          selectedusername.length === 0 ||
          (selectedage <=0  || selectedage >100)||
          selectedmail.length === 0 ||
          selectedabout.length === 0 ||
          selectedpwd.length === 0 ||
          !selectedgender ||
          selectedfruit.length === 0 ||
          selectedcity.length === 0 ||
          (!selectedDOB || selectedDOB.length === 0) ||
          selectedColor.length === 0}>
            Submit</button>
      </form>
    </div>
  );
}

export default App;
