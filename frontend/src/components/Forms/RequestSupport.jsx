function RequestSupport() {
  return (
    <>
     <div className="row">
        <div className="col s12">
        <div className="card ">
            <div className="card-content ">
                <span className="card-title">Nuevo Ticket</span>

                <div className="row">
                    <form action="" className="col s12">

                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nombre</label>
                        </div>


                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Descripción</label>
                        </div>
                    
                    </form>
                </div>
                
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default RequestSupport