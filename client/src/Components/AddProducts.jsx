import { useState, useEffect } from "react";

import './AddProducts.css';
const AddProducts = () => {
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [newProduct, setNewProduct] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [gender, setGender] = useState("");
  const [fit, setFit] = useState("");
  const [fabric, setFabric] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [color, setColor] = useState("");
  const [design, setDesign] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);
  const [dresses, setDresses] = useState([]);
  const [sizes, setSizes] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
    XXXL: 0,
  });
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  const handleClick = async () => {
    if (!img) {
      setUploadStatus("No main image selected");
      return;
    }
    if (!name || !newPrice || !category || !gender) {
      alert("Please fill out all required fields.");
      return;
    }
    if (id <= 0) {
      alert("Enter a valid ID");
      return;
    }

    try {
      const uploadResponse = await fetch(
        "https://ecommerce-admin072024.vercel.app/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            new_price: parseFloat(newPrice),
            old_price: parseFloat(oldPrice),
            description,
            main_image: img,
            image_2: img2,
            image_3: img3,
            image_4: img4,
            category,
            discount,
            gender,
            new_product: newProduct,
            fit,
            fabric,
            sleeve,
            color,
            design,
            sizes,
          }),
        }
      );

      if (uploadResponse.ok) {
        setUploadStatus("Upload and data save successful");
        resetForm();
      } else {
        const errorData = await uploadResponse.json();
        setUploadStatus(`Upload failed: ${errorData.message}`);
      }
    } catch (error) {
      setUploadStatus(`Upload failed: ${error.message}`);
    }
  };

  const handleNewProductChange = (event) => {
    setNewProduct(event.target.checked);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.checked);
  };

  const handleSizeChange = (size, value) => {
    setSizes((prevSizes) => ({
      ...prevSizes,
      [size]: value,
    }));
  };

  const incrementSize = (size) => {
    setSizes((prevSizes) => ({
      ...prevSizes,
      [size]: prevSizes[size] + 1,
    }));
  };

  const decrementSize = (size) => {
    if (sizes[size] > 0) {
      setSizes((prevSizes) => ({
        ...prevSizes,
        [size]: prevSizes[size] - 1,
      }));
    }
  };

  const getSizeValue = (size) => sizes[size] || 0;

  const resetForm = () => {
    setId(0);
    setImg("");
    setImg2("");
    setImg3("");
    setImg4("");
    setName("");
    setNewPrice("");
    setOldPrice("");
    setDescription("");
    setDiscount(false);
    setCategory("");
    setGender("");
    setNewProduct(false);
    setFit("");
    setFabric("");
    setSleeve("");
    setColor("");
    setDesign("");
    setSizes({
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      XXL: 0,
      XXXL: 0,
    });
  };

  useEffect(() => {}, []);
  return (
    <section className="addProducts-section ">
       <h1 className="">Add Products</h1>
      <div className="ADD px-10 flex gap-4 justify-center">
       
        <div className="box box-1 w-[600px] p-5">
        <div className=" line-1 flex justify-between mt-2">
            <div className="">
              {/* ID */}
              <div className=" ">
                <label htmlFor="id" className="">
                  Id
                </label>
              </div>
              <div className="">
                {" "}
                <input
                  type="number"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="shadow appearance-none border rounded w-[100px] h-[30px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div className="">
              {/* Gender */}
              <div className="mb-4 flex flex-col justify-center">
                <label htmlFor="gender" className=" ">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="shadow appearance-none border rounded w-[100px] h-[30px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                  value={gender} // Assuming gender is a state variable
                  onChange={(e) => setGender(e.target.value)} // Assuming setGender is a state setter function
                >
                  <option value="">Select Gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
            </div>
            <div className="">
              {/* Gender */}
              <div className="mb-4 flex flex-col justify-center">
                <label htmlFor="category" className=" ">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="shadow appearance-none border rounded w-[100px] h-[30px]  px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                  value={category} // Assuming gender is a state variable
                  onChange={(e) => setCategory(e.target.value)} // Assuming setGender is a state setter function
                >
                  <option value="">Select Category</option>
                  <option value="shirt">Shirt</option>
                  <option value="tshirt">Tshirt</option>
                  <option value="jean">Jean</option>
                  <option value="trouser">Trouser</option>
                  <option value="hoodie">Hoodie</option>
                  <option value="hoodie">Shoe</option>
                </select>
              </div>
            </div>
          </div>
          <div className="line-2 flex flex-col gap-4 mt-1">
          <div className="">
              {/* NAME */}
              <div className=" ">
                <label htmlFor="name" className="">
                  Name
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div className="">
              {/* Desc */}
              <div className=" ">
                <label htmlFor="description" className="">
                  DESCRIPTION
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div className="">
              {/* MAIN-IMAGE */}
              <div className=" ">
                <label htmlFor="img" className="">
                  MAIN IMAGE
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>

            </div>

            <div className="line-3 flex mt-4">
            <div className="">
              {/* SECOND-IMAGE */}
              <div className=" ">
                <label htmlFor="img2" className="">
                  IMAGE 2
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={img2}
                  onChange={(e) => setImg2(e.target.value)}
                  className="shadow appearance-none border rounded w-full  h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div>
              {/* IMAGE 3 */}
              <div className="">
                <label htmlFor="img3" className="">
                  IMAGE 3
                </label>
              </div>
              <div className="px-6 mb-4">
                <input
                  type="text"
                  value={img3}
                  onChange={(e) => setImg3(e.target.value)}
                  className="shadow appearance-none border rounded w-full  h-[30px] py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>

            <div>
              {/* IMAGE 4 */}
              <div className="">
                <label htmlFor="img4" className="">
                  IMAGE 4
                </label>
              </div>
              <div className="px-6 mb-4">
                <input
                  type="text"
                  value={img4}
                  onChange={(e) => setImg4(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
              </div>

              <div className="line-4 grid grid-cols-3 gap-4 justify-center px-4 items-center">
            {/* FIT */}
            <div className="">
              <label
                htmlFor="fit"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fit
              </label>
              <select
                id="fit"
                name="fit"
                className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={fit}
                onChange={(e) => setFit(e.target.value)}
              >
                <option value="">Select Fit</option>
                <option value="regular">Regular</option>
                <option value="slim">Slim</option>
                <option value="oversized">Oversized</option>
              </select>
            </div>

            {/* FABRIC */}
            <div className="">
              <label
                htmlFor="fabric"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fabric
              </label>
              <input
                type="text"
                id="fabric"
                value={fabric}
                onChange={(e) => setFabric(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* SLEEVE */}
            <div className="">
              <label
                htmlFor="sleeve"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Sleeve
              </label>
              <select
                id="sleeve"
                name="sleeve"
                className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={sleeve}
                onChange={(e) => setSleeve(e.target.value)}
              >
                <option value="">Select Sleeve</option>
                <option value="full">Full</option>
                <option value="half">Half</option>
              </select>
            </div>

            {/* COLOR */}
            <div className="">
              <label
                htmlFor="color"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* DESIGN */}
            <div className="">
              <label
                htmlFor="design"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Design
              </label>
              <input
                type="text"
                id="design"
                value={design}
                onChange={(e) => setDesign(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        <div className="box-r flex flex-col gap-2 ">
        <div className=" box-2 w-[400px] h-[50%]">
        <div>
              <h3 className="block text-gray-700 text-sm font-bold mb-2">
                Image Previews
              </h3>
              <div className="flex flex-col gap-2 items-center mt-2">
                <div className="flex items-center justify-center">
                  {img && (
                    <img
                      src={img}
                      alt="Main"
                      className="w-36 h-36 object-cover cursor-pointer"
                      onClick={() => handleImageClick(img)}
                    />
                  )}
                </div>
                <div className="flex gap-2">
                  {img2 && (
                    <img
                      src={img2}
                      alt="Second"
                      className="w-[6.5rem] h-[6.5rem] object-cover cursor-pointer"
                      onClick={() => handleImageClick(img2)}
                    />
                  )}
                  {img3 && (
                    <img
                      src={img3}
                      alt="Third"
                      className="w-[6.5rem] h-[6.5rem] object-cover cursor-pointer"
                      onClick={() => handleImageClick(img3)}
                    />
                  )}
                  {img4 && (
                    <img
                      src={img4}
                      alt="Fourth"
                      className="w-[6.5rem] h-[6.5rem] object-cover cursor-pointer"
                      onClick={() => handleImageClick(img4)}
                    />
                  )}
                </div>
              </div>
            </div>
            </div>
            <div className="box-3 h-[30%]">
            <div className="flex div-1">
              {/* SIZES */}
              <div className="px-2">
                <label className="block text-gray-700 text-md font-bold text-center">
                  Sizes
                </label>
                <div className="grid md:grid-cols-6 gap-2">
                  {Object.keys(sizes).map((size) => (
                    <div key={size} className="flex flex-col items-center">
                      <label className="flex flex-col items-center">
                        <span className="text-gray-700 font-medium mb-1">
                          {size}
                        </span>
                        <input
                          type="number"
                          value={sizes[size]}
                          onChange={(e) =>
                            handleSizeChange(size, parseInt(e.target.value))
                          }
                          className="shadow appearance-none border rounded w-12 h-10 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          min="0"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-5 div-2">
              <div className="flex items-center gap-[3px]">
                <input
                  type="checkbox"
                  checked={newProduct}
                  onChange={handleNewProductChange}
                  className="check-box"
                />
                <label className="">New Product</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={discount}
                  onChange={handleDiscountChange}
                  className="check-box"
                />
                <label className="">Discount</label>
              </div>
            </div> 
            </div>
            <div className="box-3">
            <div className="flex gap-5">
              <div className="">
                {/* OPRICE */}
                <div className="">
                  <label htmlFor="oldPrice" className="">
                    OldPrice
                  </label>
                </div>
                <div className="">
                  {" "}
                  <input
                    type="number"
                    value={oldPrice}
                    onChange={(e) => setOldPrice(e.target.value)}
                    className="shadow appearance-none border rounded h-[30px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] right-s-box-input-2 opacity-50 w-[80%]"
                  />
                </div>
              </div>
              <div className="">
                {/* ID */}
                <div className=" ">
                  <label htmlFor="newPrice" className="">
                    New Price
                  </label>
                </div>
                <div className="">
                  {" "}
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="shadow appearance-none border rounded h-[30px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] right-s-box-input-2 w-[80%]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-6 mt-4">
              <button
                className=" bg-green-500 text-white p-4 rounded-lg"
                onClick={handleClick}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
            </div>
    </section>
  );
};
export default AddProducts;
