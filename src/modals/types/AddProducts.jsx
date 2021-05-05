import React, { useRef, useState ,useContext} from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    width: 80%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    input,
    select {
      margin-top: 1em;
      margin-bottom: 1em;
      border-radius: 10px;
      height: 3em;
    }
    img {
      width: 89%;
      border-radius: 30px;
      height: 23em;
    }
    textarea {
      grid-column: 1/3;
      height: 15em;
    }
    .container-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em;
    }
    #previewImage {
      display: none;
    }
    .uploadImage {
      background-color: #3ea1db;
      width: 60%;
      padding: 1em;
      border-radius: 10px;
      color: #fff;
      display: flex;
      gap: 1em;
    }
    .preview {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
    }
  }
`;
function AddProducts() {
  const previewRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const typeRef = useRef(null);

  const descriptionRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [type, setType] = useState(null);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState(null);
  const formData=new FormData()
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,price,type,file,description)
    formData.append("name",name)
    formData.append("price",price)
    formData.append("type",type)
    formData.append("file",file)
    formData.append("description",description)

    console.log(localStorage.getItem("token"))


    fetch("/dashBoard/Menu",{
      method:"POST",
      body:JSON.stringify(formData),
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    }).then(res=>res.json()).then(data=>console.log(data))

  }
  return (
    <Main>
      <h1>Add new product</h1>
      <form onSubmit={handleSubmit}>
        <div className="container-data">
          <label>Name of product</label>
          <input type="text" name="name"  onChange={()=>setName(nameRef.current.value)} ref={nameRef}  required/>
          <label>Price of products</label>
          <input type="number" name="price"  onChange={()=>setPrice(priceRef.current.value)} ref={priceRef} required/>
          <labe>Type</labe>{" "}
          <select  onChange={()=>setType(typeRef.current.value)} ref={typeRef} >
            <option>Beverages</option>
            <option>Foods</option>
            <option>sweets</option>
          </select>
        </div>
        <div className="preview">
          <img src={imagePreview} className="preview" />
          <label className="uploadImage" htmlFor="previewImage">
            <i class="fas fa-upload"></i>Upload image
          </label>
          <input required
            ref={previewRef}
            type="file"
            id="previewImage"
            onChange={() => {
              const datas = URL.createObjectURL(
                new Blob([previewRef.current.files[0]])
              );
              setImagePreview(datas)
              setFile(previewRef.current.files[0])
            }}
          />
        </div>

        <textarea  required placeholder="Description of product"  onChange={()=>setDescription(descriptionRef.current.value)} ref={descriptionRef} />
        <input type="submit" />
      </form>
    </Main>
  );
}

export default AddProducts;
