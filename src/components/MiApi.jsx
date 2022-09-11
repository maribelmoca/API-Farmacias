import { useState, useEffect } from "react";

function MiApi() {
  
  //Estados
  const [pharmacyList, setpharmacyList] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    consultInformation();
  }, []);

  const consultInformation = async () => {
    const url = "http://farmanet.minsal.cl/index.php/ws/getLocalesTurnos";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setpharmacyList([...pharmacyList, ...data]);
  };


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };


  const filtered = !search 
    ? pharmacyList 
    : pharmacyList.filter((item) => 
        item.comuna_nombre.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
     
      <input className="form-control mb-5" type="text" placeholder="Busca la comuna de la farmacia" value={search} onChange={handleSearchChange} />

      <div className="row">
        
        {filtered.map((p) => (
          <div className="d-flex col-12 col-lg-6 py-3" key={p.local_id}>
            <div className="card w-100 h-100">
              <div className="d-flex justify-content-between">
                <h4>{p.local_nombre}</h4>
                <img className="icon-card" src="/img/pharmacy.png" alt="Copa de Higía"/>
              </div>
              <p>Comuna: <span>{p.comuna_nombre}</span></p>
              <p>Dirección: <span>{p.local_direccion}</span></p>
              <p>Día de turno: <span>{p.funcionamiento_dia}</span></p>
              <p>Horario: <span>{p.funcionamiento_hora_apertura} a {p.funcionamiento_hora_cierre}</span></p>
              <p>Teléfono: <span>{p.local_telefono}</span></p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default MiApi;
