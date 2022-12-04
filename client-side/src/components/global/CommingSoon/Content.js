
const Content = () =>{
  return (
    <div className='content_wrapper'>
      <div className='content'>
        <h1> Coming Soon </h1>
        <p> 
          FLOH will serve as a suite style salon that will empower 
          cosmotogist and provide a unique salon going experience to guest.
        </p>
      </div>
      <div className='content'>
        <h2> Like to stay in the loop? </h2>
        <p> Subscribe to receive surveys & exclusive updates.</p>
        <form className='subscribe_form'>
          <input type='text' className='subscribe_input'/>
          <button className='subscribe_button'>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Content;
