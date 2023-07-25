


const Cizgi = ({id,name,imgUrl,phone,email}) => {
    
  return (
    
        
    <div key={id} className="card col col-sm-6 col-md-2 p-4   " >
    <h5 className="cart-title text-center text-danger">{name}</h5>
  <img src={imgUrl} className="card-img-top  bg-danger text-center mt-5 h-50 w-100 " alt="..." />
  <div className="card-body">
    
    <p className="card-text text-success ">{phone}</p>
    <p className="card-text text-success">{email}</p>
   
  </div>
</div>
    
    
  )
}

export default Cizgi;