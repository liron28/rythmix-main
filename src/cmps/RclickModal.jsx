export function RclickModal({options=[], icons=[] ,callbacks=[]}) {

  return (
    <div className="rclick-modal ">
      <div className="wrapper">
        <div className="content">
          <ul className="menu p-0">
            {
            options.map((option,idx) => 
            <li className="modal-list m-0 p-0" key={option}>
              
              <div onClick={callbacks}>
                <span>icon </span>
                <span>{option}</span>
              </div>
            </li>
            )}
            </ul>
        </div>
      </div>
    </div>
  )
}