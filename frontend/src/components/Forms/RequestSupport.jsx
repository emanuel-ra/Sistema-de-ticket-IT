import { useEffect } from "react"
import { useBranches } from "../../hooks/useBranches"
import { useDepartments } from "../../hooks/useDepartment"
import { useSupportTypes } from "../../hooks/useSupportTypes"
import { useForm } from "react-hook-form";
import { useTickets } from "../../hooks/useTickets"

function RequestSupport() {  

    const { register, handleSubmit, reset , formState: { errors } } = useForm();

    const { branches, getBranches } = useBranches()
    const { departments, getDepartments } = useDepartments()
    const { supportTypes, getSupportTypes } = useSupportTypes()

    const { ticket, createTicket } = useTickets()
    /**
     * TODO: FIX THE ERROR WHEN SOME CREATE THE FIRS  TICKET, IT SHOW UNDEFINED
     */
    const onSubmit = data => {
        
        createTicket({ data })
        M.toast({html: `Ticket #${ticket.data?.id} generado con éxito`})

        reset({
            name: "",
            email: "",
            branch_id:"",
            department_id:"",
            type_id:"",
            description:"" ,
            device:"" ,
        })
        
    }

  
    
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
                    <form onSubmit={handleSubmit(onSubmit)} className="col s12">
                        
                        <div className="input-field col s12">
                            <select 
                                className="browser-default" 
                                id="branches" 
                                defaultValue=""
                                {...register("branch_id", { required: true })} >
                                <option value="" disabled key={0}>Selecciona una sucursal</option>
                                {branches.map( branch => (<option value={branch.id} key={branch.id}>{branch.name}</option>))}
                            </select>
                            {errors.branch_id && <span className="helper-text red-text" data-error="wrong" data-success="right">Sucursal requerida</span>}
                        </div>

                        <div className="input-field col s12">
                            <select 
                                className="browser-default" 
                                id="departments"
                                defaultValue=""
                                {...register("department_id", { required: true })}>
                                <option value="" key={0} disabled>Selecciona un departamento</option>
                                {departments.map( department => (<option value={department.id} key={department.id}>{department.name}</option>))}
                            </select>
                            {errors.department_id && <span className="helper-text red-text" data-error="wrong" data-success="right">Departamento requerido</span>}
                        </div>

                        <div className="input-field col s12">
                            <select className="browser-default" id="supportTypes" 
                                defaultValue=""
                                {...register("type_id", { required: true })}>
                                <option value="" key={0} disabled >Selecciona tipo de solicitud</option>
                                {supportTypes.map( type => (<option value={type.id} key={type.id}>{type.name}</option>))}
                            </select>
                            {errors.type_id && <span className="helper-text red-text" data-error="wrong" data-success="right">Tipo requerida</span>}
                        </div>
                        
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="name" type="text" className="validate" {...register("name", { required: true })} />
                            <label htmlFor="name">Nombre</label>
                            {errors.name && <span className="helper-text red-text" data-error="wrong" data-success="right">Nombre requerido</span>}
                        </div>
                        
                        <div className="input-field col s12">
                            <i className="material-icons prefix">attach_email</i>
                            <input id="email" type="text" className="validate" {...register("email")}  />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field col s12">
                            <i className="material-icons prefix">feed</i>
                            <textarea id="description" className="materialize-textarea" {...register("description", { required: true })}></textarea>
                            <label htmlFor="description">Descripción del problema/solicitud</label>
                            {errors.description && <span className="helper-text red-text" data-error="wrong" data-success="right">Descripción requerida</span>}
                        </div>

                        <div className="input-field col s3">
                            <i className="material-icons prefix">computer</i>
                            <input id="device" type="text" className="validate" {...register("device", { required: true } )} />
                            <label htmlFor="device">Equipo</label>
                            {errors.device && <span className="helper-text red-text" data-error="wrong" data-success="right">Numero de equipo requerido</span>}
                        </div>
                    
                    </form>
                </div>
                
            </div>
            <div className="card-action">
                <a className="waves-effect waves-light btn" onClick={handleSubmit(onSubmit)}>
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