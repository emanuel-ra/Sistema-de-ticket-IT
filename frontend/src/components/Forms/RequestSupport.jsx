import { useEffect } from "react"
import { useBranches } from "../../hooks/useBranches"
import { useDepartments } from "../../hooks/useDepartment"
import { useSupportTypes } from "../../hooks/useSupportTypes"

function RequestSupport() {  

    const { branches, getBranches } = useBranches()
    const { departments, getDepartments } = useDepartments()
    const { supportTypes, getSupportTypes } = useSupportTypes()
    
    useEffect(()=>{ getBranches() },[getBranches])
    useEffect(()=>{ getDepartments() },[getDepartments])
    useEffect(()=>{ getSupportTypes() },[getSupportTypes])
    
    
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
                            <select className="browser-default" id="branches" >
                                <option value="0" key={0}>Selecciona una sucursal</option>
                                {branches.map( branch => (<option value={branch.id} key={branch.id}>{branch.name}</option>))}
                            </select>
                        </div>

                        <div className="input-field col s12">
                            <select className="browser-default" >
                                <option value="">Selecciona un departamento</option>
                                {departments.map( department => (<option value={department.id} key={department.id}>{department.name}</option>))}
                            </select>
                        </div>

                        <div className="input-field col s12">
                            <select className="browser-default" >
                                <option value="">Selecciona tipo de solicitud</option>
                                {supportTypes.map( type => (<option value={type.id} key={type.id}>{type.name}</option>))}
                            </select>
                        </div>
                        
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="name" type="text" className="validate" />
                            <label htmlFor="name">First Name</label>
                        </div>
                        
                        <div className="input-field col s12">
                            <i className="material-icons prefix">attach_email</i>
                            <input id="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field col s12">
                            <i className="material-icons prefix">feed</i>
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Descripción</label>
                        </div>
                    
                    </form>
                </div>
                
            </div>
            <div className="card-action">
                <a className="waves-effect waves-light btn">
                    <i className="material-icons left">assignment_add</i> Generar solicitud
                </a>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default RequestSupport